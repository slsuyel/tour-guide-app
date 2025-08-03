"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Upload, X, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { useGetEventQuery, useUpdateEventMutation } from "@/components/Redux/RTK/eventApi"
import { toast } from "sonner"



export default function EditEvent() {

const {id} = useParams()

  const { data, isLoading: isLoadingEvent } = useGetEventQuery(id as string)
  const [updateEvent, { isLoading: isUpdating }] = useUpdateEventMutation()
  const router = useRouter()

  const [formData, setFormData] = useState({
    title: "",
    event_date: "",
    description: "",
    location: "",
    event_type: "",
    cover_image: null as File | null,
    gallery: [] as File[],
  })

  const [coverImagePreview, setCoverImagePreview] = useState<string | null>(null)
  const [galleryPreviews, setGalleryPreviews] = useState<string[]>([])
  const [existingGallery, setExistingGallery] = useState<string[]>([])
  const [removedGalleryImages, setRemovedGalleryImages] = useState<string[]>([])

  useEffect(() => {
    if (data?.data) {
      const event = data.data
      setFormData({
        title: event.title || "",
        event_date: event.event_date ? new Date(event.event_date).toISOString().split("T")[0] : "",
        description: event.description || "",
        location: event.location || "",
        event_type: event.event_type || "",
        cover_image: null,
        gallery: [],
      })

      if (event.cover_image) {
        setCoverImagePreview(event.cover_image)
      }

      if (event.gallery && Array.isArray(event.gallery)) {
        setExistingGallery(event.gallery)
      }
    }
  }, [data])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData((prev) => ({
        ...prev,
        cover_image: file,
      }))

      const reader = new FileReader()
      reader.onload = (e) => {
        setCoverImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleGalleryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        gallery: [...prev.gallery, ...files],
      }))

      files.forEach((file) => {
        const reader = new FileReader()
        reader.onload = (e) => {
          setGalleryPreviews((prev) => [...prev, e.target?.result as string])
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const removeGalleryImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      gallery: prev.gallery.filter((_, i) => i !== index),
    }))
    setGalleryPreviews((prev) => prev.filter((_, i) => i !== index))
  }

  const removeExistingGalleryImage = (url: string) => {
    setExistingGallery((prev) => prev.filter((item) => item !== url))
    setRemovedGalleryImages((prev) => [...prev, url])
  }

  const removeCoverImage = () => {
    setFormData((prev) => ({
      ...prev,
      cover_image: null,
    }))
    setCoverImagePreview(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formDataToSend = new FormData()

    formDataToSend.append("title", formData.title)
    formDataToSend.append("event_date", formData.event_date)
    formDataToSend.append("description", formData.description)
    formDataToSend.append("location", formData.location)
    formDataToSend.append("event_type", formData.event_type)

    // Add existing gallery images that weren't removed
    formDataToSend.append("existing_gallery", JSON.stringify(existingGallery))

    // Add removed gallery images
    formDataToSend.append("removed_gallery", JSON.stringify(removedGalleryImages))

    if (formData.cover_image) {
      formDataToSend.append("cover_image", formData.cover_image)
    }

    formData.gallery.forEach((file) => {
      formDataToSend.append("gallery", file)
    })

    try {
      const res = await updateEvent({ id: id, ...formDataToSend }).unwrap()
      if (res.status_code === 200) {
        router.push(`/dashboard/events/${id}`)
        toast.success("ইভেন্ট সফলভাবে আপডেট হয়েছে!")
      }
    } catch (error) {
      console.error("Error updating event:", error)
      toast.error("ইভেন্ট আপডেট করতে সমস্যা হয়েছে!")
    }
  }

  if (isLoadingEvent) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-6">
          <Link href={`/dashboard/events/${id}`}>
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              ফিরে যান
            </Button>
          </Link>
          <h1 className="text-2xl font-bold ml-2">ইভেন্ট সম্পাদনা</h1>
        </div>

        <Card className="shadow-none p-2 md:p-4">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardTitle className="text-2xl font-bold">ইভেন্ট তথ্য আপডেট</CardTitle>
            <p className="text-blue-100">Update Event Information</p>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title" className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  ইভেন্টের নাম (Event Title) *
                </Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  placeholder="ইভেন্টের নাম লিখুন"
                  className="text-lg"
                  required
                />
              </div>

              {/* Event Date */}
              <div className="space-y-2">
                <Label htmlFor="event_date" className="text-sm font-medium">
                  ইভেন্টের তারিখ (Event Date) *
                </Label>
                <Input
                  id="event_date"
                  type="date"
                  value={formData.event_date}
                  onChange={(e) => handleInputChange("event_date", e.target.value)}
                  required
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-sm font-medium">
                  বিবরণ (Description) *
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="ইভেন্টের বিস্তারিত বিবরণ লিখুন"
                  rows={4}
                  required
                />
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location" className="text-sm font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  স্থান (Location) *
                </Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  placeholder="ইভেন্টের স্থান লিখুন"
                  required
                />
              </div>

              {/* Event Type */}
              <div className="space-y-2">
                <Label htmlFor="event_type" className="text-sm font-medium">
                  ইভেন্টের ধরন (Event Type) *
                </Label>
                <Select
                  value={formData.event_type}
                  onValueChange={(value) => handleInputChange("event_type", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="ইভেন্টের ধরন নির্বাচন করুন" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="উৎসব">উৎসব (Festival)</SelectItem>
                    <SelectItem value="প্রতিযোগিতা">প্রতিযোগিতা </SelectItem>
                    <SelectItem value="সেমিনার">সেমিনার</SelectItem>
                    <SelectItem value="কর্মশালা">কর্মশালা </SelectItem>
                    <SelectItem value="সাংস্কৃতিক">সাস্কৃতিক</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Cover Image */}
              <div className="space-y-2">
                <Label htmlFor="cover_image" className="text-sm font-medium flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  কভার ইমেজ (Cover Image)
                </Label>
                <Input
                  id="cover_image"
                  type="file"
                  accept="image/*"
                  onChange={handleCoverImageChange}
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                {coverImagePreview && (
                  <div className="relative inline-block">
                    <img
                      src={coverImagePreview || "/placeholder.svg"}
                      alt="Cover preview"
                      className="w-32 h-32 object-cover rounded-lg border-2 border-gray-200"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full p-0"
                      onClick={removeCoverImage}
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                )}
              </div>

              {/* Existing Gallery */}
              {existingGallery.length > 0 && (
                <div className="space-y-2">
                  <Label className="text-sm font-medium">বর্তমান গ্যালারি ইমেজ</Label>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {existingGallery.map((image, index) => (
                      <div key={`existing-${index}`} className="relative">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Gallery image ${index + 1}`}
                          className="w-full h-24 object-cover rounded-lg border-2 border-gray-200"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          className="absolute -top-2 -right-2 w-6 h-6 rounded-full p-0"
                          onClick={() => removeExistingGalleryImage(image)}
                        >
                          <X className="w-3 h-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* New Gallery Images */}
              <div className="space-y-2">
                <Label htmlFor="gallery" className="text-sm font-medium flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  নতুন গ্যালারি ইমেজ (New Gallery Images)
                </Label>
                <Input
                  id="gallery"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleGalleryChange}
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                />
                {galleryPreviews.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {galleryPreviews.map((preview, index) => (
                      <div key={`new-${index}`} className="relative">
                        <img
                          src={preview || "/placeholder.svg"}
                          alt={`New gallery preview ${index + 1}`}
                          className="w-full h-24 object-cover rounded-lg border-2 border-gray-200"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          className="absolute -top-2 -right-2 w-6 h-6 rounded-full p-0"
                          onClick={() => removeGalleryImage(index)}
                        >
                          <X className="w-3 h-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-4 pt-6">
                <Link href={`/dashboard/events/${id}`} className="flex-1">
                  <Button type="button" variant="outline" className="w-full">
                    বাতিল করুন (Cancel)
                  </Button>
                </Link>
                <Button
                  type="submit"
                  disabled={isUpdating}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold"
                >
                  {isUpdating ? "আপডেট হচ্ছে..." : "ইভেন্ট আপডেট করুন"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

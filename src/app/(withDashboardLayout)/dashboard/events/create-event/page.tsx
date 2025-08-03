"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Upload, X } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCreateEventMutation } from "@/components/Redux/RTK/eventApi"
import { toast } from "sonner"

export default function CreateEvent() {
  const [createEvent, { isLoading }] = useCreateEventMutation()
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

  const removeCoverImage = () => {
    setFormData((prev) => ({
      ...prev,
      cover_image: null,
    }))
    setCoverImagePreview(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
  
    formDataToSend.append("title", formData.title);
    formDataToSend.append("event_date", formData.event_date);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("event_type", formData.event_type);
  
    if (formData.cover_image) {
      formDataToSend.append("cover_image", formData.cover_image);
    }
  
    formData.gallery.forEach((file: File, ) => {
      formDataToSend.append("gallery", file);
    });
  
    try {
      const res = await createEvent(formDataToSend).unwrap();
      console.log(res);
      if (res.status_code == 201) {
        router.push(`/dashboard/events`)
        toast.success("নতুন ইভেন্ট সফলভাবে তৈরি হয়েছে!");
      }
    } catch (error) {
      console.error("Error creating event:", error);
      alert("ইভেন্ট তৈরি করতে সমস্যা হয়েছে! (Failed to create the event)");
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="shadow-none p-2 md:p-4">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardTitle className="text-2xl font-bold">ইভেন্ট তথ্য ফর্ম</CardTitle>
         
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title" className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  ইভেন্টের নাম  *
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
                  ইভেন্টের তারিখ  *
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
                  বিবরণ *
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
                  স্থান *
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
                  ইভেন্টের ধরন *
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
                    <SelectItem value="উৎসব">উৎসব </SelectItem>
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
                  কভার ইমেজ 
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

              {/* Gallery */}
              <div className="space-y-2">
                <Label htmlFor="gallery" className="text-sm font-medium flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  গ্যালারি ইমেজ 
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
                      <div key={index} className="relative">
                        <img
                          src={preview || "/placeholder.svg"}
                          alt={`Gallery preview ${index + 1}`}
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
                <Link href="/dashboard/events" className="flex-1">
                  <Button type="button" variant="outline" className="w-full">
                    বাতিল করুন 
                  </Button>
                </Link>
                <Button
                  type="submit" disabled={isLoading}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold"
                >
                  ইভেন্ট তৈরি করুন 
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

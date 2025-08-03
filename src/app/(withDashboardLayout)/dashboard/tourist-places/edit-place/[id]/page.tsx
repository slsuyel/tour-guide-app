"use client"

import type React from "react"
import { useState, type FormEvent, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Plus, Check, X } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import {
  useCreatePlaceCategoryMutation,
  useGetAllPlaceCategoriesQuery,
  useGetPlaceByIdQuery,
  useUpdateTouristPlaceMutation,
} from "@/components/Redux/RTK/placeApi"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from "sonner"
import { useParams, useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import LokkhoEditor from "../../create-place/_components/LokkhoEditor"

interface Category {
  id: string
  name: string
}

export default function PlaceEdit() {
  const { id } = useParams()
  const { data: single, isLoading: getting } = useGetPlaceByIdQuery(id)

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

  const [createPlaceCategory] = useCreatePlaceCategoryMutation()
  const [updateTouristPlace, { isLoading }] = useUpdateTouristPlaceMutation()
  const { data } = useGetAllPlaceCategoriesQuery(undefined)

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    category_id: "",
    location: "",
    description: "",
    special_features: "",
    main_attractions: "",
    purpose_and_significance: "",
    history: "",
    architecture: "",
    how_to_go: "",
    where_to_stay: "",
    where_to_eat: "",
    ticket_price: "",
    opening_hours: "",
    best_time_to_visit: "",
    map_link: "",
  })

  // File state - separate from form data
  const [mainImage, setMainImage] = useState<File | null>(null)
  const [galleryFiles, setGalleryFiles] = useState<File[]>([])

  const [isCreateCategoryModalOpen, setIsCreateCategoryModalOpen] = useState(false)
  const [newCategoryName, setNewCategoryName] = useState("")
  const [mainImagePreview, setMainImagePreview] = useState<string>("")
  const [galleryPreviews, setGalleryPreviews] = useState<string[]>([])

  const router = useRouter()

  // Handle input changes for text fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))




    // If this is the category selection, update the selectedCategory state
    if (id === "category_id" && value) {
      const category = data?.data?.find((cat: Category) => cat.id === value)
      setSelectedCategory(category || null)
    }
  }
  const handleEditorChange = (editorContent: string) => {
    setFormData((prev) => ({ ...prev, purpose_and_significance: editorContent }));
  };
  const handleAttractionsChange = (editorContent: string) => {
    setFormData((prev) => ({ ...prev, main_attractions: editorContent }));
  };

  // Handle main image file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const fileType = file.type.toLowerCase()
      const fileSize = file.size

      // Validate file type
      if (fileType !== "image/jpeg" && fileType !== "image/jpg" && fileType !== "image/png") {
        toast.error("অবৈধ ফাইল টাইপ। শুধুমাত্র JPG, JPEG, PNG ফাইল আপলোড করুন।")
        e.target.value = "" // Clear the input
        return
      }

      // Validate file size (2MB limit)
      if (fileSize > 2 * 1024 * 1024) {
        toast.error("ফাইল সাইজ 2MB এর বেশি। ছোট সাইজের ফাইল আপলোড করুন।")
        e.target.value = "" // Clear the input
        return
      }

      setMainImage(file)

      // Create a preview URL
      const previewUrl = URL.createObjectURL(file)
      setMainImagePreview(previewUrl)
    }
  }

  // Handle gallery image file selection - SIMPLIFIED
  const handleGalleryFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // Clear previous gallery files and previews
      galleryPreviews.forEach((url) => URL.revokeObjectURL(url))
      setGalleryFiles([])
      setGalleryPreviews([])

      const files = Array.from(e.target.files)

      // Validate file types and sizes
      const validFiles = files.filter((file) => {
        const fileType = file.type.toLowerCase()
        const isValidType = fileType === "image/jpeg" || fileType === "image/jpg" || fileType === "image/png"
        const isValidSize = file.size <= 2 * 1024 * 1024 // 2MB limit

        if (!isValidType) {
          toast.error(`${file.name} - অবৈধ ফাইল টাইপ। শুধুমাত্র JPG, JPEG, PNG ফাইল আপলোড করুন।`)
        }

        if (!isValidSize) {
          toast.error(`${file.name} - ফাইল সাইজ 2MB এর বেশি। ছোট সাইজের ফাইল আপলোড করুন।`)
        }

        return isValidType && isValidSize
      })

      if (validFiles.length === 0) return

      // Set new gallery files
      setGalleryFiles(validFiles)

      // Create preview URLs for new files
      const newPreviews = validFiles.map((file) => URL.createObjectURL(file))
      setGalleryPreviews(newPreviews)
    }
  }

  // Remove a gallery image
  const removeGalleryImage = (index: number) => {
    setGalleryFiles((prev) => {
      const newFiles = [...prev]
      newFiles.splice(index, 1)
      return newFiles
    })

    setGalleryPreviews((prev) => {
      const newPreviews = [...prev]
      // Revoke the URL to prevent memory leaks
      if (newPreviews[index]) {
        URL.revokeObjectURL(newPreviews[index])
      }
      newPreviews.splice(index, 1)
      return newPreviews
    })
  }

  // Clean up preview URLs when component unmounts
  useEffect(() => {
    return () => {
      if (mainImagePreview && mainImage) {
        URL.revokeObjectURL(mainImagePreview)
      }
      galleryPreviews.forEach((url) => {
        URL.revokeObjectURL(url)
      })
    }
  }, [])

  // Populate form with existing data when it loads
  useEffect(() => {
    if (single?.data) {
      const placeData = single.data
      setFormData({
        name: placeData.name || "",
        category_id: placeData.category_id || "",
        location: placeData.location || "",
        description: placeData.description || "",
        special_features: placeData.special_features || "",
        main_attractions: placeData.main_attractions || "",
        purpose_and_significance: placeData.purpose_and_significance || "",
        history: placeData.history || "",
        architecture: placeData.architecture || "",
        how_to_go: placeData.how_to_go || "",
        where_to_stay: placeData.where_to_stay || "",
        where_to_eat: placeData.where_to_eat || "",
        ticket_price: placeData.ticket_price || "",
        opening_hours: placeData.opening_hours || "",
        best_time_to_visit: placeData.best_time_to_visit || "",
        map_link: placeData.map_link || "",
      })

      // Set selected category if available
      if (placeData.category_id && data?.data) {
        const category = data.data.find((cat: Category) => cat.id === placeData.category_id)
        setSelectedCategory(category || null)
      }

      // Set main image preview if available
      if (placeData.image_url) {
        setMainImagePreview(placeData.image_url)
      }
    }
  }, [single, data])

  const handleCreateCategory = async () => {
    if (newCategoryName.trim()) {
      try {
        await createPlaceCategory({ name: newCategoryName }).unwrap()
        setNewCategoryName("")
        setIsCreateCategoryModalOpen(false)
        toast.success("নতুন ক্যাটাগরি সফভাবে তৈরি করা হয়েছে")
      } catch (error) {
        toast.error("ক্যাটাগরি তৈরি করতে ব্যর্থ হয়েছে")
        console.error("Failed to create category:", error)
      }
    }
  }

  // Handle form submission - SIMPLIFIED
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!formData.category_id) {
      toast.error("অনুগ্রহ করে একটি ক্যাটাগরি নির্বাচন করুন")
      return
    }

    try {
      // Create FormData object for multipart/form-data
      const formDataToSend = new FormData()

      // Add place ID
      formDataToSend.append("id", id as string)

      // Add all text fields
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value)
      })

      // Add main image file only if a new one is selected
      if (mainImage) {
        formDataToSend.append("image_url", mainImage)
      }

      // Add gallery files - SIMPLIFIED
      // Only send new gallery files if there are any
      if (galleryFiles.length > 0) {
        // Add a flag to indicate we're replacing the gallery
        formDataToSend.append("replace_gallery", "true")

        // Add all gallery files
        galleryFiles.forEach((file) => {
          formDataToSend.append("gallery[]", file)
        })
      }

      // Call the API to update the tourist place
      const response = await updateTouristPlace({ data: formDataToSend, id }).unwrap()
      console.log(response);
      if (response.status_code == 200) {
        toast.success("দর্শনীয় স্থান সফলভাবে আপডেট করা হয়েছে")
        router.push("/dashboard/tourist-places")
      }
    } catch (error: any) {
      console.error("Error updating place:", error)
      toast.error(error?.data?.errMsg || "দর্শনীয় স্থান আপডেট করতে ব্যর্থ হয়েছে")
    }
  }

  return (
    <div className="container mx-auto py-6 p-2 bg-white">
      <div className="p-2">
        <div className="flex items-center mb-6">
          <Button variant="outline" size="icon" asChild className="mr-4">
            <Link href="/dashboard/tourist-places">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">ফিরে যান</span>
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">দর্শনীয় স্থান সম্পাদনা করুন</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="col-span-1 shadow-sm md:shadow-sm p-2 md:p-3">
              <CardHeader>
                <CardTitle>মৌলিক তথ্য</CardTitle>
                <CardDescription>দর্শনীয় স্থানের প্রাথমিক তথ্য এখানে দিন</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">স্থানের নাম</Label>
                  <Input
                    id="name"
                    placeholder="যেমন: আহসান মঞ্জিল"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">অবস্থান</Label>
                  <Input
                    id="location"
                    placeholder="যেমন: ঢাকা"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="category_id">ক্যাটাগরি</Label>
                    <Dialog open={isCreateCategoryModalOpen} onOpenChange={setIsCreateCategoryModalOpen}>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Plus className="h-4 w-4 mr-2" />
                          নতুন ক্যাটাগরি
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>নতুন ক্যাটাগরি তৈরি করুন</DialogTitle>
                          <DialogDescription>দর্শনীয় স্থানের জন্য একটি নতুন ক্যাটাগরি তৈরি করুন।</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <Label htmlFor="new-category-name">ক্যাটাগরির নাম</Label>
                            <Input
                              id="new-category-name"
                              placeholder="যেমন: ঐতিহাসিক স্থান"
                              value={newCategoryName}
                              onChange={(e) => setNewCategoryName(e.target.value)}
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline" onClick={() => setIsCreateCategoryModalOpen(false)}>
                            বাতিল করুন
                          </Button>
                          <Button onClick={handleCreateCategory} disabled={isLoading || !newCategoryName.trim()}>
                            {isLoading ? "অপেক্ষা করুন..." : "সংরক্ষণ করুন"}
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>

                  <div className="space-y-2">
                    <select
                      id="category_id"
                      value={formData.category_id}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    >
                      <option value="">ক্যাটাগরি নির্বাচন করুন</option>
                      {data?.data?.map((category: Category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>

                    {selectedCategory && (
                      <div className="mt-2 flex items-center">
                        <Badge
                          variant="outline"
                          className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1"
                        >
                          <Check className="h-3 w-3" />
                          নির্বাচিত ক্যাটাগরি: {selectedCategory.name}
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">বিবরণ</Label>
                  <Textarea
                    id="description"
                    placeholder="স্থানের সংক্ষিপ্ত বিবরণ লিখুন..."
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="history">ইতিহাস</Label>
                  <Textarea
                    id="history"
                    placeholder="স্থানের ইতিহাস সম্পর্কে লিখুন..."
                    rows={4}
                    value={formData.history}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="architecture">স্থাপত্য</Label>
                  <Textarea
                    id="architecture"
                    placeholder="স্থানের স্থাপত্য সম্পর্কে লিখুন..."
                    rows={3}
                    value={formData.architecture}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="special_features">বিশেষ বৈশিষ্ট্য</Label>
                  <Textarea
                    id="special_features"
                    placeholder="স্থানের বিশেষ বৈশিষ্ট্য সম্পর্কে লিখুন..."
                    rows={3}
                    value={formData.special_features}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="main_attractions">মূল আকর্ষণসমূহ</Label>
                  <LokkhoEditor initialContent={formData.main_attractions} onChange={handleAttractionsChange} />

                </div>
                <div className="space-y-2">
                  <Label htmlFor="purpose_and_significance">লক্ষ্য ও উদ্দেশ্য</Label>
                  {/* <Textarea
                    id="purpose_and_significance"
                    placeholder="স্থানের লক্ষ্য ও উদ্দেশ্য সম্পর্কে লিখুন..."
                    rows={4}
                    value={formData.purpose_and_significance}
                    onChange={handleChange}
                  /> */}
                  <LokkhoEditor initialContent={formData.purpose_and_significance} onChange={handleEditorChange} />


                </div>
              </CardContent>
            </Card>

            <Card className="col-span-1 shadow-sm md:shadow-sm p-2 md:p-3">
              <CardHeader>
                <CardTitle>ভ্রমণ তথ্য</CardTitle>
                <CardDescription>ভ্রমণকারীদের জন্য প্রয়োজনীয় তথ্য</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="how_to_go">যাওয়ার উপায়</Label>
                  <Textarea
                    id="how_to_go"
                    placeholder="কিভাবে যাবেন তার বিবরণ দিন..."
                    rows={3}
                    value={formData.how_to_go}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="where_to_stay">থাকার ব্যবস্থা</Label>
                  <Textarea
                    id="where_to_stay"
                    placeholder="থাকার ব্যবস্থা সম্পর্কে লিখুন..."
                    rows={3}
                    value={formData.where_to_stay}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="where_to_eat">খাবারের ব্যবস্থা</Label>
                  <Textarea
                    id="where_to_eat"
                    placeholder="খাবারের ব্যবস্থা সম্পর্কে লিখুন..."
                    rows={3}
                    value={formData.where_to_eat}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ticket_price">টিকেট মূল্য</Label>
                    <Input
                      id="ticket_price"
                      placeholder="যেমন: ৫০ টাকা"
                      value={formData.ticket_price}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="opening_hours">খোলার সময়</Label>
                    <Input
                      id="opening_hours"
                      placeholder="যেমন: সকাল ১০টা - সন্ধ্যা ৬টা"
                      value={formData.opening_hours}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="best_time_to_visit">ভ্রমণের সেরা সময়</Label>
                  <Input
                    id="best_time_to_visit"
                    placeholder="যেমন: অক্টোবর - মার্চ"
                    value={formData.best_time_to_visit}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="map_link">গুগল ম্যাপ লিংক</Label>
                  <Input
                    id="map_link"
                    placeholder="গুগল ম্যাপ লিংক দিন"
                    value={formData.map_link}
                    onChange={handleChange}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-1 lg:col-span-2 shadow-sm md:shadow-sm p-2 md:p-3">
              <CardHeader>
                <CardTitle>ছবি সমূহ</CardTitle>
                <CardDescription>দর্শনীয় স্থানের ছবি এবং গ্যালারি আপলোড করুন</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="main_image">প্রধান ছবি</Label>
                  <div className="flex flex-col gap-2">
                    <Input
                      id="main_image"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="cursor-pointer"
                    />
                    {mainImagePreview && (
                      <div className="mt-2 border rounded-md p-2 max-w-xs">
                        <Image
                          src={mainImagePreview || "/placeholder.svg"}
                          alt="Main image preview"
                          width={300}
                          height={200}
                          className="rounded-md object-cover w-full h-auto"
                          onError={(e) => {
                            e.currentTarget.src = "/image-preview-concept.png"
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <Label>গ্যালারি ছবি</Label>

                    </div>
                    <Input
                      id="gallery_images"
                      type="file"
                      accept="image/*"
                      onChange={handleGalleryFileChange}
                      className="cursor-pointer w-full"
                      multiple
                    />
                  </div>

                  {galleryPreviews.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                      {galleryPreviews.map((preview, index) => (
                        <div key={index} className="border rounded-md p-3 space-y-2 relative">
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeGalleryImage(index)}
                            className="absolute top-2 right-2 h-8 w-8 p-0 bg-white/80 text-red-500 rounded-full hover:bg-white/90 z-10"
                          >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Remove</span>
                          </Button>
                          <div className="mt-2">
                            <Image
                              src={preview || "/placeholder.svg"}
                              alt={`Gallery image ${index + 1}`}
                              width={300}
                              height={200}
                              className="rounded-md object-cover w-full h-32"
                              onError={(e) => {
                                e.currentTarget.src = "/gallery-preview.png"
                              }}
                            />
                          </div>
                          <p className="text-sm text-gray-500 mt-1 truncate">
                            {galleryFiles[index]?.name || `ছবি ${index + 1}`}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center p-8 border border-dashed rounded-md">
                      <p className="text-gray-500">গ্যালারির জন্য নতুন ছবি আপলোড করুন</p>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" asChild>
                  <Link href="/dashboard/tourist-places">বাতিল করুন</Link>
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "অপেক্ষা করুন..." : "আপডেট করুন"}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </form>
      </div>
    </div>
  )
}
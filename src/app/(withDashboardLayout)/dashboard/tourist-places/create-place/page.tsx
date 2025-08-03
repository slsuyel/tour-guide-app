"use client"

import type React from "react"

import { useState, type FormEvent, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Plus, Check, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import {
  useCreatePlaceCategoryMutation,
  useGetAllPlaceCategoriesQuery,
  useCreateTouristPlaceMutation,
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
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import LokkhoEditor from "./_components/LokkhoEditor"

interface Category {
  id: string
  name: string
}

export default function CreateTouristPlacePage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

  const [createPlaceCategory] = useCreatePlaceCategoryMutation()
  const [createTouristPlace, { isLoading }] = useCreateTouristPlaceMutation()
  const { data } = useGetAllPlaceCategoriesQuery(undefined)

  // Form state
  const [formData, setFormData] = useState({
    name: "জেলা প্রশাসন ইকো পার্ক",
    category_id: "6",
    location:
      "পঞ্চগড় জেলার সদ্য নির্মিত জেলা প্রশাসন ইকো পার্ক বর্তমানে স্থানীয় ও বহিরাগত পর্যটকদের জন্য একটি আকর্ষণীয় বিনোদনকেন্দ্র হিসেবে গড়ে উঠেছে। এটি পঞ্চগড় সদর উপজেলার ধাক্কামারা ইউনিয়নের ঐতিহাসিক মীরগড় এলাকায় করতোয়া নদীর তীরে অবস্থিত।​",
    description: `পঞ্চগড় জেলা প্রশাসনের উদ্যোগে করতোয়া নদীর তীরঘেঁষে নির্মিত এই ইকো পার্ক প্রকৃতিপ্রেমী ও ভ্রমণপিপাসু মানুষের জন্য একটি নতুন আকর্ষণ। এটি নির্মাণ করা হয়েছে পরিবেশবান্ধব নকশায়, যেখানে প্রাকৃতিক সৌন্দর্য, নির্মল বাতাস ও সবুজ পরিবেশ একসাথে উপভোগ করা যায়।`,
    special_features: "পরিবেশবান্ধব নকশা, করতোয়া নদীর তীরে অবস্থান, সূর্যাস্ত দেখার সুবিধা, ওয়াকওয়ে ও বেঞ্চ, সাজানো বাগান",
    main_attractions: `🔸 মূল আকর্ষণসমূহ:
করতোয়া নদীর সৌন্দর্য: নদীর পাড়ে বসে সূর্যাস্ত উপভোগের অসাধারণ সুযোগ

ওয়াকওয়ে ও বেঞ্চ: পরিবার ও বন্ধুদের নিয়ে বসে সময় কাটানোর ব্যবস্থা

সাজানো বাগান ও সবুজ গাছপালা: পরিবেশবান্ধব এবং মনোরম পরিবেশ

ছবির জন্য দারুন লোকেশন: ফটোগ্রাফি প্রেমীদের জন্য একাধিক স্পট

বাচ্চাদের জন্য খেলার জায়গা: নিরাপদ ও আনন্দদায়ক এলাকা

রেস্ট হাউস/চিলিং জোন (পরিকল্পনাধীন বা আংশিক চালু): আরাম করার স্থান`,
    purpose_and_significance: `🎯 লক্ষ্য ও উদ্দেশ্য:
এই পার্কটির মূল উদ্দেশ্য হলো পরিবেশ সংরক্ষণ ও সাধারণ মানুষকে প্রকৃতির কাছাকাছি এনে মানসিক প্রশান্তি দেওয়া। একইসঙ্গে এটি জেলার পর্যটন সম্ভাবনা বৃদ্ধি করছে এবং স্থানীয় অর্থনীতির উন্নয়নে ভূমিকা রাখছে।`,
    history: `🏛️ মীরগড় এলাকার ইতিহাস:
মীরগড় এলাকাটি পঞ্চগড় সদর উপজেলার একটি প্রাচীন ও ঐতিহাসিক জনপদ। স্থানীয় ইতিহাসবিদ ও প্রবীণদের মতে, এই অঞ্চলে পূর্বে জমিদার ও মুসলিম শাসকদের বসতি ছিল। “মীর” শব্দটি থেকেই ধারণা করা হয় যে এখানে কোনো এক সময় মুসলিম অভিজাত বা মীর শ্রেণির বাস ছিল, যারা রাজনৈতিক বা সামাজিকভাবে গুরুত্বপূর্ণ ভূমিকা পালন করতেন।
  
  এছাড়া মীরগড় ছিল করতোয়া নদীর তীরবর্তী একটি ঘনবসতিপূর্ণ অঞ্চল, যার মাধ্যমে নৌপথে পণ্য পরিবহন ও সংযোগ ব্যবস্থারও প্রচলন ছিল। এই নদী ঘিরেই গড়ে উঠেছিল বহু প্রাচীন বসতি, যা ইতিহাস ও ঐতিহ্যের ধারক।`,
    architecture: `🔷 স্থাপত্য বৈশিষ্ট্য:
  প্রাকৃতিক ল্যান্ডস্কেপ বজায় রেখে উন্নয়ন: গাছপালা কেটে নয়, বরং গাছ ঘিরেই হাঁটার পথ, বসার স্থান তৈরি করা হয়েছে।
  
  নদীর তীর ঘেঁষে বাঁধ: করতোয়া নদীর ধারে একটি সুরক্ষিত ঘাট বা ওয়াকওয়ে নির্মাণ করা হয়েছে, যা স্থানীয় বন্যা নিয়ন্ত্রণ ও সৌন্দর্য বর্ধনে সহায়ক।
  
  প্রবেশপথে দৃষ্টিনন্দন গেট ও নামফলক: যা সরকারি পর্যটনকেন্দ্রের ইমেজ বজায় রাখে।
  
  পর্যটকদের জন্য সীটিং এরিয়া, খেলার মাঠ ও আলোকসজ্জা।
  
  পথ ও বেঞ্চগুলো পাথর ও ইটের সমন্বয়ে তৈরি, যাতে প্রাকৃতিক সৌন্দর্য বিঘ্নিত না হয়।`,
    how_to_go: `বাসযোগে:
  
  ঢাকার গাবতলী, কল্যাণপুর, বা সায়েদাবাদ থেকে পঞ্চগড়গামী নন-এসি বা এসি বাস ছাড়ে।
  
  কিছু জনপ্রিয় বাস সার্ভিস:
  
  হানিফ, শ্যামলী, নর্থবেঙ্গল, এসআর ট্রাভেলস
  
  ভ্রমণ সময়: প্রায় ১০–১২ ঘণ্টা
  
  ট্রেনযোগে:
  
  পঞ্চগড় এক্সপ্রেস (ঢাকা কমলাপুর থেকে ছাড়ে প্রতিদিন রাত ১০:৪৫ মিনিটে এবং সকাল ৮:৫০ মিনিটে পঞ্চগড় পৌঁছে) — এটি একটি আরামদায়ক ও সময়নির্ভর বিকল্প।
  
  নিজস্ব গাড়িতে:
  
  ঢাকা → টাঙ্গাইল → সিরাজগঞ্জ → বগুড়া → দিনাজপুর → ঠাকুরগাঁও → পঞ্চগড়
  
  প্রায় ১০–১১ ঘণ্টা সময় লাগবে, রাস্তাঘাট ভালো থাকলে।
  
  পঞ্চগড় শহর থেকে অটোরিকশা বা প্রাইভেট যানবাহনে করে সহজেই ইকো পার্কে পৌঁছানো যায়।`,
    where_to_stay: `পঞ্চগড় শহরে বিভিন্ন মানের হোটেল ও গেস্ট হাউস রয়েছে, যেখান থেকে ইকো পার্কে সহজেই যাতায়াত করা যায়।
  
  🔹 কাছাকাছি কিছু থাকার জায়গা:
  Hotel Mouchak International – শহরের প্রাণকেন্দ্রে অবস্থিত
  
  Hotel North View – মানসম্মত পরিবেশ ও রুম সার্ভিস
  
  Hotel Doot – বাজেট ফ্রেন্ডলি অপশন
  
  Circuit House (সরকারি): শুধুমাত্র অনুমোদিত অতিথিদের জন্য`,
    where_to_eat: `ইকো পার্কের ভিতরে ছোট ছোট খাবারের দোকানে চা, স্ন্যাকস, ফুচকা ইত্যাদি পাওয়া যায়। পূর্ণাঙ্গ খাবারের জন্য পঞ্চগড় শহরে অবস্থিত Food Court Panchagarh, Panshi Restaurant, Kabab Ghor, ও Deshi & Chinese Restora-তে যাওয়া যায়। পরিবার নিয়ে গেলে শহর থেকে খাবার নিয়ে যাওয়াই ভালো।`,
    ticket_price: "ইকো পার্কের প্রবেশ মূল্য ৩০ টাকা",
    opening_hours:
      "ইকো পার্ক প্রতিদিন সকাল ১০টা থেকে সন্ধ্যা ৬টা পর্যন্ত খোলা থাকে। বিকেল ৪টার পর নতুন দর্শনার্থীদের প্রবেশ সীমিত হতে পারে, তাই আগেভাগে যাওয়া ভালো।",
    best_time_to_visit:
      "অক্টোবর থেকে মার্চ পর্যন্ত সময়টি ইকো পার্ক ভ্রমণের জন্য সবচেয়ে উপযোগী। শীতকালে আবহাওয়া সুন্দর থাকে, নদীর পানি পরিষ্কার থাকে এবং সবুজ প্রকৃতি ফুটে ওঠে। বর্ষার পরের সময় যেমন সেপ্টেম্বর-অক্টোবর মাসেও প্রকৃতির রূপ উপভোগযোগ্য। শুক্রবার ও শনিবারে দর্শনার্থীর সংখ্যা বেশি থাকে।",
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

  // Handle gallery image file selection
  const handleGalleryFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
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

      // Add new files to gallery
      setGalleryFiles((prev) => [...prev, ...validFiles])

      // Create preview URLs for new files
      const newPreviews = validFiles.map((file) => URL.createObjectURL(file))
      setGalleryPreviews((prev) => [...prev, ...newPreviews])
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
      if (mainImagePreview) {
        URL.revokeObjectURL(mainImagePreview)
      }
      galleryPreviews.forEach((url) => {
        URL.revokeObjectURL(url)
      })
    }
  }, [])

  const handleCreateCategory = async () => {
    if (newCategoryName.trim()) {
      try {
        await createPlaceCategory({ name: newCategoryName }).unwrap()
        setNewCategoryName("")
        setIsCreateCategoryModalOpen(false)
        toast.success("নতুন ক্যাটাগরি সফলভাবে তৈরি করা হয়েছে")
      } catch (error) {
        toast.error("ক্যাটাগরি তৈরি করতে ব্যর্থ হয়েছে")
        console.error("Failed to create category:", error)
      }
    }
  }

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!formData.category_id) {
      toast.error("অনুগ্রহ করে একটি ক্যাটাগরি নির্বাচন করুন")
      return
    }

    if (!mainImage) {
      toast.error("অনুগ্রহ করে একটি প্রধান ছবি আপলোড করুন")
      return
    }

    try {
      // Create FormData object for multipart/form-data
      const formDataToSend = new FormData()

      // Add all text fields
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value)
      })

      // Add main image file
      if (mainImage) {
        formDataToSend.append("image_url", mainImage)
      }

      // Add gallery files with the Laravel array format (gallery[])
      if (galleryFiles.length > 0) {
        galleryFiles.forEach((file) => {
          formDataToSend.append("gallery[]", file)
        })
      } else {
        // If no gallery images, send an empty array
        formDataToSend.append("gallery", JSON.stringify([]))
      }

      const response = await createTouristPlace(formDataToSend).unwrap()

      if (response.isError) {
        toast.error("দর্শনীয় স্থান যোগ করতে ব্যর্থ হয়েছে")
        return
      }

      toast.success("দর্শনীয় স্থান সফলভাবে যোগ করা হয়েছে")
      router.push("/dashboard/tourist-places")
    } catch (error: any) {
      toast.error(error?.data?.errMsg || "দর্শনীয় স্থান যোগ করতে ব্যর্থ হয়েছে")
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
          <h1 className="text-3xl font-bold">নতুন দর্শনীয় স্থান যোগ করুন</h1>
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
                  {/* <Textarea
                    id="main_attractions"
                    placeholder="স্থানের প্রধান আকর্ষণসমূহ সম্পর্কে লিখুন..."
                    rows={4}
                    value={formData.main_attractions}
                    onChange={handleChange}
                  /> */}
                  <LokkhoEditor onChange={handleAttractionsChange} />


                </div>
                <div className="space-y-2">
                  {/* <Label htmlFor="purpose_and_significance">লক্ষ্য ও উদ্দেশ্য</Label>
                  <Textarea
                    id="purpose_and_significance"
                    placeholder="স্থানের লক্ষ্য ও উদ্দেশ্য সম্পর্কে লিখুন..."
                    rows={4}
                    value={formData.purpose_and_significance}
                    onChange={handleChange}
                  /> */}
                  <Label htmlFor="purpose_and_significance">লক্ষ্য ও উদ্দেশ্য</Label>
                  <LokkhoEditor onChange={handleEditorChange} />


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
                      required
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
                  <div className="flex items-center justify-between">
                    <Label>গ্যালারি ছবি</Label>
                    <Input
                      id="gallery_images"
                      type="file"
                      accept="image/*"
                      onChange={handleGalleryFileChange}
                      className="cursor-pointer w-auto"
                      multiple
                    />
                  </div>

                  {galleryFiles.length > 0 ? (
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
                            {galleryFiles[index]?.name || `Image ${index + 1}`}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center p-8 border border-dashed rounded-md">
                      <p className="text-gray-500">গ্যালারির জন্য ছবি আপলোড করুন</p>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" asChild>
                  <Link href="/dashboard/tourist-places">বাতিল করুন</Link>
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "অপেক্ষা করুন..." : "সংরক্ষণ করুন"}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </form>
      </div>
    </div>
  )
}

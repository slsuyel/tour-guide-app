"use client"

import { useState, type ChangeEvent, type FormEvent } from "react"
import { Loader2, Upload, X, FileText, ImageIcon, Trash2 } from "lucide-react"
import { useCreatePhotoMutation } from "@/components/Redux/RTK/photosApi"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { useGetAllPlaceCategoriesQuery } from "@/components/Redux/RTK/placeApi"

interface Category {
  id: string
  name: string
}

export default function UploadForm() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const { data, isLoading: categoriesLoading } = useGetAllPlaceCategoriesQuery(undefined)

  const [formData, setFormData] = useState({
    category_id: "",
    description: "",
    type: "image",
    uploaded_by: "admin",
    urls: [] as File[],
  })

  const [fileNames, setFileNames] = useState<string[]>([])
  const [filePreviews, setFilePreviews] = useState<string[]>([])
  const [createPhoto, { isLoading: uploading }] = useCreatePhotoMutation()

  const handleTextChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (value) {
      const category = data?.data?.find((cat: Category) => cat.id === value)
      setSelectedCategory(category || null)
    } else {
      setSelectedCategory(null)
    }
  }

  const handleSelectChange = (value: string, name: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      setFormData((prev) => ({
        ...prev,
        urls: [...prev.urls, ...filesArray],
      }))

      const newFileNames = filesArray.map((file) => file.name)
      setFileNames((prev) => [...prev, ...newFileNames])

      // Create blob URLs for image previews
      const newPreviews = filesArray.map((file) => {
        if (file.type.startsWith("image/")) {
          return URL.createObjectURL(file)
        }
        return ""
      })
      setFilePreviews((prev) => [...prev, ...newPreviews])
    }
  }

  const removeFile = (index: number) => {
    // Revoke the blob URL to prevent memory leaks
    if (filePreviews[index]) {
      URL.revokeObjectURL(filePreviews[index])
    }

    setFormData((prev) => ({
      ...prev,
      urls: prev.urls.filter((_, i) => i !== index),
    }))
    setFileNames((prev) => prev.filter((_, i) => i !== index))
    setFilePreviews((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!formData.category_id) {
      toast.error("অনুগ্রহ করে একটি ক্যাটাগরি নির্বাচন করুন")
      return
    }

    try {
      // Create FormData object to send to the server
      const photoData = new FormData()
      photoData.append("category_id", formData.category_id)
      photoData.append("description", formData.description)
      photoData.append("type", formData.type)
      photoData.append("uploaded_by", formData.uploaded_by)

      // Append all files to the FormData
      formData.urls.forEach((file, index) => {
        photoData.append(`urls[${index}]`, file)
      })

      // Call the API mutation
      await createPhoto(photoData).unwrap()

      // Clean up blob URLs
      filePreviews.forEach((url) => {
        if (url) URL.revokeObjectURL(url)
      })

      // Reset form after successful upload
      setFormData({
        category_id: "",
        description: "",
        type: "image",
        uploaded_by: "admin",
        urls: [],
      })
      setFileNames([])
      setFilePreviews([])
      setSelectedCategory(null)

      toast.success("আপলোড সফল হয়েছে")
    } catch (error) {
      console.error("আপলোড ব্যর্থ হয়েছে:", error)
      toast.error("আপলোড ব্যর্থ হয়েছে")
    }
  }

  return (
    <div className="container mx-auto py-6 p-2 bg-white">
      <div className="p-2">
        <div className="bg-white dark:bg-gray-950 rounded-xl shadow-sm border p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-900 dark:text-gray-100">
              <Upload className="h-5 w-5" />
              ছবি আপলোড করুন
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="category_id" className="text-sm font-medium">
                  ক্যাটাগরি
                </Label>
                <div className="relative">
                  <select
                    id="category_id"
                    name="category_id"
                    value={formData.category_id}
                    onChange={handleCategoryChange}
                    className="w-full h-10 px-3 py-2 bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary appearance-none text-sm"
                    disabled={categoriesLoading}
                  >
                    <option value="">ক্যাটাগরি নির্বাচন করুন</option>
                    {data?.data?.map((category: Category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                {categoriesLoading && <p className="text-xs text-gray-500 mt-1">ক্যাটাগরি লোড হচ্ছে...</p>}
                {selectedCategory && <p className="text-xs text-gray-500 mt-1">নির্বাচিত: {selectedCategory.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="type" className="text-sm font-medium">
                  ধরন
                </Label>
                <Select value={formData.type} onValueChange={(value) => handleSelectChange(value, "type")}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="ধরন নির্বাচন করুন" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="image">ছবি</SelectItem>
                    <SelectItem value="video">ভিডিও</SelectItem>
                    <SelectItem value="document">ডকুমেন্ট</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-sm font-medium">
              সংক্ষিপ্ত বিবরণ
              </Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleTextChange}
                placeholder="সংক্ষিপ্ত বিবরণ"
                rows={4}
                className="resize-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="uploaded_by" className="text-sm font-medium">
                আপলোডকারী
              </Label>
              <Input
                id="uploaded_by"
                name="uploaded_by"
                value={formData.uploaded_by}
                onChange={handleTextChange}
                placeholder="আপলোডকারীর নাম লিখুন"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="file-upload" className="text-sm font-medium">
                ফাইল আপলোড করুন
              </Label>
              <div className="border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-lg p-8 text-center transition-colors hover:bg-gray-50 dark:hover:bg-gray-900/50">
                <Input id="file-upload" type="file" onChange={handleFileChange} className="hidden" multiple />
                <Label htmlFor="file-upload" className="flex flex-col items-center justify-center cursor-pointer">
                  <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 mb-3">
                    <ImageIcon className="h-8 w-8 text-gray-500" />
                  </div>
                  <span className="text-base font-medium text-gray-700 dark:text-gray-300">
                    এখানে ফাইল টেনে আনুন অথবা ক্লিক করুন
                  </span>
                  <span className="text-sm text-gray-500 mt-1">একাধিক ফাইল আপলোড করা যাবে</span>
                </Label>
              </div>
            </div>

            {fileNames.length > 0 && (
              <div className="space-y-3">
                <Label className="text-sm font-medium">নির্বাচিত ফাইলসমূহ</Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {fileNames.map((fileName, index) => (
                    <div
                      key={index}
                      className="relative group border rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900"
                    >
                      {filePreviews[index] ? (
                        <div className="aspect-square relative">
                          <img
                            src={filePreviews[index] || "/placeholder.svg"}
                            alt={fileName}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover max-h-[120px]"
                          />
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="absolute top-1 right-1 bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            aria-label="ফাইল সরান"
                          >
                            <Trash2 className="h-3 w-3" />
                          </button>
                        </div>
                      ) : (
                        <div className="p-3 flex items-center justify-between">
                          <div className="flex items-center space-x-2 overflow-hidden">
                            <FileText className="h-4 w-4 flex-shrink-0 text-gray-500" />
                            <span className="text-xs truncate max-w-[100px]">{fileName}</span>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(index)}
                            className="h-6 w-6 p-0 flex-shrink-0"
                          >
                            <X className="h-3 w-3" />
                            <span className="sr-only">ফাইল সরান</span>
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <Button
              type="submit"
              className="w-full py-6 text-base"
              disabled={uploading || fileNames.length === 0 || !formData.category_id}
            >
              {uploading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  আপলোড হচ্ছে...
                </>
              ) : (
                <>
                  <Upload className="mr-2 h-5 w-5" />
                  ফাইল আপলোড করুন
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

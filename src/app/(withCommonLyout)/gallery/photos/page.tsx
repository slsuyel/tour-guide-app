"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ChevronLeft, ChevronRight, Grid, Film } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { useGetGalleriesQuery } from "@/components/Redux/RTK/photosApi"
import { useGetAllCategoriesQuery } from "@/components/Redux/RTK/placeApi"

export interface TCategory {
  id: number
  name: string
  created_at: string
  updated_at: string
}

export interface TGalleryItem {
  id: number;
  category_id: number | null;
  url: string;
  description: string;
  type: string;
  uploaded_by: string;
  created_at: string; // ISO 8601 date string
  updated_at: string; // ISO 8601 date string
  category: TCategory
}

export interface GalleryResponse {
  data: TGalleryItem[]
  Message: string | null
  isError: boolean
  error: string | null
  status_code: number
}

export default function PhotoGallery() {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const [per_page] = useState(12)
  const [totalItems, setTotalItems] = useState(0)

  // Category filter state
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Fetch categories
  const { data: categoriesData, isLoading: categoryLoading } = useGetAllCategoriesQuery(undefined)

  // Fetch galleries with pagination and filtering
  const { data, isLoading, isFetching } = useGetGalleriesQuery({
    page: currentPage,
    per_page,
    ...(selectedCategoryId !== null && { category_id: selectedCategoryId }),
  })

  // Extract galleries from response
  const galleries: TGalleryItem[] = data?.data || []

  // Update total items when data changes
  useEffect(() => {
    if (data?.data) {
      setTotalItems(data.data.length)
    }
  }, [data])

  // Get categories
  const categories: TCategory[] = categoriesData?.data || []

  // State for modal
  const [selectedPhoto, setSelectedPhoto] = useState<TGalleryItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Open modal with selected photo
  const openModal = (photo: TGalleryItem) => {
    setSelectedPhoto(photo)
    setIsModalOpen(true)
  }

  // Navigate to next photo in modal
  const goToNextPhoto = () => {
    if (!selectedPhoto) return

    const currentIndex = galleries.findIndex((photo) => photo.id === selectedPhoto.id)
    const nextIndex = (currentIndex + 1) % galleries.length
    setSelectedPhoto(galleries[nextIndex])
  }

  // Navigate to previous photo in modal
  const goToPrevPhoto = () => {
    if (!selectedPhoto) return

    const currentIndex = galleries.findIndex((photo) => photo.id === selectedPhoto.id)
    const prevIndex = (currentIndex - 1 + galleries.length) % galleries.length
    setSelectedPhoto(galleries[prevIndex])
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return

      if (e.key === "ArrowRight") {
        goToNextPhoto()
      } else if (e.key === "ArrowLeft") {
        goToPrevPhoto()
      } else if (e.key === "Escape") {
        setIsModalOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isModalOpen, selectedPhoto, galleries])

  // Handle category selection
  const handleCategorySelect = (category: TCategory | null) => {
    if (category) {
      setSelectedCategoryId(category.id)
      setSelectedCategory(category.name)
    } else {
      setSelectedCategoryId(null)
      setSelectedCategory(null)
    }
    setCurrentPage(1) // Reset to first page when changing filters
  }

  // Reset filters
  const resetFilters = () => {
    setSelectedCategoryId(null)
    setSelectedCategory(null)
    setCurrentPage(1)
  }

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("bn-BD", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  // Handle pagination
  const handleNextPage = () => {
    if (galleries.length === per_page) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  // Gallery Skeleton Component
  const GallerySkeleton = () => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Skeleton className="h-full w-full" />
              </div>
              <div className="p-3">
                <Skeleton className="h-5 w-3/4 mb-2" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
          ))}
      </div>
    )
  }

  // Category Skeleton Component
  const CategorySkeleton = () => {
    return (
      <div className="flex flex-wrap gap-2 mb-8">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} className="h-6 w-20 rounded-full" />
          ))}
      </div>
    )
  }
  console.log(galleries);
  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-6 px-3">
        <div className="container mx-auto max-w-4xl text-center">

          <h1 className="text-xl md:text-2xl font-semibold mb-2">ফটো গ্যালারি</h1>
          <p className="text-emerald-100 max-w-xl mx-auto text-xs leading-tight">
            পঞ্চগড় জেলার বিভিন্ন দৃশ্য, স্থান, উৎসব এবং জনজীবনের ছবি সংগ্রহ। এই গ্যালারিতে আমাদের জেলার সৌন্দর্য ও ঐতিহ্য দেখতে পারবেন।
          </p>

          {/* Gallery Navigation */}
          <div className="mt-4 flex justify-center space-x-3">
            <Link
              href="/gallery/photos"
              className="bg-white text-emerald-700 px-3 py-1.5 rounded-md font-medium flex items-center text-sm"
            >
              <Grid className="w-3 h-3 mr-1" />
              ফটো গ্যালারি
            </Link>
            <Link
              href="/gallery/videos"
              className="bg-emerald-700 text-white hover:bg-emerald-600 px-3 py-1.5 rounded-md font-medium flex items-center text-sm transition-colors"
            >
              <Film className="w-3 h-3 mr-1" />
              ভিডিও গ্যালারি
            </Link>
          </div>
        </div>
      </div>


      {/* Gallery Content */}
      <div className="container mx-auto max-w-6xl px-4 mt-8">
        {/* Category Selection */}
        {categoryLoading ? (
          <CategorySkeleton />
        ) : (
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge
              variant={selectedCategory === null ? "default" : "outline"}
              className={`cursor-pointer ${selectedCategory === null ? "bg-emerald-500 hover:bg-emerald-600" : "hover:bg-emerald-50"
                }`}
              onClick={() => handleCategorySelect(null)}
            >
              সকল
            </Badge>
            {categories && categories.map((category: TCategory) => (
              <Badge
                key={category.id}
                variant={selectedCategory === category.name ? "default" : "outline"}
                className={`cursor-pointer ${selectedCategory === category.name ? "bg-emerald-500 hover:bg-emerald-600" : "hover:bg-emerald-50"
                  }`}
                onClick={() => handleCategorySelect(category)}
              >
                {category?.name || 'Photo'}
              </Badge>
            ))}
          </div>
        )}

        {/* Gallery Grid */}
        {isLoading || isFetching ? (
          <GallerySkeleton />
        ) : galleries.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleries?.map((photo) => (
                <div
                  key={photo.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                  onClick={() => openModal(photo)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={photo.url || "/placeholder.svg"}
                      alt={photo.description}
                      fill
                      onError={(e) => { e.currentTarget.src = "/placeholder.svg"; }}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-2 right-2">
                      <Badge className="bg-emerald-500">{photo?.category?.name}</Badge>
                    </div>
                  </div>
                  <div className="p-3">
                    {/* <h3 className="font-medium text-gray-800 line-clamp-1">{photo.description}</h3> */}
                    <p className="text-xs text-gray-500 mt-1">{formatDate(photo.created_at)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Simple Pagination */}
            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-3" role="navigation" aria-label="Pagination">
                <Button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1 || isFetching}
                  variant="outline"
                  className="flex items-center gap-1"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>পূর্ববর্তী</span>
                </Button>

                <Button
                  onClick={handleNextPage}
                  disabled={galleries.length < per_page || isFetching}
                  variant="outline"
                  className="flex items-center gap-1"
                >
                  <span>পরবর্তী</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg">
            <h3 className="text-xl font-medium text-gray-800 mb-2">কোন ছবি পাওয়া যায়নি</h3>
            <p className="text-gray-500 mb-4">নির্বাচিত বিভাগে কোন ছবি পাওয়া যায়নি।</p>
            <Button variant="outline" onClick={resetFilters}>
              সব ফিল্টার মুছুন
            </Button>
          </div>
        )}
      </div>

      {/* Custom Photo Modal */}
      {isModalOpen && selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="photo-modal-title"
        >
          <div className="relative h-full w-full flex flex-col max-w-4xl bg-black/20 rounded-md mx-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 bg-black/50 text-white">
              <h3 id="photo-modal-title" className="font-medium">
                {/* {selectedPhoto.description} */}
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsModalOpen(false)}
                className="text-white hover:bg-white/20"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Image Container */}
            <div className="flex-grow relative flex items-center justify-center">
              <div className="relative h-[70vh] w-full">
                <Image
                  src={selectedPhoto.url || "/placeholder.svg"}
                  alt={selectedPhoto.description}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 rounded-full h-10 w-10"
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrevPhoto()
                }}
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 rounded-full h-10 w-10"
                onClick={(e) => {
                  e.stopPropagation()
                  goToNextPhoto()
                }}
                aria-label="Next photo"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-black/50 text-white">
              {/* <p className="text-sm text-gray-300">{selectedPhoto.description}</p> */}
              <div className="flex justify-between items-center mt-2">
                <Badge className="bg-emerald-600">{selectedPhoto.category.name}</Badge>
                <span className="text-xs text-gray-400">{formatDate(selectedPhoto.created_at)}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

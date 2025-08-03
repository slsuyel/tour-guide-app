"use client"
import { useDeletePhotoMutation, useGetPhotosQuery } from "@/components/Redux/RTK/photosApi"
import { Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export interface TPhoto {
    id: number
    category_id: number
    url: string
    description: string
    type: string
    uploaded_by: string
    created_at: Date
    updated_at: Date
    category: Category
}

export interface Category {
    id: number
    name: string
    created_at: Date
    updated_at: Date
}



const Gallery = () => {
    const { data, isLoading, error } = useGetPhotosQuery(undefined)
    const [deletePhoto, { isLoading: isDeleting }] = useDeletePhotoMutation()
    const photos: TPhoto[] = data?.data || []

    const handleDelete = async (id: any) => {
        // Show confirmation dialog in Bangla
        const isConfirmed = window.confirm("আপনি কি নিশ্চিত এই ছবিটি মুছে ফেলতে চান?")

        // Only proceed if user confirms
        if (isConfirmed) {
            try {
                await deletePhoto(id)
            } catch (error) {
                console.error("ছবি মুছতে ব্যর্থ হয়েছে:", error)
            }
        }
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-lg">ছবিগুলো লোড হচ্ছে...</div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-lg text-red-500">ছবিগুলো লোড করতে সমস্যা হয়েছে</div>
            </div>
        )
    }

    return (
        <div className="container mx-auto py-6 p-2 bg-white">
            <div className="p-2">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold">ফটো গ্যালারি</h1>
                    <Link href="/dashboard/gallery/create">
                        <Button className="flex items-center gap-2">
                            <Plus className="h-4 w-4" />
                            নতুন ছবি যোগ করুন
                        </Button>
                    </Link>
                </div>

                {photos.length === 0 ? (
                    <div className="flex items-center justify-center min-h-[300px] bg-gray-50 rounded-lg">
                        <div className="text-center">
                            <p className="text-lg mb-4">কোন ছবি পাওয়া যায়নি</p>
                            <Link href="/dashboard/gallery/create">
                                <Button>আপনার প্রথম ছবি যোগ করুন</Button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {photos.map((photo) => (
                            <div key={photo?.id} className="relative bg-white rounded-md border h-[280px] flex flex-col">
                                <div className="p-3 flex-1 flex flex-col">
                                    <div className="h-[160px] flex items-center justify-center overflow-hidden mb-2">
                                        <img
                                            src={photo?.url || "/placeholder.svg"}
                                            alt={photo?.description || "গ্যালারি ছবি"}
                                            className="w-auto max-w-full h-auto max-h-[160px] object-contain"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm line-clamp-2 h-10">{photo?.description || "কোন বিবরণ নেই"}</p>
                                        <p className="text-xs text-gray-500 mt-1">{photo?.category?.name}</p>
                                    </div>
                                    <div className="mt-auto">
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            onClick={() => handleDelete(photo?.id)}
                                            disabled={isDeleting}
                                            className="w-full opacity-90 hover:opacity-100"
                                        >
                                            <Trash2 className="h-4 w-4 mr-1" />
                                            মুছুন
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Gallery

"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Eye, Pencil, Plus, Search, Trash2 } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { useDeleteTouristPlaceMutation, useGetAllTouristPlacesQuery } from "@/components/Redux/RTK/placeApi"
import { useState } from "react"
import { toast } from "sonner"

export default function TouristPlacesPage() {
  const { data, isLoading } = useGetAllTouristPlacesQuery(undefined)
  const [deleteTouristPlace, { isLoading: deleting }] = useDeleteTouristPlaceMutation()
  const [placeToDelete, setPlaceToDelete] = useState<number | null>(null)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  const openDeleteDialog = (id: number) => {
    setPlaceToDelete(id)
    setIsDeleteDialogOpen(true)
  }

  const handleDeletePlace = async () => {
    if (!placeToDelete) return

    try {
      await deleteTouristPlace(placeToDelete).unwrap()
      toast.success("দর্শনীয় স্থান সফলভাবে মুছে ফেলা হয়েছে")
      setIsDeleteDialogOpen(false)
    } catch (error) {
      toast.error("দর্শনীয় স্থান মুছতে ব্যর্থ হয়েছে")
      console.error("Failed to delete tourist place:", error)
    }
  }
  return (
    <div className="container mx-auto py-6 p-2 bg-white">
      <div className="p-2">

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">দর্শনীয় স্থানসমূহ</h1>
          <Button asChild>
            <Link href="/dashboard/tourist-places/create-place">
              <Plus className="mr-2 h-4 w-4" />
              নতুন স্থান যোগ করুন
            </Link>
          </Button>
        </div>

        <Card className=" p-2 md:p-3 shadow-sm md:shadow-sm border-1">
          <CardHeader>
            <CardTitle>সকল দর্শনীয় স্থান</CardTitle>
            <CardDescription>
              আপনার সকল দর্শনীয় স্থানসমূহ এখানে দেখুন এবং পরিচালনা করুন।
            </CardDescription>
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="অনুসন্ধান করুন..."
                className="pl-8"
              />
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ছবি</TableHead>
                  <TableHead>নাম</TableHead>
                  <TableHead>অবস্থান</TableHead>
                  <TableHead className="text-right">পদক্ষেপ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.data.map((place: any) => (
                  <TableRow key={place.id}>
                    <TableCell>
                      <Image
                        src={place.image_url || "/placeholder.svg"}
                        alt={place.name}
                        width={120}
                        height={80}
                        className="rounded-md object-cover"
                      />
                    </TableCell>
                    <TableCell className="font-medium">{place.name}</TableCell>
                    <TableCell>{place.location}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="icon">
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">দেখুন</span>
                        </Button>
                        <Link href={`/dashboard/tourist-places/edit-place/${place.id}`}>
                          <Button variant="outline" size="icon">
                            <Pencil className="h-4 w-4" />
                            <span className="sr-only">সম্পাদনা করুন</span>
                          </Button>
                        </Link>
                        <Button variant="outline" size="icon" onClick={() => openDeleteDialog(place.id)}>
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">মুছুন</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>


      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>দর্শনীয় স্থান মুছে ফেলুন</DialogTitle>
            <DialogDescription>
              আপনি কি নিশ্চিত যে আপনি এই দর্শনীয় স্থানটি মুছে ফেলতে চান? এই কাজটি পূর্বাবস্থায় ফেরানো যাবে না।
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-end gap-2 sm:justify-end">
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              বাতিল করুন
            </Button>
            <Button variant="destructive" onClick={handleDeletePlace} disabled={deleting}>
              {deleting ? "মুছে ফেলা হচ্ছে..." : "মুছে ফেলুন"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

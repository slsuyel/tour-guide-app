"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Plus, MoreHorizontal, Edit, Trash2, Eye, Calendar, MapPin } from 'lucide-react'
import Link from "next/link"
import { useGetEventsQuery, useDeleteEventMutation } from "@/components/Redux/RTK/eventApi"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

interface TEvent {
  id: number;
  title: string;
  slug: string;
  event_date: string;
  description: string;
  location: string;
  event_type: string;
  organizer_type: string | null;
  cover_image: string;
  gallery: string[];
}

export default function EventsList() {
  const { data, isLoading } = useGetEventsQuery(undefined)
  const [deleteEvent, { isLoading: isDeleting }] = useDeleteEventMutation()
  const router = useRouter()

  const handleDelete = async (id: number) => {
    if (confirm("আপনি কি এই ইভেন্টটি মুছে ফেলতে চান?")) {
      try {
        await deleteEvent(id).unwrap()
        toast.success("ইভেন্টটি সফলভাবে মুছে ফেলা হয়েছে")
      } catch (error) {
        toast.error("ইভেন্টটি মুছে ফেলতে সমস্যা হয়েছে")
        console.error(`Error deleting event with ID ${id}:`, error)
      }
    }
  }

  const handleEdit = (event: TEvent) => {
    router.push(`/dashboard/events/edit-event/${event.id}`)
  }


  const getEventTypeBadge = (type: string) => {
    const colors = {
      উৎসব: "bg-purple-100 text-purple-800",
      প্রতিযোগিতা: "bg-orange-100 text-orange-800",
      সাংস্কৃতিক: "bg-pink-100 text-pink-800",
      কর্মশালা: "bg-indigo-100 text-indigo-800",
      সেমিনার: "bg-teal-100 text-teal-800",
    }
    return <Badge className={colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800"}>{type}</Badge>
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }
  
  const allEvents: TEvent[] = data?.data || []

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">ইভেন্ট ম্যানেজমেন্ট</h1>
            </div>
            <Link href="/dashboard/events/create-event">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                নতুন ইভেন্ট তৈরি করুন
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Events Table */}
        <Card className="p-2 md:p-4 shadow-sm rounded">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              ইভেন্ট তালিকা ({allEvents.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ইভেন্টের নাম</TableHead>
                    <TableHead>তারিখ</TableHead>
                    <TableHead>স্থান</TableHead>
                    <TableHead>ধরন</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allEvents.map((event) => (
                    <TableRow key={event.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium">
                        <div>
                          <p className="font-semibold">{event.title}</p>
                          <p className="text-sm text-gray-600 truncate max-w-xs">{event.description}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          {new Date(event.event_date).toLocaleDateString("bn-BD")}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span className="truncate max-w-xs">{event.location}</span>
                        </div>
                      </TableCell>
                      <TableCell>{getEventTypeBadge(event.event_type)}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            
                            <DropdownMenuItem className=" hidden" onClick={() => handleEdit(event)}>
                              <Edit className="mr-2 h-4 w-4" />
                              সম্পাদনা
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              onClick={() => handleDelete(event.id)} 
                              className="text-red-600"
                              disabled={isDeleting}
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              মুছে ফেলুন
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {allEvents.length === 0 && (
              <div className="text-center py-12">
                <Calendar className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-semibold text-gray-900">কোন ইভেন্ট পাওয়া যায়নি</h3>
                <p className="mt-1 text-sm text-gray-500">এখনও কোন ইভেন্ট তৈরি করা হয়নি।</p>
                <div className="mt-6">
                  <Link href="/dashboard/events/create-event">
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      নতুন ইভেন্ট তৈরি করুন
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

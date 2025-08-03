"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Grid, List } from "lucide-react"
import { useGetAllEventsQuery } from "@/components/Redux/RTK/eventApi"

// Define event type based on your data structure
interface TEvent {
  id: number
  title: string
  slug: string
  event_date: string
  description: string
  location: string
  event_type: string
  organizer_type: string | null
  cover_image: string
  gallery: string[]
}

export default function EventsPage() {
  const { data, isLoading } = useGetAllEventsQuery(undefined)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const events: TEvent[] = data?.data || []

  // Format date in Bengali
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const months = [
      "জানুয়ারি",
      "ফেব্রুয়ারি",
      "মার্চ",
      "এপ্রিল",
      "মে",
      "জুন",
      "জুলাই",
      "আগস্ট",
      "সেপ্টেম্বর",
      "অক্টোবর",
      "নভেম্বর",
      "ডিসেম্বর",
    ]
    return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`
  }

  if (isLoading) {
    return (
      <div className="bg-gray-50 min-h-screen py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">ইভেন্টসমূহ</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              পঞ্চগড় জেলায় অনুষ্ঠিত বিভিন্ন ইভেন্ট সম্পর্কে জানুন এবং আপনার পছন্দের অনুষ্ঠানে অংশগ্রহণ করুন।
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 animate-pulse"
              >
                <div className="h-40 bg-gray-200"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">ইভেন্টসমূহ</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            পঞ্চগড় জেলায় অনুষ্ঠিত বিভিন্ন ইভেন্ট সম্পর্কে জানুন এবং আপনার পছন্দের অনুষ্ঠানে অংশগ্রহণ করুন।
          </p>
        </div>

        {/* Events List Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">সকল ইভেন্টসমূহ ({events.length}টি)</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded ${
                viewMode === "grid" ? "bg-emerald-100 text-emerald-600" : "bg-gray-100 text-gray-600"
              }`}
              aria-label="Grid view"
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded ${
                viewMode === "list" ? "bg-emerald-100 text-emerald-600" : "bg-gray-100 text-gray-600"
              }`}
              aria-label="List view"
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* No Events Found */}
        {events.length === 0 && (
          <div className="bg-white rounded-xl p-8 text-center">
            <div className="mb-4">
              <Calendar className="h-12 w-12 mx-auto text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">কোন ইভেন্ট পাওয়া যায়নি</h3>
            <p className="text-gray-600 mb-4">এই মুহূর্তে কোন ইভেন্ট উপলব্ধ নেই।</p>
          </div>
        )}

        {/* Events Grid View */}
        {events.length > 0 && viewMode === "grid" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="relative h-40">
                  <Image
                    src={event.cover_image || "/placeholder.svg?height=160&width=320&query=event"}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{formatDate(event.event_date)}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{event.description}</p>
                  <div className="flex items-start mb-3">
                    <MapPin className="h-3 w-3 text-gray-500 mt-0.5 mr-1 flex-shrink-0" />
                    <span className="text-gray-500 text-xs line-clamp-1">{event.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      <span className="bg-emerald-100 text-emerald-700 text-xs px-1.5 py-0.5 rounded">
                        {event.event_type}
                      </span>
                      {event.organizer_type && (
                        <span className="bg-blue-100 text-blue-700 text-xs px-1.5 py-0.5 rounded">
                          {event.organizer_type}
                        </span>
                      )}
                    </div>
                    <Link
                      href={`/events/${event.slug}`}
                      className="text-emerald-600 hover:text-emerald-700 text-xs font-medium hidden"
                    >
                      বিস্তারিত
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Events List View */}
        {events.length > 0 && viewMode === "list" && (
          <div className="space-y-4">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col md:flex-row"
              >
                <div className="relative w-full md:w-48 h-40 md:h-auto flex-shrink-0">
                  <Image
                    src={event.cover_image || "/placeholder.svg?height=160&width=192&query=event"}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 flex-grow">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{formatDate(event.event_date)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-3 line-clamp-3">{event.description}</p>
                  <div className="flex items-start mb-4">
                    <MapPin className="h-4 w-4 text-gray-500 mt-0.5 mr-1 flex-shrink-0" />
                    <span className="text-gray-500">{event.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded">
                        {event.event_type}
                      </span>
                      {event.organizer_type && (
                        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                          {event.organizer_type}
                        </span>
                      )}
                    </div>
                    <Link
                      href={`/events/${event.slug}`}
                      className="text-emerald-600 hover:text-emerald-700 text-sm font-medium hidden"
                    >
                      বিস্তারিত দেখুন
                    </Link>
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

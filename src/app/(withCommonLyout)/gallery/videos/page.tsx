"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ChevronLeft, ChevronRight, Grid, Film, Search, Play, Pause, Volume2, VolumeX, ArrowLeft } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { useRouter } from "next/navigation"

// Define the video type
type Video = {
  id: string
  title: string
  category: string
  description: string
  thumbnailUrl?: string
  videoUrl: string
  date?: string
  duration?: string
}

export default function VideoGallery() {
  // Sample video data
  const videos: Video[] = [
    {
      id: "1",
      title: "পঞ্চগড়ের চা বাগান",
      category: "প্রকৃতি",
      description: "পঞ্চগড়ের তেঁতুলিয়া উপজেলার চা বাগানের মনোরম দৃশ্য এবং চা শ্রমিকদের দৈনন্দিন জীবন।",
      videoUrl: "https://youtu.be/QN2uxpGkSAA?si=-qzxxWAlVxWO0vXf",
    },
    {
      id: "2",
      title: "হিমালয় দৃশ্য",
      category: "প্রকৃতি",
      description: "তেঁতুলিয়া থেকে দেখা হিমালয় পর্বতমালার অপরূপ দৃশ্য এবং সূর্যোদয়ের মুহূর্ত।",
      videoUrl: "https://youtu.be/NbFT9rymajk?si=aqIk0V169kGlgdLG",
    },
    {
      id: "3",
      title: "পঞ্চগড় যেন বেগুনি ফুলের সমুদ্র!",
      category: "প্রকৃতি",
      description: "পঞ্চগড় যেন বেগুনি ফুলের সমুদ্র!",
      videoUrl: "https://youtu.be/gL2jo5aISME?si=GWGNT5ag0porc_Ur",
    },
    {
      id: "4",
      title: "জেলা প্রশাসন ইকো পার্ক",
      category: "ইকো পার্ক",
      description: "পঞ্চগড় যেন বেগুনি ফুলের সমুদ্র!",
      videoUrl: "https://youtu.be/K6OVYLv0ZTY?si=Prilcl61MCe0QtCC",
    },
    {
      id: "5",
      title: "বাংলাবান্ধা জিরো পয়েন্ট",
      category: "জিরো পয়েন্ট",
      description: "পঞ্চগড় যেন বেগুনি ফুলের সমুদ্র!",
      videoUrl: "https://youtu.be/TNUTVxDSQp8?si=WzJzwKaeYB5N9XSz",
    },
  ]

  // State for modal
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // State for filtering
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Video player states
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Get unique categories
  const categories = Array.from(new Set(videos.map((video) => video.category)))

  // Filter videos based on search and category using useMemo instead of useEffect
  const filteredVideos = useMemo(() => {
    let results = [...videos]

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      results = results.filter(
        (video) => video.title.toLowerCase().includes(query) || video.description.toLowerCase().includes(query),
      )
    }

    if (selectedCategory) {
      results = results.filter((video) => video.category === selectedCategory)
    }

    return results
  }, [videos, searchQuery, selectedCategory])

  // Open modal with selected video
  const openModal = (video: Video) => {
    setSelectedVideo(video)
    setIsModalOpen(true)
    setIsPlaying(false)
    setCurrentTime(0)
  }
  const router = useRouter();

  // Navigate to next video in modal
  const goToNextVideo = () => {
    if (!selectedVideo) return

    const currentIndex = filteredVideos.findIndex((video) => video.id === selectedVideo.id)
    const nextIndex = (currentIndex + 1) % filteredVideos.length
    setSelectedVideo(filteredVideos[nextIndex])
    setIsPlaying(false)
    setCurrentTime(0)
  }

  // Navigate to previous video in modal
  const goToPrevVideo = () => {
    if (!selectedVideo) return

    const currentIndex = filteredVideos.findIndex((video) => video.id === selectedVideo.id)
    const prevIndex = (currentIndex - 1 + filteredVideos.length) % filteredVideos.length
    setSelectedVideo(filteredVideos[prevIndex])
    setIsPlaying(false)
    setCurrentTime(0)
  }

  // Handle video playback
  const togglePlay = () => {
    if (selectedVideo?.videoUrl.includes("youtu")) {
      // For YouTube videos, we'll reload the iframe with autoplay parameter
      setIsPlaying(!isPlaying)
    } else if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Handle video mute
  const toggleMute = () => {
    if (selectedVideo?.videoUrl.includes("youtu")) {
      // For YouTube videos, we'll reload the iframe with mute parameter
      setIsMuted(!isMuted)
    } else if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  // Handle video time update
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
      setDuration(videoRef.current.duration)
    }
  }

  // Handle video seek
  const handleSeek = (value: number[]) => {
    if (videoRef.current) {
      videoRef.current.currentTime = value[0]
      setCurrentTime(value[0])
    }
  }

  // Format time (seconds to MM:SS)
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  // Convert YouTube URL to embed URL
  const getYouTubeEmbedUrl = (url: string) => {
    // Extract video ID from various YouTube URL formats
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)

    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`
    }

    // Return original URL if not a valid YouTube URL
    return url
  }

  // Get YouTube thumbnail from URL
  const getYouTubeThumbnail = (url: string) => {
    // Extract video ID from various YouTube URL formats
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)

    if (match && match[2].length === 11) {
      // Return high quality thumbnail
      return `https://img.youtube.com/vi/${match[2]}/hqdefault.jpg`
    }

    // Return placeholder if not a valid YouTube URL
    return "/video-production-setup.png"
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return

      if (e.key === "ArrowRight") {
        goToNextVideo()
      } else if (e.key === "ArrowLeft") {
        goToPrevVideo()
      } else if (e.key === "Escape") {
        setIsModalOpen(false)
      } else if (e.key === " ") {
        e.preventDefault()
        togglePlay()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isModalOpen, selectedVideo, isPlaying])

  // Reset video player when modal closes
  useEffect(() => {
    if (!isModalOpen) {
      setIsPlaying(false)
      setCurrentTime(0)
    }
  }, [isModalOpen])

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 px-3">
        <div className="container mx-auto max-w-4xl">

          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="mb-3 flex items-center text-white hover:text-blue-200 transition text-sm"
          >
            <ArrowLeft className="w-3 h-3 mr-1" />
            ফিরে যান
          </button>

          <h1 className="text-xl md:text-2xl font-semibold mb-2">ভিডিও গ্যালারি</h1>
          <p className="text-blue-100 max-w-xl text-xs leading-tight mb-4">
            পঞ্চগড় জেলার বিভিন্ন দৃশ্য, স্থান, উৎসব এবং জনজীবনের ভিডিও সংগ্রহ। এই গ্যালারিতে আমাদের জেলার সৌন্দর্য ও ঐতিহ্য দেখতে পারবেন।
          </p>

          {/* Gallery Navigation */}
          <div className="flex space-x-3">
            <Link
              href="/gallery/photos"
              className="bg-blue-700 text-white hover:bg-blue-600 px-3 py-1.5 rounded-md font-medium flex items-center text-sm transition-colors"
            >
              <Grid className="w-3 h-3 mr-1" />
              ফটো গ্যালারি
            </Link>
            <Link
              href="/gallery/videos"
              className="bg-white text-blue-700 px-3 py-1.5 rounded-md font-medium flex items-center text-sm"
            >
              <Film className="w-3 h-3 mr-1" />
              ভিডিও গ্যালারি
            </Link>
          </div>
        </div>
      </div>


      {/* Gallery Content */}
      <div className="container mx-auto max-w-6xl px-4 mt-8">
        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="ভিডিও খুঁজুন..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex-shrink-0">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto">
                  <TabsTrigger
                    value="all"
                    onClick={() => setSelectedCategory(null)}
                    className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700"
                  >
                    সকল
                  </TabsTrigger>
                  {categories.slice(0, 3).map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      onClick={() => setSelectedCategory(category)}
                      className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>

          {/* Category Pills - For mobile, show more categories */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer ${selectedCategory === category ? "bg-blue-500 hover:bg-blue-600" : "hover:bg-blue-50"
                  }`}
                onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                onClick={() => openModal(video)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={getYouTubeThumbnail(video.videoUrl) || "/placeholder.svg"}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2">
                    <Badge className="bg-blue-500">{video.category}</Badge>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-gray-800 line-clamp-1">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg">
            <Search className="h-12 w-12 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-medium text-gray-800 mb-2">কোন ভিডিও পাওয়া যায়নি</h3>
            <p className="text-gray-500 mb-4">আপনার অনুসন্ধান মাপদণ্ড অনুযায়ী কোন ভিডিও পাওয়া যায়নি।</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory(null)
              }}
            >
              সব ফিল্টার মুছুন
            </Button>
          </div>
        )}
      </div>

      {/* Custom Video Modal */}
      {isModalOpen && selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
        >
          <div className="relative h-full w-full flex flex-col max-w-md bg-blue-600 rounded-md mx-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 bg-black/50 text-white">
              <h3 id="video-modal-title" className="font-medium">
                {selectedVideo.title}
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

            {/* Video Container */}
            <div className="flex-grow relative flex items-center justify-center bg-black">
              {selectedVideo.videoUrl.includes("youtu") ? (
                <iframe
                  src={
                    getYouTubeEmbedUrl(selectedVideo.videoUrl) +
                    "?autoplay=" +
                    (isPlaying ? "1" : "0") +
                    "&mute=" +
                    (isMuted ? "1" : "0")
                  }
                  className="w-full h-full aspect-video"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title={selectedVideo.title}
                />
              ) : (
                <video
                  ref={videoRef}
                  src={selectedVideo.videoUrl}
                  className="max-h-[70vh] max-w-full"
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={() => setIsPlaying(false)}
                  onClick={togglePlay}
                  playsInline
                />
              )}

              {/* Play/Pause Overlay - Only show for non-YouTube videos */}
              {!isPlaying && !selectedVideo.videoUrl.includes("youtu") && (
                <div className="absolute inset-0 flex items-center justify-center cursor-pointer" onClick={togglePlay}>
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                    <Play className="h-10 w-10 text-white" />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 rounded-full h-10 w-10"
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrevVideo()
                }}
                aria-label="Previous video"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 rounded-full h-10 w-10"
                onClick={(e) => {
                  e.stopPropagation()
                  goToNextVideo()
                }}
                aria-label="Next video"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Video Controls */}
            <div className="p-4 bg-black/80 text-white">
              <div className="flex items-center gap-3 mb-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20 h-8 w-8"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </Button>

                <span className="text-xs text-gray-300 w-16">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>

                <div className="flex-grow">
                  <Slider
                    value={[currentTime]}
                    max={duration || 100}
                    step={0.1}
                    onValueChange={handleSeek}
                    className="cursor-pointer"
                  />
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20 h-8 w-8"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </Button>
              </div>

              <p className="text-sm text-gray-300">{selectedVideo.description}</p>
              <div className="flex justify-between items-center mt-2">
                <Badge className="bg-blue-600">{selectedVideo.category}</Badge>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

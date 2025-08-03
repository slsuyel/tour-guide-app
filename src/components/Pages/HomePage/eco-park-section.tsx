"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import {
  MapPin,
  Calendar,
  Clock,
  Ticket,
  ChevronLeft,
  ChevronRight,
  Leaf,
  Droplets,
  Trees,
  Palmtree,
  Home,
  Users,
} from "lucide-react"
import Link from "next/link"

export default function EcoParkSection() {
  // Images for the gallery
  const images = [
    "https://panchagarh.developerlighthouse.com/wp-content/uploads/2025/04/eco-park-2.jpeg",
    "https://panchagarh.developerlighthouse.com/wp-content/uploads/2025/04/eco-park-1.jpeg",
    "https://panchagarh.developerlighthouse.com/wp-content/uploads/2025/04/eco-park-3.jpeg",
    "https://panchagarh.developerlighthouse.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-04-at-1.37.37-PM.jpeg",
    "https://panchagarh.developerlighthouse.com/wp-content/uploads/2025/04/eco-park-4.jpeg",
    "https://panchagarh.developerlighthouse.com/wp-content/uploads/2025/04/eco-park-5.jpeg"
  ]

  // Features of the park
  const features = [
    {
      icon: <Trees className="h-4 w-4 text-emerald-500" />,
      title: "২১ একর বিস্তৃত",
      description: "পরিত্যক্ত সরকারি জমিতে নির্মিত",
    },
    {
      icon: <Leaf className="h-4 w-4 text-emerald-500" />,
      title: "ফুলের বাগান",
      description: "দৃষ্টিনন্দন ফুল ও বিভিন্ন গাছপালা",
    },
    {
      icon: <Droplets className="h-4 w-4 text-emerald-500" />,
      title: "কৃত্রিম লেক",
      description: "মনোরম পরিবেশে কৃত্রিম লেক ও ফোয়ারা",
    },
    {
      icon: <Palmtree className="h-4 w-4 text-emerald-500" />,
      title: "চা বাগান",
      description: "পার্কের ভিতরে আকর্ষণীয় চা বাগান",
    },
    {
      icon: <Users className="h-4 w-4 text-emerald-500" />,
      title: "বিনোদন ব্যবস্থা",
      description: "শিশুদের জন্য বিভিন্ন রাইডস",
    },
    {
      icon: <Home className="h-4 w-4 text-emerald-500" />,
      title: "আবাসন সুবিধা",
      description: "পর্যটকদের জন্য আবাসন ব্যবস্থা",
    },
  ]

  // State for image slider
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  // Handle auto play
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 4000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, images.length])

  // Handle navigation
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-6 md:py-12 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-3 md:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header with location */}
          <div className="text-center mb-4 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 md:mb-2">জেলা প্রশাসন ইকো পার্ক</h2>
            <div className="flex items-center justify-center text-emerald-700 text-sm md:text-base">
              <MapPin className="h-3 w-3 md:h-4 md:w-4 mr-1" />
              <p>ধাক্কামারা, মীরগড়, করতোয়া নদীর তীর, পঞ্চগড় সদর</p>
            </div>
          </div>

          {/* Image Gallery - Full width on mobile */}
          <div className="mb-4 md:mb-8">
            <div className="relative overflow-hidden rounded-lg shadow-sm h-[200px] sm:h-[300px] md:h-[400px]">
              {/* Main Image */}
              <div className="relative h-full w-full">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                      }`}
                  >
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`ইকো পার্ক দৃশ্য ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}

                {/* Navigation Arrows - Smaller on mobile */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 md:p-2 rounded-full backdrop-blur-sm transition-colors z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 md:p-2 rounded-full backdrop-blur-sm transition-colors z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
                </button>

                {/* Image Indicators - Smaller on mobile */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1 z-10">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${index === currentIndex ? "bg-white w-4" : "bg-white/60 hover:bg-white/80"
                        }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Description - Full width on mobile */}
          <div className="mb-6 md:mb-8">
            <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm border border-emerald-100">
              <h3 className="text-lg md:text-xl font-bold text-emerald-800 mb-2 md:mb-3">পার্ক সম্পর্কে</h3>
              <p className="text-gray-700 text-sm md:text-base mb-4 leading-relaxed">
                পঞ্চগড় জেলার সদ্য নির্মিত জেলা প্রশাসন ইকো পার্ক বর্তমানে স্থানীয় ও বহিরাগত পর্যটকদের জন্য একটি আকর্ষণীয় বিনোদনকেন্দ্র
                হিসেবে গড়ে উঠেছে। এটি পঞ্চগড় সদর উপজেলার ধাক্কামারা ইউনিয়নের ঐতিহাসিক মীরগড় এলাকায় করতোয়া নদীর তীরে অবস্থিত।
              </p>

              {/* Visiting Info - More compact on mobile */}
              <div className="bg-emerald-50 rounded-lg p-3 mb-4">
                <h4 className="font-medium text-emerald-800 mb-2 text-sm md:text-base flex items-center">
                  <Clock className="h-4 w-4 mr-1" /> ভ্রমণের তথ্য
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-start">
                    <Calendar className="h-3 w-3 md:h-4 md:w-4 text-emerald-600 mt-0.5 mr-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs md:text-sm font-medium text-gray-700">খোলা থাকে</p>
                      <p className="text-xs text-gray-600">সকাল ৯টা - সন্ধ্যা ৭টা</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Ticket className="h-3 w-3 md:h-4 md:w-4 text-emerald-600 mt-0.5 mr-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs md:text-sm font-medium text-gray-700">প্রবেশ মূল্য</p>
                      <p className="text-xs text-gray-600">৩০ টাকা (প্রতি জন)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activities - Smaller text on mobile */}
              <div className="mb-4">
                <h4 className="font-medium text-emerald-800 mb-1 text-sm md:text-base">সাম্প্রতিক কার্যক্রম</h4>
                <p className="text-gray-700 text-xs md:text-sm">
                  ২০২৫ সালের ঈদুল ফিতরের ছুটিতে পার্কটি দর্শনার্থীদের জন্য উন্মুক্ত করা হয়। ঈদের ছুটিতে ৩০ টাকার টিকিটের বিনিময়ে
                  পরিবার-পরিজন নিয়ে পার্কের সৌন্দর্য উপভোগ করেন দর্শনার্থীরা। এই সময়ে পার্কটি ঘিরে স্থানীয় ব্যবসা-বাণিজ্যও জমে ওঠে।
                </p>
              </div>

              {/* CTA Button - Smaller on mobile */}
              <Link
                href="#"
                className="inline-flex items-center justify-center w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg transition-colors text-sm md:text-base font-medium"
              >
                বিস্তারিত দেখুন
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-5 md:w-5 ml-1 md:ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Features Grid - 2 columns on mobile, 3 on larger screens */}
          <div className="mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl font-bold text-center text-gray-800 mb-3 md:mb-4">
              পার্কের বৈশিষ্ট্য ও আকর্ষণীয় দিকসমূহ
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-2 md:p-4 shadow-sm border border-emerald-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-1 md:mb-2">
                    <div className="bg-emerald-100 p-1 md:p-2 rounded-full mr-2">{feature.icon}</div>
                    <h4 className="font-medium text-gray-800 text-xs md:text-sm">{feature.title}</h4>
                  </div>
                  <p className="text-gray-600 text-xs leading-tight">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Thumbnail Gallery - 4 columns on mobile, 6 on larger screens */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-center text-gray-800 mb-2 md:mb-4">গ্যালারি</h3>
            <div className="grid grid-cols-4 md:grid-cols-6 gap-1 md:gap-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative h-14 md:h-16 overflow-hidden rounded ${currentIndex === index ? "ring-2 ring-emerald-500" : ""
                    }`}
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`ইকো পার্ক দৃশ্য ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

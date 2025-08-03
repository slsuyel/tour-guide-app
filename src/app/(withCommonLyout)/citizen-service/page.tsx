"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  Scale,
  Stethoscope,
  GraduationCap,
  Lightbulb,
  Newspaper,
  Globe,
  Bus,
  Train,
  Home,
  Building2,
  UtensilsCrossed,
  MapPin,
  Building,
  Wrench,
  Leaf,
  ShoppingBag,
  Zap,
  BookOpen,
  Truck,
  Play,
  Heart,
  Scissors,
  Users,
  BarChart4,
  ChevronLeft,
  ChevronRight,
  Bell,
  type LucideIcon,
  Landmark,
  MonitorCheck,
  Siren,
  Briefcase,
  Sprout,
  Fish,
  Megaphone,
  Music2,
  Store,
  Laptop,
  BookOpenCheck,
  Shield,
  PhoneCall,
  FileText,
  Dribbble,
  Flame,
  Award,
  Plane,
} from "lucide-react"

export default function CitizenService() {
  // Carousel state and images
  const [currentSlide, setCurrentSlide] = useState(0)
  const bannerImages = [
    "https://cdn.jugantor.com/assets/news_photos/2023/09/15/image-718224-1694738414.jpg",
    "https://ecdn.dhakatribune.net/contents/cache/images/900x505x1/uploads/dten/2023/04/30/tea-garden-dt.jpeg",
    "https://www.motorcyclevalley.com/images/places/Banglabandha-Zero-Point-1654670211.jpg",
  ]

  // Auto-change carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === bannerImages.length - 1 ? 0 : prev + 1))
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [bannerImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === bannerImages.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? bannerImages.length - 1 : prev - 1))
  }

  return (
    <main className="flex flex-col w-full max-w-md mx-auto bg-gradient-to-b from-white to-gray-50 min-h-screen">
    

      {/* Banner Carousel */}
      <div className="relative w-full h-56 rounded-lg overflow-hidden my-4 shadow-lg">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-all duration-700 ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Banner Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-1.5 rounded-full text-white hover:bg-white/50 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-1.5 rounded-full text-white hover:bg-white/50 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-8 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white" : "bg-white/40"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Notification Bar with Static Label and Moving Content */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white p-3 rounded-lg mx-2 mb-4 shadow-md overflow-hidden flex items-center">
        <div className="flex items-center justify-center bg-white/20 rounded-full p-1.5 mr-3">
          <Bell size={16} className="animate-bounce" />
        </div>
        <div className="overflow-hidden flex-1">
          <div className="whitespace-nowrap animate-marquee">
            <p className="text-sm font-medium">  কোন তথ্য যুক্ত করতে যোগাযোগ করুন।</p>
          </div>
        </div>
      </div>

      {/* Service Categories Grid */}
      <div className="grid grid-cols-4 gap-3 p-2">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={`/citizen-service/${category.slug}`}
            className="flex flex-col items-center bg-white border border-gray-100 rounded-xl p-2.5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 mb-2 flex items-center justify-center text-teal-600 bg-teal-50 rounded-full">
              {category.icon && <category.icon size={24} strokeWidth={1.5} />}
            </div>
            <p className="text-xs text-center font-medium text-gray-700">{category.name}</p>
          </Link>
        ))}
      </div>


      {/* CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </main>
  )
}
const categories: { name: string; slug: string; icon: LucideIcon }[] = [
  { name: "জেলার ইতিহাস", slug: "history", icon: BookOpen },
  { name: "হাসপাতাল", slug: "hospital", icon: Building2 },
  { name: "এম্বুলেন্স সার্ভিস", slug: "ambulance-service", icon: Siren },
  { name: "পুলিশ স্টেশন", slug: "police-station", icon: Shield },
  { name: "জরুরি নাম্বার", slug: "emergency-number", icon: PhoneCall },
  { name: "ডাক্তার", slug: "doctor", icon: Stethoscope },
  { name: "আইনজীবী", slug: "lawyer", icon: Scale },
  { name: "শিক্ষা প্রতিষ্ঠান", slug: "educational-institute", icon: BookOpenCheck },
  { name: "নাগরিক সেবাসমুহ", slug: "citizen-forms", icon: FileText },
  { name: "ইউনিয়ন / পৌরসভা ", slug: "local-office", icon: Landmark },
  { name: "বিদ্যুৎ অফিস", slug: "electricity-office", icon: Zap },
  { name: "বাস সার্ভিস", slug: "bus-service", icon: Bus },
  { name: "বিমানবন্দর", slug: "airport", icon: Plane  },
  { name: "ট্রেনের সময়সূচি", slug: "train-schedule", icon: Train },
  { name: "হোটেল ও আবাসন", slug: "housing", icon: Building2 },
  { name: "দর্শনীয় স্থান", slug: "tourist-spots", icon: MapPin },
  { name: "কুরিয়ার সার্ভিস", slug: "courier-service", icon: Truck },
  { name: "জেলা ভিত্তিক চাকরি", slug: "jobs", icon: Briefcase },
  { name: "হাট-বাজার", slug: "market-info", icon: Store },
  { name: "জন প্রতিনিধি", slug: "public-representative", icon: Users },
  { name: "ভ্রমণ খরচ", slug: "tour-expense", icon: BarChart4 },
  { name: "সংস্কৃতিক কেন্দ্র", slug: "cultural-center", icon: Music2 },
  { name: "স্থানীয় সংবাদ", slug: "local-news", icon: Newspaper },
  { name: "স্টেডিয়াম", slug: "stadium", icon: Dribbble },
  { name: "ফায়ার সার্ভিস", slug: "fire-service", icon: Flame },
  { name: "জেলার গুণীজন", slug: "notable-people", icon: Award },
];


"use client"

import { useState, useEffect } from "react"
import { Award, Calendar, MapPin, Users, Volume2 } from "lucide-react"
import Link from "next/link"

// Define announcement type for better structure
type Announcement = {
  id: string
  title: string
  description: string
  icon: "calendar" | "award" | "users" | "map"
  link: string
  color: "rose" | "amber" | "emerald" | "sky"
}

export default function AnnouncementMarquee() {
  // Fully dynamic announcements array with all content
  const announcements: Announcement[] = [
    {
      id: "youth-festival",
      title: "তারুণ্যের উৎসব ২০২৫",
      description: "তারুণ্যের উৎসব ২০২৫' এর আওতায় অনুষ্ঠান 'জাতীয় দক্ষতা প্রতিযোগিতা-২০২৫' আয়োজন",
      icon: "award",
      link: "/events/youth-festival-2025",
      color: "rose",
    },
    {
      id: "divisional-event",
      title: "বিভাগীয় পর্যায়ে অনুষ্ঠান",
      description: "তারুণ্যের উৎসব-২০২৫ এর বিভাগীয় পর্যায়ে অনুষ্ঠানে অংশগ্রহণ",
      icon: "users",
      link: "/events/divisional-event-2025",
      color: "amber",
    },
    {
      id: "tea-festival",
      title: "চা উৎসব ২০২৫",
      description: "পঞ্চগড় চা উৎসব ২০২৫ আগামী ১৫-১৭ জানুয়ারি অনুষ্ঠিত হবে",
      icon: "calendar",
      link: "/events/tea-festival-2025",
      color: "emerald",
    },
    {
      id: "tourism-day",
      title: "বিশ্ব পর্যটন দিবস",
      description: "বিশ্ব পর্যটন দিবস উপলক্ষে পঞ্চগড়ে বিশেষ অনুষ্ঠানমালা",
      icon: "map",
      link: "/events/world-tourism-day",
      color: "sky",
    },
  ]

  // Get the appropriate icon component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "calendar":
        return <Calendar className="h-5 w-5" />
      case "award":
        return <Award className="h-5 w-5" />
      case "users":
        return <Users className="h-5 w-5" />
      case "map":
        return <MapPin className="h-5 w-5" />
      default:
        return <Volume2 className="h-5 w-5" />
    }
  }

  const getGradient = () => {
    return "from-rose-600 to-rose-700"
  }

  // Create marquee items with duplicates to ensure continuous scrolling
  const marqueeItems = [...announcements, ...announcements]

  return (
    <div
      className={`bg-gradient-to-r ${getGradient()} text-white py-3 relative overflow-hidden`}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/20"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/10"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 blur-xl"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5,
              animation: `float ${Math.random() * 10 + 20}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Marquee container */}
      <div className="relative overflow-hidden">
        {/* Scrolling marquee content */}
        <div
          className="flex whitespace-nowrap animate-marquee"
          style={{ animationDuration: "30s" }}
        >
          {marqueeItems.map((announcement, index) => (
            <div key={`${announcement.id}-${index}`} className="flex items-center mx-8 first:ml-0">
              {/* Icon and title */}
              <div className="flex items-center space-x-3 mr-2">
                <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">{getIcon(announcement.icon)}</div>
                <span className="font-bold text-lg whitespace-nowrap">{announcement.title}</span>
              </div>

              {/* Separator */}
              <div className="mx-3 h-6 w-px bg-white/30"></div>

              {/* Description */}
              <p className="font-medium mr-3">{announcement.description}</p>

              {/* CTA button */}
              {/* <Link
                href={announcement.link}
                className="  whitespace-nowrap flex items-center bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:pl-5 group"
              >
                বিস্তারিত
                <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </Link> */}
            </div>
          ))}
        </div>
      </div>

      {/* Add keyframes for animations */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </div>
  )
}

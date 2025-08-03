"use client"

import { Bell, Home, MessageCircle, User, Image, Video } from "lucide-react"
import Link from "next/link"


// Add CSS for marquee animation
const marqueeAnimation = `
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}
.animate-marquee {
  animation: marquee 65s linear infinite;
}
`

const MobileBottomNavigation = () => {
  // Replace this line:
  // const navItems = ["হোম", "জরুরি সেবা", "যোগাযোগ", "প্রোফাইল"]

  // With this structured array:
  const navItems = [
    { label: "হোম", slug: "/", icon: Home },
    { label: "ফটোগ্যালারি", slug: "/gallery/photos", icon: Image },
    { label: "ভিডিও", slug: "/gallery/videos", icon: Video }, // নতুনটি
    { label: "যোগাযোগ", slug: "/contact-us", icon: MessageCircle },
  ];

  const footerText = "পঞ্চগড় – বাংলাদেশের সর্বউত্তরের এক শান্ত, সবুজ ও ঐতিহাসিক জেলা";
  const notificationText = "   পঞ্চগড় জেলার দর্শনীয় স্থানসমূহ ঘুরে দেখুন | আবহাওয়ার পূর্বাভাস জেনে রাখুন | হোটেল বুকিং ও পরিবহন তথ্য এখন সহজেই পাওয়া যায় |";


  return (
    <footer className=" block md:hidden pt-20">
      <style jsx global>
        {marqueeAnimation}
      </style>

      {/* Footer Text with Marquee */}
      <div className="fixed bottom-16 left-0 right-0 bg-green-800 text-white p-2 text-center text-xs z-10">
        <div className="overflow-hidden">
          <div className="whitespace-nowrap animate-marquee inline-block">
            <span>
              {footerText} &nbsp;&nbsp;&nbsp;&nbsp;{footerText} &nbsp;&nbsp;&nbsp;&nbsp;{footerText}{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </div>
        </div>
      </div>

      {/* Notification Banner */}
      <div className="fixed bottom-[4.5rem] left-0 right-0 z-10">
        <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white p-2 mx-2 rounded-lg shadow-md overflow-hidden flex items-center">
          <div className="flex items-center justify-center bg-white/20 rounded-full p-1.5 mr-3">
            <Bell size={16} className="animate-bounce" />
          </div>
          <div className="overflow-hidden flex-1">
            <div className="whitespace-nowrap animate-marquee inline-block">
              <p className="text-sm font-medium">
                {notificationText} &nbsp;&nbsp;&nbsp;&nbsp;{notificationText}
                &nbsp;&nbsp;&nbsp;&nbsp;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Replace the bottom navigation section with this: */}
      {/* Bottom Navigation - Fixed to bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-700 text-white grid grid-cols-4 text-center py-2 shadow-lg z-20">
        {navItems.map((item, index) => {
          const Icon = item.icon
          return (
            <Link href={item.slug} key={index} className="flex flex-col items-center justify-center">
              <Icon className="w-5 h-5 mb-0.5" />
              <span className="text-xs">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </footer>
  )
}

export default MobileBottomNavigation

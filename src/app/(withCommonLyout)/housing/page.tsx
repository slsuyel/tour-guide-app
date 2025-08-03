// "use client"

// import { useState } from "react"
// import { Mail, Phone, MapPin, Users, Star } from "lucide-react"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"

// // Updated hotel interface based on the requested structure
// interface Hotel {
//     name: string
//     location: string
//     phone: string
//     description: string
//     capacity: number
//     image: string
//     type: string
// }

// // Sample data for private hotels
// const privateHotels: Hotel[] = [
//     {
//         name: "হোটেল রাজনগর আবাসিক",
//         location: "পঞ্চগড় বাজার",
//         phone: "০১৭১২-৩৪৫৬৭৮",
//         description: "পঞ্চগড় শহরের কেন্দ্রস্থলে অবস্থিত একটি আরামদায়ক হোটেল। সুন্দর পরিবেশ এবং আধুনিক সুবিধা।",
//         capacity: 30,
//         image: "/luxury-hotel-room.png",
//         type: "আবাসিক হোটেল",
//     },
//     {
//         name: "ইসলাম আবাসিক হোটেল",
//         location: "পঞ্চগড় বাজার",
//         phone: "০১৮১৫-৬৭৮৯০১",
//         description: "পারিবারিক পরিবেশে থাকার জন্য উপযুক্ত। সাশ্রয়ী মূল্যে ভালো সেবা প্রদান করা হয়।",
//         capacity: 32,
//         image: "/family-hotel-room.png",
//         type: "আবাসিক হোটেল",
//     },
//     {
//         name: "সেন্ট্রাল গেস্ট হাউজ",
//         location: "সিনেমা রোড, পঞ্চগড়",
//         phone: "০১৯১৩-২৪৬৮০১",
//         description: "সিনেমা রোডে অবস্থিত একটি আধুনিক গেস্ট হাউজ। নিরাপদ এবং পরিষ্কার পরিবেশ।",
//         capacity: 28,
//         image: "/placeholder.svg?key=y7s41",
//         type: "আবাসিক হোটেল",
//     },
//     {
//         name: "হোটেল প্রিতম আবাসিক",
//         location: "পঞ্চগড় বাজার",
//         phone: "০১৬১৭-৮৯০১২৩",
//         description: "আধুনিক সুযোগ-সুবিধা সম্পন্ন একটি হোটেল। ব্যবসায়িক ভ্রমণকারীদের জন্য উপযুক্ত।",
//         capacity: 40,
//         image: "/modern-hotel.png",
//         type: "আবাসিক হোটেল",
//     },
//     {
//         name: "হিলটন বোর্ডিং",
//         location: "পঞ্চগড় বাজার",
//         phone: "০১৫১৬-৭৮৯০১২",
//         description: "দীর্ঘমেয়াদী থাকার জন্য উপযুক্ত। ছাত্র এবং চাকরিজীবীদের জন্য বিশেষ সুবিধা রয়েছে।",
//         capacity: 47,
//         image: "/placeholder.svg?key=3fegj",
//         type: "আবাসিক হোটেল",
//     },
// ]

// // Sample data for government hotels
// const governmentHotels: Hotel[] = [
//     {
//         name: "পানি উন্নয়ন বোর্ডের রেস্ট হাউজ",
//         location: "পানি উন্নয়ন বোর্ড অফিস চত্ত্বর",
//         phone: "০১৭১৮-৪৫৬৭৮৯",
//         description: "সরকারি কর্মকর্তাদের জন্য নির্ধারিত। অগ্রিম বুকিং প্রয়োজন।",
//         capacity: 4,
//         image: "/placeholder.svg?key=cldks",
//         type: "রেস্ট হাউজ",
//     },
//     {
//         name: "পঞ্চগড় চিনিকল রেস্ট হাউজ",
//         location: "পঞ্চগড় চিনিকল কলোনী",
//         phone: "০১৮১৯-৬৭৮৯০১",
//         description: "চিনিকল এলাকায় অবস্থিত শান্ত পরিবেশের একটি রেস্ট হাউজ।",
//         capacity: 5,
//         image: "/placeholder.svg?key=yqxaf",
//         type: "রেস্ট হাউজ",
//     },
//     {
//         name: "জেলা পরিষদ ডাকবাংলো",
//         location: "জেলা পরিষদ অফিস চত্ত্বর",
//         phone: "০১৯১৭-২৪৬৮০১",
//         description: "ঐতিহাসিক ডাকবাংলো। সরকারি অনুমতি সাপেক্ষে থাকা যায়।",
//         capacity: 16,
//         image: "/placeholder.svg?key=n7i6p",
//         type: "ডাকবাংলো",
//     },
//     {
//         name: "ডিসি কটেজ, পঞ্চগড়",
//         location: "অফিসার্স কোয়ার্টার চত্ত্বর",
//         phone: "০১৬১৯-৮৯০১২৩",
//         description: "জেলা প্রশাসকের অনুমোদন সাপেক্ষে ব্যবহার করা যায়।",
//         capacity: 3,
//         image: "/placeholder.svg?height=200&width=300&query=district%20commissioner%20cottage",
//         type: "ডিসি কটেজ",
//     },
//     {
//         name: "পঞ্চগড় সার্কিট হাউজ",
//         location: "মিঠাপুকুর, পঞ্চগড়",
//         phone: "০১৫১৯-৭৮৯০১২",
//         description: "সরকারি কর্মকর্তাদের জন্য নির্ধারিত। সুন্দর প্রাকৃতিক পরিবেশ।",
//         capacity: 15,
//         image: "/placeholder.svg?height=200&width=300&query=circuit%20house%20building",
//         type: "সার্কিট হাউজ",
//     },
// ]

// export default function HotelListingPage() {
//     const [activeCategory, setActiveCategory] = useState<"private" | "government">("private")

//     return (
//         <div className="min-h-screen container mx-auto bg-emerald-50">
//             {/* Header */}
//             <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white">
//                 <div className="container mx-auto py-10 px-4 max-w-7xl">
//                     <h1 className="text-3xl font-bold text-center mb-2">হোটেল তালিকা</h1>
//                     <p className="text-center text-emerald-100 mb-8">পঞ্চগড় জেলার হোটেল এবং আবাসন সুবিধা</p>

//                     {/* Category Selector */}
//                     <div className="flex justify-center">
//                         <div className="inline-flex p-1 bg-emerald-600/30 rounded-full">
//                             <button
//                                 onClick={() => setActiveCategory("private")}
//                                 className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${activeCategory === "private" ? "bg-white text-emerald-700" : "text-white hover:bg-emerald-600/50"
//                                     }`}
//                             >
//                                 বেসরকারি হোটেল
//                             </button>
//                             <div className="w-2"></div>
//                             <button
//                                 onClick={() => setActiveCategory("government")}
//                                 className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${activeCategory === "government" ? "bg-white text-emerald-700" : "text-white hover:bg-emerald-600/50"
//                                     }`}
//                             >
//                                 সরকারি হোটেল
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className=" flex justify-end my-3">
//                 <Link href={`/tour-calculator`} ><Button className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-whitebg-primary text-white">ভ্রমণ খরচ ক্যালকুলেটর
//                 </Button></Link>
//             </div>
//             {/* Main Content */}
//             <div className="container mx-auto py-10 ">
//                 {/* Hotel Cards Grid */}
//                 <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
//                     {(activeCategory === "private" ? privateHotels : governmentHotels).map((hotel, index) => (
//                         <HotelCard key={index} hotel={hotel} />
//                     ))}
//                 </div>
//             </div>

//             {/* Footer with Add Your Hotel Section */}
//             <footer className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white py-6 my-4 md:my-12">
//                 <div className="container mx-auto px-4 max-w-7xl">
//                     <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//                         <div>
//                             <h3 className="text-lg font-medium mb-1">আপনার হোটেলের তথ্য যোগ করুন</h3>
//                             <p className="text-sm text-emerald-100">আপনার হোটেল বা আবাসন সুবিধা এই তালিকায় যোগ করতে আমাদের সাথে যোগাযোগ করুন</p>
//                         </div>
//                         <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
//                             <Mail className="text-white" size={16} />
//                             <a href="mailto:slsuyel@gmail.com" className="text-white hover:text-emerald-100 text-sm">
//                                 slsuyel@gmail.com
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </footer>

//         </div>
//     )
// }

// interface HotelCardProps {
//     hotel: Hotel
// }

// function HotelCard({ hotel }: HotelCardProps) {
//     return (
//         <div className="bg-white rounded-lg overflow-hidden border border-emerald-100 hover:border-emerald-300 transition-all hover:shadow-sm group">
//             <div className="relative h-40 w-full">
//                 <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs px-2 py-1 rounded-bl-lg z-10">
//                     {hotel.type}
//                 </div>
//                 <Image
//                     src={hotel.image || "/placeholder.svg"}
//                     alt={hotel.name}
//                     fill
//                     className="object-cover group-hover:scale-105 transition-transform duration-300"
//                     sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
//                 />
//             </div>
//             <div className="p-4">
//                 <h3 className="font-medium text-gray-900 mb-1 truncate">{hotel.name}</h3>
//                 <div className="flex items-start gap-1 mb-1">
//                     <MapPin size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
//                     <p className="text-sm text-gray-600 truncate">{hotel.location}</p>
//                 </div>
//                 <div className="flex items-start gap-1 mb-1">
//                     <Phone size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
//                     <p className="text-sm text-gray-600">{hotel.phone}</p>
//                 </div>
//                 <div className="flex items-start gap-1 mb-2">
//                     <Users size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
//                     <p className="text-sm text-gray-600">ধারণ ক্ষমতা: {hotel.capacity} জন</p>
//                 </div>
//                 <p className="text-xs text-gray-500 line-clamp-2">{hotel.description}</p>
//                 <div className="mt-3 pt-3 border-t border-emerald-50 flex justify-between items-center">
//                     <div className="flex items-center">
//                         <Star size={14} className="text-amber-400" fill="#FFC107" />
//                         <Star size={14} className="text-amber-400" fill="#FFC107" />
//                         <Star size={14} className="text-amber-400" fill="#FFC107" />
//                         <Star size={14} className="text-amber-400" fill="#FFC107" />
//                         <Star size={14} className="text-gray-300" />
//                     </div>
//                     <button className="text-xs bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1 rounded-full transition-colors">
//                         বিস্তারিত
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

import ServicesDirectory from '@/components/Pages/HomePage/services-directory';
import React from 'react';

const page = () => {
    return (
        <div>
            <ServicesDirectory/>
        </div>
    );
};

export default page;
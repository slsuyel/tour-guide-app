"use client"
import { useState } from "react"
import type React from "react"

import { motion } from "framer-motion"
import { Search, User, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

interface Person {
    id: number
    name: string
    englishName: string
    description: string
    category: string[]
    image?: string
}

export default function NotablePeople() {
    const [searchTerm, setSearchTerm] = useState("")

    const people: Person[] = [
        {
            id: 1,
            name: "এ্যাডভোকেট সিরাজুল ইসলাম",
            englishName: "Advocate Sirajul Islam",
            description:
                "পঞ্চগড়ের রাজনৈতিক অঙ্গনের প্রাণপুরুষ, বর্ষীয়ান নেতা, মহান একাত্তরের মুক্তিযুদ্ধের দক্ষ সংগঠক, মুক্তিযুদ্ধের ৬/ক সাব সেক্টরের বেসামরিক উপদেষ্টা, বাংলাদেশ আওয়ামী লীগের প্রথম আন্তর্জাতিক",
            category: ["রাজনীতি", "মুক্তিযোদ্ধা"],
            image: "/placeholder-2h0ns.png",
        },
        {
            id: 2,
            name: "কমরেড মোহাম্মদ ফরহাদ",
            englishName: "Comrade Mohammad Forhad",
            description:
                "একাধারে একজন রাজনীতিবিদ, সাংবাদিক, বাংলাদেশের স্বাধীনতার অন্যতম স্থপতি, বাংলাদেশ কমিউনিস্ট পার্টির (সিপিবি) সাধারণ সম্পাদক, জাতীয় সংসদ সদস্য ও মেহেনতি মানুষের নেতা।",
            category: ["রাজনীতি"],
            image: "/placeholder-on97r.png",
        },
        {
            id: 3,
            name: "ভাষা সৈনিক মোহাম্মদ সুলতান",
            englishName: "Mohammad Sultan",
            description:
                "১৯৫২ সালের বাংলা ভাষা আন্দোলনের অন্যতম সংগঠক, বাংলাদেশ ছাত্র ইউনিয়নের প্রতিষ্ঠাতা সভাপতি, যুবলীগের প্রতিষ্ঠাতা কমিটির সদস্য ও একসময়ের যুবলীগের সাধারণ সম্পাদক।",
            category: ["ভাষা আন্দোলন", "রাজনীতি"],
            image: "/placeholder-64x01.png",
        },
        {
            id: 4,
            name: "নায়ক রহমান",
            englishName: "Actor Rahman",
            description:
                "বাংলাদেশ চলচ্চিত্রের নায়ককুলের শিরোমনি: নায়ক রহমান পঞ্চগড়ের সন্তান। বাংলাদেশের 'উত্তম কুমার' খ্যাত, প্রথম রোমান্টিক, কিংবদন্তি, নন্দিত স্টাইলিশ চিত্রনায়ক 'রহমান', তাঁর পুরো নাম আবদুর রহমান।",
            category: ["চলচ্চিত্র"],
            image: "/placeholder-g8phn.png",
        },
        {
            id: 5,
            name: "ব্যারিস্টার জমির উদ্দিন সরকার",
            englishName: "Barrister Jamir Uddin Sircar",
            description:
                "বাংলাদেশের একজন প্রবীণ রাজনৈতিক ব্যক্তিত্ব। বর্ণাঢ্য রাজনৈতিক জীবনের অধিকারী জমির উদ্দিন সরকার ছিলেন ৫ বার নির্বাচিত সংসদ সদস্য, সাবেক বিএনপি সরকারে",
            category: ["রাজনীতি", "আইন"],
            image: "/placeholder-qlnal.png",
        },
        {
            id: 6,
            name: "শরিফুল ইসলাম",
            englishName: "Shoriful Islam",
            description:
                "একজন বাংলাদেশী ক্রিকেটার। তিনি ২০২০ সালের অনূর্ধ্ব ১৯ বিশ্বকাপ জয়ী বাংলাদেশ দলের সদস্য এবং বর্তমান বাংলাদেশ জাতীয় ক্রিকেট দলের অন্যতম বোলার।",
            category: ["খেলাধুলা"],
            image: "/placeholder-3vn05.png",
        },
        {
            id: 7,
            name: "কাজী শাহেদ আহমেদ",
            englishName: "Kazi Shahid Ahmed",
            description:
                "পঞ্চগড়ে পাথরে ফুল ফুটানো আর সমতল ভূমিতে চা উৎপাদন সাথে হারিয়ে যাওয়া পাটের ঐতিহ্যকে সমন্বিত করার মহাপ্রয়াসের কিংবদন্তি উদ্যোক্তা।",
            category: ["ব্যবসা"],
            image: "/placeholder-bdg0k.png",
        },
        {
            id: 8,
            name: "রোকেয়া বেগম",
            englishName: "Rokeya Begum",
            description:
                "পঞ্চগড়ের একমাত্র নারী মুক্তিযোদ্ধা। তিনি মাত্র ১৫ বছর বয়সে বাবার অনুপ্রেরণা ও বড় ভাইয়ের সহযোগিতায় অংশ নিয়েছিলেন মহান মুক্তিযুদ্ধে।",
            category: ["মুক্তিযোদ্ধা"],
            image: "/placeholder-6y0zn.png",
        },
        {
            id: 9,
            name: "ফিরোজ আল সাবাহ",
            englishName: "Firoz Al Sabah",
            description:
                "পঞ্চগড়ের স্বনামধন্য পেশাদার তরুণ আলোকচিত্রী। তিনি ছবি তুলেন পঞ্চগড়ের ভূ-প্রকৃতি, গ্রামীণ সৌন্দর্য ও বন্যজীবনের। বর্তমানে IUCN ও বন বিভাগ-এ বন্যপাখি সংরক্ষণ নিয়ে কাজ করছেন।",
            category: ["আলোকচিত্র"],
            image: "/placeholder-q8et5.png",
        },
        {
            id: 10,
            name: "ড. নাজমুল হক",
            englishName: "Dr. Nazmul Haque",
            description:
                "পঞ্চগড় জেলার ইতিহাস ও ঐতিহ্যের শীর্ষস্থানীয় গবেষক ও লেখক, বাংলাদেশের একমাত্র প্রস্তর জাদুঘর পঞ্চগড় রকস মিউজিয়ামের প্রতিষ্ঠাতা।",
            category: ["শিক্ষা", "সাহিত্য"],
            image: "/placeholder-xi919.png",
        },
        {
            id: 11,
            name: "আবুল হোসেন",
            englishName: "Abul Hossain",
            description:
                "বিশিষ্ট ক্রীড়া সংগঠক, পঞ্চগড়ের কিংবদন্তী, বাংলাদেশের ক্রীড়া জগতে এক উজ্জ্বল নক্ষত্র। একজন অসাধারণ ক্রিয়া শিক্ষক হিসেবে তাঁর ত্যাগী এবং একনিষ্ঠ প্রচেষ্টায় অর্জিত হয়।",
            category: ["খেলাধুলা", "শিক্ষা"],
            image: "/placeholder.svg?height=200&width=200&query=abul hossain sports organizer",
        },
        {
            id: 12,
            name: "খামির উদ্দীন প্রধান",
            englishName: "Khamir Uddin Prodhan",
            description:
                "পঞ্চগড় জেলার শ্রেষ্ঠ দানবীর, শিক্ষানুরাগী, বিশিষ্ট সমাজসেবী ব্যক্তিত্ব। এলাকার মানব ও সামাজিক উন্নয়নে তাঁর অবদান নিঃসন্দেহে কিংবদন্তি।",
            category: ["সমাজসেবা", "শিক্ষা"],
            image: "/placeholder.svg?height=200&width=200&query=khamir uddin prodhan philanthropist",
        },
    ]

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    const filteredPeople = people.filter((person) => {
        return (
            person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            person.englishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            person.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-10">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">পঞ্চগড় জেলার গুণীজন</h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            পঞ্চগড় জেলার বিশিষ্ট ব্যক্তিত্ব, যাঁরা তাঁদের অবদান দিয়ে জেলার গৌরব বাড়িয়েছেন এবং জাতীয় পর্যায়ে স্বীকৃতি পেয়েছেন
                        </p>
                    </div>

                    {/* Search */}
                    <div className="mb-8">
                        <div className="relative w-full max-w-md mx-auto">
                            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                                type="search"
                                placeholder="নাম বা বিবরণ দিয়ে খুঁজুন..."
                                className="pl-10 py-6 rounded-xl border-2 border-gray-200 focus:border-purple-500 shadow-sm"
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                        </div>
                    </div>

                    {/* People Grid */}
                    {filteredPeople.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredPeople.map((person, index) => (
                                <motion.div
                                    key={person.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex flex-col h-full">
                                        <div className="h-48 bg-gray-100 relative overflow-hidden">
                                            {person.image && (
                                                <img
                                                    src={person.image || "/placeholder.svg"}
                                                    alt={person.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            )}
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                                                <div className="flex flex-wrap gap-1">
                                                    {person.category.map((cat, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                                                        >
                                                            {cat}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 flex-grow">
                                            <h3 className="text-lg font-bold text-gray-800 mb-1">{person.name}</h3>
                                            <p className="text-sm text-gray-500 mb-3">{person.englishName}</p>
                                            <p className="text-gray-600 text-sm line-clamp-3">{person.description}</p>
                                        </div>

                                        <div className="p-4 pt-0">
                                            <button className="w-full flex items-center justify-center gap-1 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors text-sm font-medium">
                                                <span>বিস্তারিত দেখুন</span>
                                                <ChevronRight className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 bg-white rounded-xl shadow-sm">
                            <User className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-800 mb-1">কোন ফলাফল পাওয়া যায়নি</h3>
                            <p className="text-gray-500">আপনার অনুসন্ধান মাপদণ্ড পরিবর্তন করে আবার চেষ্টা করুন</p>
                        </div>
                    )}

                    {/* More Information */}
                    <div className="mt-12 bg-white rounded-xl shadow-sm p-6 text-center">
                        <h3 className="text-lg font-semibold mb-2">আরও গুণীজনের তথ্য</h3>
                        <p className="text-gray-600 mb-4">
                            পঞ্চগড় জেলার আরও বিশিষ্ট ব্যক্তিত্বদের তথ্য যোগ করা হচ্ছে। আপনি যদি কোন তথ্য যোগ করতে চান, তাহলে আমাদের সাথে যোগাযোগ করুন।
                        </p>
                        <div className="flex justify-center">
                            <Link href={`/contact-us`}>
                                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                                    তথ্য যোগ করুন
                                </button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

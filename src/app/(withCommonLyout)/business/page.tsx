"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Leaf,
  Mountain,
  Map,
  Scissors,
  Building,
  ArrowRight,
  DollarSign,
  TrendingUp,
  Lightbulb,
  Users,
  Calendar,
  Award,
  CheckCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  MapPin,
} from "lucide-react"

export default function BusinessPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>("tea")

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null)
    } else {
      setExpandedSection(section)
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <Image src="https://cdn.ittefaqbd.com/contents/cache/images/640x358x1/uploads/media/2023/07/13/c6d9972c8242ff840587502b4972ca2d-64af0ff6c7ccc.jpg?jadewits_media_id=116994" alt="পঞ্চগড়ের চা বাগান" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
          <div className="container mx-auto px-4 pb-8 md:pb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">পঞ্চগড়ের ব্যবসায়িক সম্ভাবনা</h1>
            <p className="text-white/90 text-sm md:text-base max-w-2xl">
            বাংলাদেশের সর্বউত্তরের জেলা পঞ্চগড়ে বিনিয়োগের অপার সম্ভাবনা রয়েছে — যেমন চা শিল্প, পাথর শিল্প, পর্যটনসহ আরও অনেক খাতে।
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-2 md:px-4 py-8 w-full">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-sm p-2 md:p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">পঞ্চগড়ে ব্যবসায়িক সম্ভাবনা</h2>
          <p className="text-gray-700 mb-4">
            পঞ্চগড় বাংলাদেশের সর্ব উত্তরের জেলা যা প্রাকৃতিক সম্পদে সমৃদ্ধ এবং বিভিন্ন শিল্পের জন্য অনন্য সুযোগ প্রদান করে। এখানে চা শিল্প, পাথর
            শিল্প, পর্যটন শিল্প এবং হস্তশিল্প সহ বিভিন্ন খাতে বিনিয়োগের সুযোগ রয়েছে। এই পৃষ্ঠায় আমরা পঞ্চগড়ের প্রধান ব্যবসায়িক সম্ভাবনা এবং
            সফল উদ্যোগ সম্পর্কে আলোচনা করব।
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-emerald-50 p-3 rounded-lg flex flex-col items-center text-center">
              <Leaf className="h-8 w-8 text-emerald-600 mb-2" />
              <h3 className="font-medium text-gray-800">চা শিল্প</h3>
            </div>
            <div className="bg-amber-50 p-3 rounded-lg flex flex-col items-center text-center">
              <Mountain className="h-8 w-8 text-amber-600 mb-2" />
              <h3 className="font-medium text-gray-800">পাথর শিল্প</h3>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg flex flex-col items-center text-center">
              <Map className="h-8 w-8 text-green-600 mb-2" />
              <h3 className="font-medium text-gray-800">পর্যটন শিল্প</h3>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg flex flex-col items-center text-center">
              <Scissors className="h-8 w-8 text-purple-600 mb-2" />
              <h3 className="font-medium text-gray-800">হস্তশিল্প</h3>
            </div>
          </div>
        </div>

        {/* Tea Industry Section */}
        <div className=" mb-4 md:mb-8">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <button
              onClick={() => toggleSection("tea")}
              className="w-full flex items-center justify-between p-2 md:p-5 bg-emerald-600 text-white md:cursor-default"
            >
              <div className="flex items-center">
                <Leaf className="h-6 w-6 mr-3" />
                <h2 className="text-base md:text-2xl font-semibold md:font-bold">চা শিল্প (Tea Industry)</h2>
              </div>
              <div className="md:hidden">
                {expandedSection === "tea" ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </div>
            </button>

            <div
              className={`p-6 ${expandedSection === "tea" || window.innerWidth >= 768 ? "block" : "hidden md:block"}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Potential */}
                <div className="bg-emerald-50 rounded-lg p-5">
                  <div className="flex items-center mb-3">
                    <TrendingUp className="h-6 w-6 text-emerald-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-800">সম্ভাবনা</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">পঞ্চগড় বাংলাদেশের একমাত্র জেলা যেখান থেকে চা উৎপাদন করা হয় সিলেটের বাইরে।</p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">জলবায়ু, মাটি এবং উচ্চতা চা চাষের জন্য উপযুক্ত।</p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">ছোট চা চাষি (small tea growers) সংখ্যা দিন দিন বাড়ছে।</p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">পঞ্চগড় চা এখন দেশজুড়ে জনপ্রিয়।</p>
                    </li>
                  </ul>
                </div>

                {/* Business Ideas */}
                <div className="bg-white border border-emerald-100 rounded-lg p-5">
                  <div className="flex items-center mb-3">
                    <Lightbulb className="h-6 w-6 text-emerald-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-800">ব্যবসা আইডিয়া</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="border-b border-gray-100 pb-2">
                      <h4 className="font-medium text-emerald-700">নিজস্ব চা বাগান শুরু করা</h4>
                      <p className="text-sm text-gray-600">জমি থাকলে এই ব্যবসা লাভজনক।</p>
                    </li>
                    <li className="border-b border-gray-100 pb-2">
                      <h4 className="font-medium text-emerald-700">চা প্রক্রিয়াকরণ কারখানা</h4>
                      <p className="text-sm text-gray-600">চা পাতা শুকানো, মোড়কজাতকরণ, ব্র্যান্ড তৈরি।</p>
                    </li>
                    <li className="border-b border-gray-100 pb-2">
                      <h4 className="font-medium text-emerald-700">চা বিক্রির দোকান বা অনলাইন ব্র্যান্ড</h4>
                      <p className="text-sm text-gray-600">"Tetulia Tea", "Panchagarh Gold" ইত্যাদি নামে ব্র্যান্ড করা যায়।</p>
                    </li>
                    <li>
                      <h4 className="font-medium text-emerald-700">চা পর্যটন (Tea Tourism)</h4>
                      <p className="text-sm text-gray-600">চা বাগানভিত্তিক রিসোর্ট বা ট্যুর প্যাকেজ।</p>
                    </li>
                  </ul>
                </div>

                {/* Investment */}
                <div className="bg-white border border-emerald-100 rounded-lg p-5">
                  <div className="flex items-center mb-3">
                    <DollarSign className="h-6 w-6 text-emerald-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-800">পুঁজি</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-medium text-gray-800">ছোট বাগানের জন্য</h4>
                      <p className="text-lg font-bold text-emerald-700">২-৫ লাখ টাকা</p>
                      <p className="text-xs text-gray-500">জমি ভাড়া/ক্রয়, চারা, সরঞ্জাম, শ্রমিক খরচ</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-medium text-gray-800">প্রক্রিয়াকরণ ইউনিটের জন্য</h4>
                      <p className="text-lg font-bold text-emerald-700">১০-১৫ লাখ টাকা+</p>
                      <p className="text-xs text-gray-500">মেশিনারি, ফ্যাক্টরি স্থাপন, প্যাকেজিং সরঞ্জাম</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-medium text-gray-800">চা পর্যটন ব্যবসার জন্য</h4>
                      <p className="text-lg font-bold text-emerald-700">৮-২০ লাখ টাকা+</p>
                      <p className="text-xs text-gray-500">আবাসন, পরিবহন, মার্কেটিং</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tea Garden Image */}
              <div className="mt-6 relative h-60 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="https://cdn.bdnews24.com/bdnews24/media/bdnews24/2022-08/53b1677b-a0c8-4d01-b751-c8a4489f7dc0/panchagarh_tea_240822_01.jpg"
                  alt="পঞ্চগড়ের চা বাগানে কাজ করছেন শ্রমিকরা"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3">
                  <p className="text-white text-sm">পঞ্চগড়ের চা বাগানে কাজ করছেন শ্রমিকরা</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stone Industry Section */}
        <div className=" mb-4 md:mb-8">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <button
              onClick={() => toggleSection("stone")}
              className="w-full flex items-center justify-between p-2 md:p-5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white md:cursor-default"
            >
              <div className="flex items-center">
                <Mountain className="h-6 w-6 mr-3" />
                <h2 className="text-base md:text-2xl font-semibold md:font-bold">পাথর শিল্প (Stone Industry)</h2>
              </div>
              <div className="md:hidden">
                {expandedSection === "stone" ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </div>
            </button>

            <div
              className={`p-6 ${expandedSection === "stone" || window.innerWidth >= 768 ? "block" : "hidden md:block"}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Potential */}
                <div className="bg-amber-50 rounded-lg p-5">
                  <div className="flex items-center mb-3">
                    <TrendingUp className="h-6 w-6 text-amber-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-800">সম্ভাবনা</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">পঞ্চগড় ও তেঁতুলিয়ায় প্রচুর পরিমাণ প্রাকৃতিক পাথর মজুত।</p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">নদী থেকে পাথর উত্তোলন হয় – এই পাথর নির্মাণ কাজে ব্যবহৃত হয়।</p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">দেশের বিভিন্ন স্থানে পঞ্চগড়ের পাথরের চাহিদা আছে।</p>
                    </li>
                  </ul>
                </div>

                {/* Business Ideas */}
                <div className="bg-white border border-amber-100 rounded-lg p-5">
                  <div className="flex items-center mb-3">
                    <Lightbulb className="h-6 w-6 text-amber-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-800">ব্যবসা আইডিয়া</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="border-b border-gray-100 pb-2">
                      <h4 className="font-medium text-green-600">পাথর উত্তোলন ও সরবরাহ</h4>
                      <p className="text-sm text-gray-600">সরাসরি নির্মাণ প্রতিষ্ঠান বা ঠিকাদারের কাছে বিক্রি।</p>
                    </li>
                    <li className="border-b border-gray-100 pb-2">
                      <h4 className="font-medium text-green-600">পাথর কাটা/ক্রাশিং কারখানা</h4>
                      <p className="text-sm text-gray-600">পাথর ছোট করে নির্মাণে ব্যবহারের উপযোগী করা।</p>
                    </li>
                    <li className="border-b border-gray-100 pb-2">
                      <h4 className="font-medium text-green-600">ট্রাক ও ট্রান্সপোর্ট ব্যবসা</h4>
                      <p className="text-sm text-gray-600">পাথর পরিবহনের জন্য।</p>
                    </li>
                    <li>
                      <h4 className="font-medium text-green-600">পাথর প্রক্রিয়াজাত করে টাইলস/ডেকোরেটিভ স্টোন তৈরি</h4>
                      <p className="text-sm text-gray-600">অ্যাডভান্সড লেভেল ব্যবসা।</p>
                    </li>
                  </ul>
                </div>

                {/* Investment */}
                <div className="bg-white border border-amber-100 rounded-lg p-5">
                  <div className="flex items-center mb-3">
                    <DollarSign className="h-6 w-6 text-amber-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-800">পুঁজি</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-medium text-gray-800">ছোট স্কেলে সরবরাহ</h4>
                      <p className="text-lg font-bold text-green-600">৩-৫ লাখ টাকা</p>
                      <p className="text-xs text-gray-500">লাইসেন্স, শ্রমিক, পরিবহন খরচ</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-medium text-gray-800">পাথর ক্রাশিং ইউনিট</h4>
                      <p className="text-lg font-bold text-green-600">১৫-২৫ লাখ টাকা+</p>
                      <p className="text-xs text-gray-500">মেশিনারি, জায়গা, শ্রমিক, পরিবহন</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-medium text-gray-800">ট্রান্সপোর্ট ব্যবসা</h4>
                      <p className="text-lg font-bold text-green-600">১০-২০ লাখ টাকা</p>
                      <p className="text-xs text-gray-500">ট্রাক/পিকআপ ক্রয়, রক্ষণাবেক্ষণ, জ্বালানি</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stone Industry Image */}
              <div className="mt-6 relative h-60 md:h-80 rounded-lg overflow-hidden">
                <Image src="https://media.prothomalo.com/prothomalo-bangla%2F2025-01-23%2Fk4nvbyup%2F%E0%A7%AC.jpg?rect=0%2C350%2C6720%2C3780" alt="পঞ্চগড়ে পাথর ক্রাশিং " fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3">
                  <p className="text-white text-sm">পঞ্চগড়ে পাথর ক্রাশিং </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tourism Industry Section */}
        <div className=" mb-4 md:mb-8">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <button
              onClick={() => toggleSection("tourism")}
              className="w-full flex items-center justify-between p-2 md:p-5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white md:cursor-default"
            >
              <div className="flex items-center">
                <Map className="h-6 w-6 mr-3" />
                <h2 className="text-base md:text-2xl font-semibold md:font-bold">পর্যটন শিল্প (Tourism Industry)</h2>
              </div>
              <div className="md:hidden">
                {expandedSection === "tourism" ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </div>
            </button>

            <div
              className={`p-6 ${expandedSection === "tourism" || window.innerWidth >= 768 ? "block" : "hidden md:block"}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Potential */}
                <div className="bg-blue-50 rounded-lg p-5">
                  <div className="flex items-center mb-3">
                    <TrendingUp className="h-6 w-6 text-green-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-800">সম্ভাবনা</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">তেঁতুলিয়া থেকে হিমালয় দেখা যায় – এটি বাংলাদেশের একমাত্র হিমালয় ভিউ পয়েন্ট!</p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">নদী, পাহাড়, চা বাগান, ঐতিহাসিক স্থান – সব আছে এক জেলায়।</p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">স্থানীয় ও বিদেশি পর্যটকদের আকর্ষণ বাড়ছে।</p>
                    </li>
                  </ul>
                </div>

                {/* Business Ideas */}
                <div className="bg-white border border-blue-100 rounded-lg p-5">
                  <div className="flex items-center mb-3">
                    <Lightbulb className="h-6 w-6 text-green-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-800">ব্যবসা আইডিয়া</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="border-b border-gray-100 pb-2">
                      <h4 className="font-medium text-green-600">গেস্ট হাউস বা রিসোর্ট</h4>
                      <p className="text-sm text-gray-600">পর্যটকদের থাকার জন্য।</p>
                    </li>
                    <li className="border-b border-gray-100 pb-2">
                      <h4 className="font-medium text-green-600">স্থানীয় গাইড সার্ভিস</h4>
                      <p className="text-sm text-gray-600">ট্যুর পরিকল্পনা, গাইড সরবরাহ।</p>
                    </li>
                    <li className="border-b border-gray-100 pb-2">
                      <h4 className="font-medium text-green-600">স্থানীয় খাবারের রেস্টুরেন্ট/ক্যাফে</h4>
                      <p className="text-sm text-gray-600">পর্যটকদের আকৃষ্ট করতে পারে।</p>
                    </li>
                    <li>
                      <h4 className="font-medium text-green-600">স্মারক ও হস্তশিল্প বিক্রির দোকান</h4>
                      <p className="text-sm text-gray-600">পর্যটকদের জন্য সুভেনির।</p>
                    </li>
                  </ul>
                </div>

                {/* Investment */}
                <div className="bg-white border border-blue-100 rounded-lg p-5">
                  <div className="flex items-center mb-3">
                    <DollarSign className="h-6 w-6 text-green-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-800">পুঁজি</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-medium text-gray-800">হোমস্টে</h4>
                      <p className="text-lg font-bold text-green-600">২-৫ লাখ টাকা</p>
                      <p className="text-xs text-gray-500">বাড়ি সংস্কার, আসবাবপত্র, মার্কেটিং</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-medium text-gray-800">ছোট রিসোর্ট/ক্যাফে</h4>
                      <p className="text-lg font-bold text-green-600">৮-২০ লাখ টাকা+</p>
                      <p className="text-xs text-gray-500">জমি/ভবন, আসবাবপত্র, কর্মচারী, মার্কেটিং</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-medium text-gray-800">ট্যুর গাইড সার্ভিস</h4>
                      <p className="text-lg font-bold text-green-600">১-৩ লাখ টাকা</p>
                      <p className="text-xs text-gray-500">প্রশিক্ষণ, পরিবহন, মার্কেটিং</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tourism Image */}
              <div className="mt-6 relative h-60 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="https://www.dhakatimes24.com/assets/news_photos/2016/10/23/image-4354.jpg"
                  alt="তেঁতুলিয়া থেকে হিমালয় পর্বতমালার দৃশ্য"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3">
                  <p className="text-white text-sm">তেঁতুলিয়া থেকে হিমালয় পর্বতমালার দৃশ্য</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Handicrafts Section */}
        <div className=" mb-4 md:mb-8">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <button
              onClick={() => toggleSection("handicrafts")}
              className="w-full flex items-center justify-between p-2 md:p-5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white md:cursor-default"
            >
              <div className="flex items-center">
                <Scissors className="h-6 w-6 mr-3" />
                <h2 className="text-base md:text-2xl font-semibold md:font-bold">
                  হস্তশিল্প ও ক্ষুদ্র শিল্প (Handicrafts & Cottage Industries)
                </h2>
              </div>
              <div className="md:hidden">
                {expandedSection === "handicrafts" ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </div>
            </button>

            <div
              className={`p-6 ${expandedSection === "handicrafts" || window.innerWidth >= 768 ? "block" : "hidden md:block"}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Potential */}
                <div className="bg-purple-50 rounded-lg p-5">
                  <div className="flex items-center mb-3">
                    <TrendingUp className="h-6 w-6 text-purple-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-800">সম্ভাবনা</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">
                        পঞ্চগড়ে অনেক নারী এবং গ্রামীণ পরিবার ঐতিহ্যবাহী হস্তশিল্পে পারদর্শী (তাঁতের কাপড়, বাঁশের কাজ, পাট পণ্য, কাঠের খুদ কাজ
                        ইত্যাদি)।
                      </p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">বিদেশে এবং শহরে এগুলোর ভালো চাহিদা আছে।</p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">ই-কমার্সের মাধ্যমে দেশজুড়ে পণ্য বিক্রি করা যায়।</p>
                    </li>
                  </ul>
                </div>

                {/* Business Ideas */}
                <div className="bg-white border border-purple-100 rounded-lg p-5">
                  <div className="flex items-center mb-3">
                    <Lightbulb className="h-6 w-6 text-purple-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-800">ব্যবসা আইডিয়া</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="border-b border-gray-100 pb-2">
                      <h4 className="font-medium text-green-600">হস্তশিল্প উৎপাদন কেন্দ্র</h4>
                      <p className="text-sm text-gray-600">কারিগরদের নিয়োগ করে উৎপাদন।</p>
                    </li>
                    <li className="border-b border-gray-100 pb-2">
                      <h4 className="font-medium text-green-600">হস্তশিল্প বিক্রির দোকান</h4>
                      <p className="text-sm text-gray-600">বাজারে বা অনলাইনে।</p>
                    </li>
                    <li className="border-b border-gray-100 pb-2">
                      <h4 className="font-medium text-green-600">অনলাইন স্টোর (Facebook/Instagram/Website)</h4>
                      <p className="text-sm text-gray-600">উদ্যোক্তা হতে পারেন।</p>
                    </li>
                    <li>
                      <h4 className="font-medium text-green-600">নারীদের প্রশিক্ষণ কেন্দ্র</h4>
                      <p className="text-sm text-gray-600">এনজিও বা সরকারি সহায়তা নিয়ে চালাতে পারেন।</p>
                    </li>
                  </ul>
                </div>

                {/* Investment */}
                <div className="bg-white border border-purple-100 rounded-lg p-5">
                  <div className="flex items-center mb-3">
                    <DollarSign className="h-6 w-6 text-purple-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-800">পুঁজি</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-medium text-gray-800">ক্ষুদ্র উৎপাদন ইউনিট</h4>
                      <p className="text-lg font-bold text-green-600">১-৩ লাখ টাকা</p>
                      <p className="text-xs text-gray-500">কাঁচামাল, সরঞ্জাম, কারিগর</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-medium text-gray-800">বিক্রয় কেন্দ্র</h4>
                      <p className="text-lg font-bold text-green-600">৩-৫ লাখ টাকা</p>
                      <p className="text-xs text-gray-500">দোকান ভাড়া, ইনভেন্টরি, সাজসজ্জা</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-medium text-gray-800">অনলাইন ব্যবসা</h4>
                      <p className="text-lg font-bold text-green-600">৫০ হাজার - ১ লাখ টাকা</p>
                      <p className="text-xs text-gray-500">ওয়েবসাইট, ফটোগ্রাফি, প্রাথমিক ইনভেন্টরি</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Handicrafts Image */}
              <div className="mt-6 relative h-60 md:h-80 rounded-lg overflow-hidden">
                <Image src="https://sokalersomoy.online/storage/2023/November/tQwnZoyQKo59yQre9Wsl203K4XvPJ1cNjWJeHOcU.jpg" alt="পঞ্চগড়ের হস্তশিল্প পণ্য" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3">
                  <p className="text-white text-sm">পঞ্চগড়ের হস্তশিল্প পণ্য</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories Section */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">সফল ব্যবসায়িক উদ্যোগ</h2>

        {/* Gemcon Limited */}
        <div className="mb-8 bg-white rounded-xl shadow-sm overflow-hidden">
          <div className=" p-1 py-3 md:p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3">
                <div className="flex items-center mb-4">
                  <Building className="h-6 w-6 text-gray-700 mr-2" />
                  <h3 className="text-xl font-bold text-gray-800">জেমকন লিমিটেড – Gemcon Limited</h3>
                </div>
                <div className="prose prose-emerald max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    এসপিসি বৈদ্যুতিক খুঁটি নির্মাণ শিল্পের প্রবর্তক জেমকন লিমিটেড পঞ্চগড়ে ব্যক্তি মালিকানায় স্থাপিত একটি অন্যতম
                    শিল্প-প্রতিষ্ঠান। জেমকন লিমিটেড-এর হাত ধরেই পঞ্চগড়ে নুড়িপাথর বাণিজ্যিকভাবে ব্যবহার করে শিল্প-কারখানা নির্মাণ এবং চা
                    উৎপাদনে ব্যাপক বিনিয়োগ শুরু হলে স্বল্পোন্নত পঞ্চগড় জেলার আর্থসামাজিক উন্নয়নের মূল ভিত্তি গড়ে ওঠে।
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    জনাব কাজী শাহেদ আহমেদ-এর মালিকানাধীন জেমকন গ্রুপ ১৯৯৩ সালে পঞ্চগড়ে জেমকন লিমিটেড প্রতিষ্ঠা করে। বৈদ্যুতিক খুঁটি
                    নির্মাণে কাঁচামালের সহজলভ্যতা, দক্ষ শ্রমিক, জার্মানি নির্মাণ কৌশল এবং বাংলাদেশ সরকার জেমকন লিমিটেডের উৎপাদিত বৈদ্যুতিক
                    খুঁটির অন্যতম ক্রেতা হবার করণে – খুব অল্প সময়ে জেমকন লিমিটেড একটি সফল উদ্যোগে পরিণত হয়।
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-medium text-gray-800 text-sm">প্রতিষ্ঠাকাল</h4>
                    <p className="text-gray-700 flex items-center">
                      <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                      ১৯৯৩
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-medium text-gray-800 text-sm">অবস্থান</h4>
                    <p className="text-gray-700 flex items-center">
                      <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                      ধাক্কামারা, পঞ্চগড় সদর
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-medium text-gray-800 text-sm">আয়তন</h4>
                    <p className="text-gray-700">৩৫ একর</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-medium text-gray-800 text-sm">কর্মসংস্থান</h4>
                    <p className="text-gray-700 flex items-center">
                      <Users className="h-4 w-4 text-gray-500 mr-1" />
                      ১৫০০+ জন
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3">
                <div className="relative h-60 md:h-full rounded-lg overflow-hidden">
                  <Image src="https://panchagarh.info/wp-content/uploads/2023/04/Gemcon-Limited.jpg" alt="জেমকন লিমিটেড" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kazi & Kazi Tea Estate */}
        <div className="mb-8 bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-2 py-3 md:p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3">
                <div className="flex items-center mb-4">
                  <Leaf className="h-6 w-6 text-emerald-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-800">কাজী এন্ড কাজী টি এস্টেট</h3>
                </div>
                <div className="prose prose-emerald max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    কাজী এন্ড কাজী টি এস্টেট লিমিটেড (Kazi & Kazi Tea Estate Ltd.) বাংলাদেশের প্রথম আন্তর্জাতিকভাবে সার্টিফায়েড অর্গানিক
                    চা উৎপাদনকারী প্রতিষ্ঠান, যা ২০০০ সালে কাজী শহীদ আহমেদের নেতৃত্বে প্রতিষ্ঠিত হয়। প্রতিষ্ঠানটির চা বাগান পঞ্চগড় জেলার
                    তেঁতুলিয়া উপজেলায় অবস্থিত, যা দেশের সর্বউত্তরের একটি অঞ্চল।
                  </p>

                  <h4 className="font-bold text-gray-800 mt-4">পণ্য ও উৎপাদন</h4>
                  <p className="text-gray-700 leading-relaxed">
                    কাজী এন্ড কাজী টি এস্টেট সম্পূর্ণ অর্গানিক পদ্ধতিতে চা উৎপাদন করে, যেখানে কোনো রাসায়নিক সার বা কীটনাশক ব্যবহার করা হয় না।
                    তারা প্রাকৃতিক উপায়ে কীটনাশক তৈরি করে এবং জৈব সার ব্যবহার করে মাটির উর্বরতা বজায় রাখে।
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-emerald-50 p-3 rounded-lg">
                    <h4 className="font-medium text-emerald-800 text-sm">কোম্পানি সম্পর্কে</h4>
                    <ul className="space-y-1 mt-2">
                      <li className="text-gray-700 text-sm flex items-start">
                        <span className="font-medium mr-2 flex-shrink-0">প্রতিষ্ঠাতা:</span>
                        <span>কাজী শহীদ আহমেদ</span>
                      </li>
                      <li className="text-gray-700 text-sm flex items-start">
                        <span className="font-medium mr-2 flex-shrink-0">সিইও:</span>
                        <span>সৈয়দ শোয়েব আহমেদ</span>
                      </li>
                      <li className="text-gray-700 text-sm flex items-start">
                        <span className="font-medium mr-2 flex-shrink-0">সদর দপ্তর:</span>
                        <span>হাউস ৪৪, রোড ১৬ (পুরাতন ২৭), ধানমন্ডি, ঢাকা ১২০৯</span>
                      </li>
                      <li className="text-gray-700 text-sm flex items-start">
                        <span className="font-medium mr-2 flex-shrink-0">প্রতিষ্ঠাকাল:</span>
                        <span>২০০০</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-emerald-50 p-3 rounded-lg">
                    <h4 className="font-medium text-emerald-800 text-sm">পণ্যসমূহ</h4>
                    <ul className="mt-2 space-y-1">
                      <li className="text-gray-700 text-sm flex items-center">
                        <CheckCircle className="h-3 w-3 text-emerald-600 mr-1.5" />
                        অর্গানিক ব্ল্যাক টি
                      </li>
                      <li className="text-gray-700 text-sm flex items-center">
                        <CheckCircle className="h-3 w-3 text-emerald-600 mr-1.5" />
                        অর্গানিক গ্রিন টি
                      </li>
                      <li className="text-gray-700 text-sm flex items-center">
                        <CheckCircle className="h-3 w-3 text-emerald-600 mr-1.5" />
                        অর্গানিক মসলা চা
                      </li>
                      <li className="text-gray-700 text-sm flex items-center">
                        <CheckCircle className="h-3 w-3 text-emerald-600 mr-1.5" />
                        তুলসী চা
                      </li>
                      <li className="text-gray-700 text-sm flex items-center">
                        <CheckCircle className="h-3 w-3 text-emerald-600 mr-1.5" />
                        জ্যাসমিন গ্রিন টি
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-3 bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-800 text-sm">আন্তর্জাতিক স্বীকৃতি</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-white text-green-600 text-xs px-2 py-1 rounded border border-blue-200 flex items-center">
                      <Award className="h-3 w-3 mr-1" />
                      Rainforest Alliance
                    </span>
                    <span className="bg-white text-green-600 text-xs px-2 py-1 rounded border border-blue-200 flex items-center">
                      <Award className="h-3 w-3 mr-1" />
                      Fair Trade
                    </span>
                    <span className="bg-white text-green-600 text-xs px-2 py-1 rounded border border-blue-200 flex items-center">
                      <Award className="h-3 w-3 mr-1" />
                      USDA Organic
                    </span>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3">
                <div className="relative h-60 md:h-full rounded-lg overflow-hidden">
                  <Image src="https://live.staticflickr.com/2809/11666603885_15f8e756bf_b.jpg" alt="কাজী এন্ড কাজী টি এস্টেট" fill className="object-cover" />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-bold text-gray-800">সামাজিক উদ্যোগ: কাজী শহীদ ফাউন্ডেশন (KSF)</h4>
              <p className="text-gray-700 mt-2">
                কাজী শহীদ ফাউন্ডেশন (KSF) স্থানীয় জনগণের জন্য বিভিন্ন সামাজিক উন্নয়নমূলক কার্যক্রম পরিচালনা করে, যার মধ্যে রয়েছে:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
                <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors">
                  <h5 className="font-medium text-emerald-700 mb-1">গবাদি পশু ঋণ কর্মসূচি</h5>
                  <p className="text-xs text-gray-600">
                    স্থানীয় নারীদের গরু ঋণ দেওয়া হয়, যা থেকে প্রাপ্ত দুধ ও গোবরের মাধ্যমে ঋণ পরিশোধ করা যায়।
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors">
                  <h5 className="font-medium text-emerald-700 mb-1">শিক্ষা ও স্বাস্থ্যসেবা</h5>
                  <p className="text-xs text-gray-600">স্থানীয় শিশুদের জন্য শিক্ষা কর্মসূচি এবং স্বাস্থ্যসেবা প্রদান করা হয়।</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors">
                  <h5 className="font-medium text-emerald-700 mb-1">জৈব কৃষি প্রশিক্ষণ</h5>
                  <p className="text-xs text-gray-600">কৃষকদের জৈব কৃষি পদ্ধতি সম্পর্কে প্রশিক্ষণ দেওয়া হয়।</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="p-6 md:p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">পঞ্চগড়ে বিনিয়োগ করুন</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              পঞ্চগড়ের অপার সম্ভাবনাময় ব্যবসায়িক খাতে বিনিয়োগ করে আপনার ব্যবসায়িক সাফল্য অর্জন করুন এবং স্থানীয় অর্থনীতির উন্নয়নে অবদান রাখুন।
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
              
                href="https://www.panchagarh.gov.bd/bn/site/officer_list/%E0%A6%AE%E0%A7%8B%E0%A6%B9%E0%A6%BE%E0%A6%AE%E0%A7%8D%E0%A6%AE%E0%A6%A6-%E0%A6%B8%E0%A7%8B%E0%A6%B9%E0%A7%87%E0%A6%B2-%E0%A6%B0%E0%A6%BE%E0%A6%A8%E0%A6%BE"
                className="bg-white text-emerald-700 hover:bg-emerald-50 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
              >
                <Building className="h-5 w-5 mr-2" />
                জেলা বাণিজ্য কেন্দ্রের সাথে যোগাযোগ করুন
              </Link>
              {/* <Link
                href="/business-guide"
                className="bg-emerald-700 text-white hover:bg-emerald-800 border border-emerald-500 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
              >
                <ArrowRight className="h-5 w-5 mr-2" />
                বিস্তারিত ব্যবসায়িক গাইড দেখুন
              </Link> */}
            </div>
          </div>
        </div>

      
      </div>
    </div>
  )
}

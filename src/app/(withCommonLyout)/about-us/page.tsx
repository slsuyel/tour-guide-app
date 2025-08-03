"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Clock, Calendar, Users, Building, BookOpen, Map, Landmark, Navigation } from "lucide-react"
import TouristAttractions from "@/components/Pages/HomePage/tourist-attractions"

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"geography" | "history" | "statistics">("geography")

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <Image src="/panchagarh-landscape.png" alt="পঞ্চগড় জেলার প্রাকৃতিক দৃশ্য" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
          <div className="container mx-auto px-4 pb-8 md:pb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">পঞ্চগড় জেলা</h1>
            <p className="text-white/90 text-sm md:text-base max-w-2xl">
              ২৬-২০ উত্তর অক্ষাংশে এবং ৮৮.৩৪ পূর্ব দ্রাঘিমাংশে অবস্থিত বাংলাদেশের উত্তরতম জেলা
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto mb-6 border-b scrollbar-hide">
          <button
            onClick={() => setActiveTab("geography")}
            className={`px-4 py-2 font-medium whitespace-nowrap text-sm md:text-base ${activeTab === "geography"
                ? "text-emerald-600 border-b-2 border-emerald-600"
                : "text-gray-600 hover:text-emerald-600"
              }`}
          >
            <MapPin className="inline-block mr-1 h-4 w-4" />
            ভৌগলিক পরিচিতি
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`px-4 py-2 font-medium whitespace-nowrap text-sm md:text-base ${activeTab === "history"
                ? "text-emerald-600 border-b-2 border-emerald-600"
                : "text-gray-600 hover:text-emerald-600"
              }`}
          >
            <Clock className="inline-block mr-1 h-4 w-4" />
            জেলার পটভূমি
          </button>
          <button
            onClick={() => setActiveTab("statistics")}
            className={`px-4 py-2 font-medium whitespace-nowrap text-sm md:text-base ${activeTab === "statistics"
                ? "text-emerald-600 border-b-2 border-emerald-600"
                : "text-gray-600 hover:text-emerald-600"
              }`}
          >
            <Users className="inline-block mr-1 h-4 w-4" />
            এক নজরে পঞ্চগড়
          </button>
        </div>

        {/* Geography Content */}
        {activeTab === "geography" && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">ভৌগলিক পরিচিতি</h2>
                <div className="prose prose-emerald max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    ২৬-২০ উত্তর অক্ষাংশে এবং ৮৮.৩৪ পূর্ব দ্রাঘিমাংশে অবস্থিত পঞ্চগড় জেলার ভৌগলিক অবস্থান তাৎপর্যপূর্ণ। ১৯৪৭ সালে স্যার সিরিল
                    র‌্যাডক্লিফ কর্তৃক নির্দেশিত এই জেলার সীমান্ত রেখা অত্যন্ত আঁকাবাঁকা ও ভংগুর। পঞ্চগড় জেলার তিন দিকেই ভারতীয় সীমান্ত। পঞ্চগড়
                    জেলার সাথে ভারতীয় সীমান্ত এলাকার দৈর্ঘ্য ২৮৬.৮৭ কিলোমিটার।
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    এ জেলার উত্তরে ভারতের দার্জিলিং ও জলপাইগুঁড়ি জেলা, উত্তর পূর্ব ও পূর্বে জলপাইগুঁড়ি ও কুচবিহার জেলা এবং বাংলাদেশের নীলফামারী
                    জেলা, পশ্চিমে ভারতে পুর্নিয়া ও উত্তর দিনাজপুর এবং দক্ষিণ ও দক্ষিণ পূর্বে ঠাকারগাঁও ও দিনাজপুর জেলা অবস্থিত।
                  </p>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Map className="h-5 w-5 mr-2 text-emerald-600" />
                  পঞ্চগড় জেলার মানচিত্র
                </h3>
                <div className="aspect-video w-full relative rounded-lg overflow-hidden border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228522.5866946525!2d88.41290037866283!3d26.33307358053752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4685b4e7b069d%3A0x1f1e9d7c1734ed5!2sPanchagarh%20District!5e0!3m2!1sen!2sbd!4v1715198400000!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="পঞ্চগড় জেলার মানচিত্র"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Border Information */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Navigation className="h-5 w-5 mr-2 text-emerald-600" />
                  সীমান্ত এলাকা
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-medium text-emerald-800 mb-2">উত্তরে</h4>
                    <p className="text-gray-700">ভারতের দার্জিলিং ও জলপাইগুঁড়ি জেলা</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-medium text-emerald-800 mb-2">উত্তর পূর্ব ও পূর্বে</h4>
                    <p className="text-gray-700">জলপাইগুঁড়ি, কুচবিহার এবং বাংলাদেশের নীলফামারী জেলা</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-medium text-emerald-800 mb-2">পশ্চিমে</h4>
                    <p className="text-gray-700">ভারতের পুর্নিয়া ও উত্তর দিনাজপুর</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-medium text-emerald-800 mb-2">দক্ষিণ ও দক্ষিণ পূর্বে</h4>
                    <p className="text-gray-700">ঠাকারগাঁও ও দিনাজপুর জেলা</p>
                  </div>
                </div>
                <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700 flex items-center">
                    <span className="font-medium text-blue-700 mr-2">ভারতীয় সীমান্ত এলাকার দৈর্ঘ্য:</span>
                    <span>২৮৬.৮৭ কিলোমিটার</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* History Content */}
        {activeTab === "history" && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">জেলার পটভূমি</h2>
                <div className="prose prose-emerald max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    বহু আর্বতন ও বিবর্তনের মধ্যদিয়ে পঞ্চগড় জেলার অগ্রযাত্রা শুরু হয়েছে এবং এখনো তা অব্যাহত রয়েছে। পঞ্চগড় নামকরনেও রয়েছে
                    এক ঐতিহ্যপূর্ণ ইতিহাস। পঞ্চগড় নামকরণ সমন্ধে কেহ কেহ মনে করেন যে, এ অঞ্চলটি অতি প্রাচীনকালে 'পুন্ডুনগর রাজ্যের অর্ন্তগত
                    'পঞ্চনগরী' নামে একটি অঞ্চল ছিল। কালক্রমে পঞ্চনগরী 'পঞ্চগড়' নামে আত্মপ্রকাশ করে।
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    'পঞ্চ' (পাঁচ) গড়ের সমাহার 'পঞ্চগড়' নামটির অপভ্রাংশ 'পঞ্চগড়' দীর্ঘকাল এই জনপদে প্রচলিত ছিল। কিন্তু এই অঞ্চলের নাম যে,
                    পঞ্চগড়ই ছিল সে ব্যাপারে কোন সন্দেহ থাকতে পারে না। বস্ত্ততঃ ভারতীয় উপমহাদেশে 'পঞ্চ' শব্দটি বিভিন্ন স্থানের নামের সাথে
                    যুক্ত হয়েছে। যেমন- পঞ্চনদ, পঞ্চবটি, পঞ্চনগরী পঞ্চগৌড় ইত্যাদি। সুতরাং পঞ্চগৌড়ের একটি অংশ হিসেবে প্রাকৃত ভাষার বৈশিষ্ট্য
                    অনুযায়ী পঞ্চগড়ের নামকরনের সম্ভাবনা থকে যায়। অর্থ্যাৎ পঞ্চগৌড় &gt; পঞ্চগোড়&gt;পঞ্চগড়।
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    অবশ্য বহুল প্রচলিত মত এই যে, এই অঞ্চলের পাঁচটি গড়ের সুস্পষ্ট অবস্থানের কারণেই পঞ্চগড় নামটির উৎপত্তি। গড়গুলো হচ্ছে,
                    ভিতরগড়, মীরগড়, হোসেনগড়, রাজনগড় ও দেবেনগড়।
                  </p>
                </div>
              </div>
            </div>

            {/* Historical Timeline */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-emerald-600" />
                  ঐতিহাসিক পটভূমি
                </h3>
                <div className="space-y-4">
                  <div className="relative pl-8 pb-4 border-l-2 border-emerald-200">
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-emerald-500"></div>
                    <h4 className="font-medium text-emerald-800">প্রাচীন যুগ</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      পঞ্চগড় একটি প্রাচীন জনপদ। প্রাচীন ও মধ্য যুগে এই ভূখন্ডের পাশেই ছিল মগধ, মিথিলা, গৌর, নেপাল, ভূটান, সিকিম ও আসাম
                      রাজ্যের সীমান্ত। আধুনিককালের মত অতীত কালেও জনপদটি ছিল সীমান্ত অঞ্চল।
                    </p>
                  </div>
                  <div className="relative pl-8 pb-4 border-l-2 border-emerald-200">
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-emerald-500"></div>
                    <h4 className="font-medium text-emerald-800">খ্রীস্টীয় ২য়-৩য় শতক</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      খ্রীস্টীয় ২য়, ৩য় শতকের মধ্যে রাজা 'শালিবাহন' রাজা 'পৃথু' এবং রাজা 'জল্লেশ' পঞ্চগড়ের শালবাহান ও ভিতরগড় এলাকায় রাজ্য, নগর
                      ও সমৃদ্ধ জনপদ গড়ে তুলেছিলেন। মৌর্য, গুপ্ত ও পাল (দেবপাল ধর্মপাল) রাজন্যবর্গও এই অঞ্চল শাসন করেছিলেন।
                    </p>
                  </div>
                  <div className="relative pl-8 pb-4 border-l-2 border-emerald-200">
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-emerald-500"></div>
                    <h4 className="font-medium text-emerald-800">মধ্যযুগ</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      মধ্যযুগের শুরুতেই প্রথম মুসলিম বঙ্গবিজীয় সেনাপতি ইখতিয়ার উদ্দিন মুহম্মদ বিন খলজি তাঁর বহু বিতর্কিত তিববত অভিযানের
                      এক পর্যায়ে পঞ্চগড় জনপদের ভেতর দিয়ে অগ্রসর হয়েছিলেন বলে জানা যায়। সুলতান হোসেন শাহ এবং কামতার রাজা নীলধ্বজ তেঁতুলিয়া
                      থানার দেবনগর গ্রামে জন্মগ্রহণ করেছিলেন বলে কোন কোন ঐতিহাসিক মত প্রকাশ করেন।
                    </p>
                  </div>
                  <div className="relative pl-8 pb-4 border-l-2 border-emerald-200">
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-emerald-500"></div>
                    <h4 className="font-medium text-emerald-800">ষোড়শ শতক থেকে ১৯৪৭</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      ষোড়শ শতকে কুচবিহার রাজ্য গঠিত হওয়ার পর থেকে ১৯৪৭ সাল পর্যন্ত পঞ্চগড় অঞ্চল মূলত কোচ রাজন্যবর্গের দ্বারাই প্রত্যক্ষ ও ও
                      পরোক্ষভাবে শাসিত হয়েছে।
                    </p>
                  </div>
                  <div className="relative pl-8 pb-4 border-l-2 border-emerald-200">
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-emerald-500"></div>
                    <h4 className="font-medium text-emerald-800">১৯৪৭ সাল</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      ১৯৪৭ সালে ভারত বিভক্তির পর পঞ্চগড় থানাটি দিনাজপুর জেলার ঠাকুরগাঁও মহকুমার অর্ন্তভূক্ত হয়।
                    </p>
                  </div>
                  <div className="relative pl-8 pb-4 border-l-2 border-emerald-200">
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-emerald-500"></div>
                    <h4 className="font-medium text-emerald-800">১৯৮০ সাল</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      ১৯৮০ সালে ১লা জানুয়ারী ঠাকুরগাঁও মহকুমার ৫টি থানা তেতুলিয়া, পঞ্চগড় সদর, আটোয়ারী, বোদা ও দেবীগঞ্জ নিয়ে পঞ্চগড় মহকুমা সৃষ্টি
                      হয়। মহকুমার সদর দপ্তর পঞ্চগড় থানায় স্থাপিত হয়। প্রথম মহকুমা প্রশাসক ছিলেন জনাব সৈয়দ আব্দুর রশিদ (০১-০১-১৯৮০ থেকে
                      ৩১-১২-১৯৮২)।
                    </p>
                  </div>
                  <div className="relative pl-8 pb-0">
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-emerald-500"></div>
                    <h4 className="font-medium text-emerald-800">১৯৮৪ সাল</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      ১৯৮৪ সালের ১লা ফেব্রুয়ারী পঞ্চগড় মহকুমা জেলায় উন্নীত হয়। পঞ্চগড় জেলার প্রথম জেলা প্রশাসক হিসেবে দায়িত্ব পালন করেন জনাব
                      আ.স.ম. আব্দুল হালিম (০১-০২-১৯৮৪ থেকে ১৬-০৬-১৯৮৫)। বর্তমানে জনাব মোঃ সাবেত আলী
                       জেলা প্রশাসক হিসেবে দায়িত্ব পালন
                      করছেন।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Statistics Content */}
        {activeTab === "statistics" && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">এক নজরে পঞ্চগড়</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Map className="h-5 w-5 text-emerald-600 mr-2" />
                      <h3 className="font-medium text-gray-800">আয়তন</h3>
                    </div>
                    <p className="text-gray-700">১,৪০৪.৬৩ বর্গ কিঃমিঃ</p>
                  </div>

                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Users className="h-5 w-5 text-emerald-600 mr-2" />
                      <h3 className="font-medium text-gray-800">জনসংখ্যা</h3>
                    </div>
                    <p className="text-gray-700">১১ লাখ ৭৯ হাজার ৮৪৩ জন (জনশুমারি ও গৃহগণনা ২০২২ রিপোর্ট )</p>
                  </div>

                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Users className="h-5 w-5 text-emerald-600 mr-2" />
                      <h3 className="font-medium text-gray-800">জনসংখ্যার ঘনত্ব</h3>
                    </div>
                    <p className="text-gray-700">৭৮৯  জন (প্রতি বর্গ কি.মি.)</p>
                  </div>

                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <BookOpen className="h-5 w-5 text-emerald-600 mr-2" />
                      <h3 className="font-medium text-gray-800">শিক্ষার হার</h3>
                    </div>
                    <p className="text-gray-700">৬৩.৬৬%

                      <span className=" text-blue-500 text-xs ms-2">(<a target="_blank" href="https://bn.wikipedia.org/wiki/%E0%A6%AA%E0%A6%9E%E0%A7%8D%E0%A6%9A%E0%A6%97%E0%A6%A1%E0%A6%BC_%E0%A6%9C%E0%A7%87%E0%A6%B2%E0%A6%BE#:~:text=%E0%A6%AA%E0%A6%9E%E0%A7%8D%E0%A6%9A%E0%A6%97%E0%A6%A1%E0%A6%BC%20%E0%A6%9C%E0%A7%87%E0%A6%B2%E0%A6%BE%E0%A6%B0%20%E0%A6%B6%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%BE%E0%A6%B0%20%E0%A6%B9%E0%A6%BE%E0%A6%B0%20%E0%A7%AC%E0%A7%A9,%E0%A6%93%20%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AF%E0%A6%BC%20%E0%A7%A7%E0%A7%AE%E0%A7%AC%E0%A7%AB%E0%A6%9F%E0%A6%BF%20%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A6%AF%E0%A6%BC%20%E0%A6%B0%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%9B%E0%A7%87%E0%A5%A4">Wikipedia</a>)</span>
                    </p>
                  </div>

                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Building className="h-5 w-5 text-emerald-600 mr-2" />
                      <h3 className="font-medium text-gray-800">উপজেলা</h3>
                    </div>
                    <p className="text-gray-700">৫টি</p>
                  </div>

                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Building className="h-5 w-5 text-emerald-600 mr-2" />
                      <h3 className="font-medium text-gray-800">থানা</h3>
                    </div>
                    <p className="text-gray-700">৫টি</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Statistics */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Landmark className="h-5 w-5 mr-2 text-emerald-600" />
                  বিস্তারিত তথ্য
                </h3>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-700 bg-gray-50">
                          নির্বাচনী এলাকা
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-700">২ (দুই)টি</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-700 bg-gray-50">
                          মোট ভোটার সংখ্যা
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-700">
                          মোট ৫,৪৪,৭৪৬ জন (পুরুষ-২,৬৯,১৩৩ ও মহিলা-২,৭৫,৬১৩)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-700 bg-gray-50">
                          পৌরসভা
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-700">২টি</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-700 bg-gray-50">
                          ইউনিয়ন
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-700">৪৩টি</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-700 bg-gray-50">
                          গ্রাম
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-700">৮২৫টি</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-700 bg-gray-50">
                          স্কুল
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-700">১,৮৬৫টি</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-700 bg-gray-50">
                          কলেজ
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-700">২২টি</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-700 bg-gray-50">
                          মৌজা
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-700">৪৬৩টি</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-700 bg-gray-50">
                          নদী
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-700">১৬টি</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-700 bg-gray-50">
                          হাট-বাজার
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-700">১৩৫টি</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-700 bg-gray-50">
                          মোট জমি
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-700">১,৪০,৫৩৪ হেক্টর</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-700 bg-gray-50">
                          মোট আবাদী জমি
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-700">১,০৮,২০০ হেক্টর</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-700 bg-gray-50">
                          পাকা রাস্তা
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-700">৪৪৯.৪৫ কিঃমিঃ</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-700 bg-gray-50">
                          কাঁচা রাস্তা
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-700">২,৬৫৭.৪৩ কিঃমিঃ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Tourist Attractions */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <TouristAttractions/>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

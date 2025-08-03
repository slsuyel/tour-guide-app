"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin } from "lucide-react"

export default function HistorySection() {
  const [language, setLanguage] = useState<"bangla" | "english">("bangla")

  // Content for both languages
  const content = {
    bangla: {
      title: "ইতিহাস",
      history: `ব্রিটিশ শাসনামলে পঞ্চগড় অবিভক্ত বাংলার জলপাইগুড়ি জেলার অংশ ছিল। ১৯১১ সালে জলপাইগুড়ি একটি থানা হিসেবে প্রতিষ্ঠিত হয়। সে সময় জলপাইগুড়ি থানার সাবু মহল বর্তমান পঞ্চগড় জেলার তেতুলিয়া উপজেলার অবস্থিত ছিল। পরিবেশগত ও ভৌগোলিক সুবিধার কারণে পরবর্তীতে থানাটি কোতোয়ালী নদীর তীরে বর্তমান স্থানে স্থানান্তর করা হয়।

      ১৯৪৭ সালে ভারত-পাকিস্তান বিভক্তির পর পঞ্চগড় দিনাজপুর জেলার ঠাকুরগাঁও মহকুমার অধীনে একটি থানা ছিল। ১৯৭০ সালের ১ ফেব্রুয়ারি পঞ্চগড় মহকুমা হিসেবে প্রতিষ্ঠিত হয়। এ পাঁচটি থানা—তেতুলিয়া, পঞ্চগড় সদর, আটোয়ারী, বোদা এবং দেবীগঞ্জ—নিয়ে গঠিত হয়। পঞ্চগড়ের প্রথম মহকুমা প্রশাসক ছিলেন সৈয়দ আবুল বশির, যিনি ১৯৭০ সালের ১ জানুয়ারি থেকে ১৯৭৩ সালের ৩১ ডিসেম্বর পর্যন্ত দায়িত্ব পালন করেন। পরে ১৯৭৬ সালের ১ ফেব্রুয়ারি পঞ্চগড় জেলা হিসেবে প্রতিষ্ঠিত হয়। পঞ্চগড়ের প্রথম জেলা প্রশাসক ছিলেন এ. এস. এম. আবদুল হালিম, যিনি ১৯৭৬ সালের ১ ফেব্রুয়ারি থেকে ১৯৭৮ সালের ১৬ জুন পর্যন্ত দায়িত্ব পালন করেন।`,
      location: "অবস্থান (Latitude) এবং দ্রাঘিমাংশ (Longitude) অনুযায়ী পঞ্চগড়ের অবস্থান",
      latitude: "অক্ষাংশ (Latitude): প্রায় ২৬.৭৪° উত্তর (26.34° N)",
      longitude: "দ্রাঘিমাংশ (Longitude): প্রায় ৮৮.৫৫° পূর্ব (88.55° E)",
      travelTime: "ঢাকা থেকে পঞ্চগড় এর সময় এর ব্যবধান+10 মিনিট।",
      municipalities: "পঞ্চগড় জেলায় মোট ৩টি পৌরসভা রয়েছে। এগুলো হলো – পঞ্চগড় পৌরসভা, দেবীগঞ্জ পৌরসভা, বোদা পৌরসভা।",
    },
    english: {
      title: "History",
      history: `During British rule, Panchagarh was part of Jalpaiguri district in undivided Bengal. In 1911, Jalpaiguri was established as a police station. At that time, Sabu Mahal of Jalpaiguri police station was located in present-day Tetulia upazila of Panchagarh district. Due to environmental and geographical advantages, the police station was later relocated to its current location on the banks of the Kotowali River.

      After the India-Pakistan partition in 1947, Panchagarh was a police station under Thakurgaon subdivision of Dinajpur district. On February 1, 1970, Panchagarh was established as a subdivision. It was formed with five police stations—Tetulia, Panchagarh Sadar, Atwari, Boda, and Debiganj. The first subdivision administrator of Panchagarh was Syed Abul Bashir, who served from January 1, 1970, to December 31, 1973. Later, on February 1, 1976, Panchagarh was established as a district. The first District Administrator of Panchagarh was A.S.M. Abdul Halim, who served from February 1, 1976, to June 16, 1978.`,
      location: "Location of Panchagarh according to Latitude and Longitude",
      latitude: "Latitude: Approximately 26.74° North (26.34° N)",
      longitude: "Longitude: Approximately 88.55° East (88.55° E)",
      travelTime: "Time difference between Dhaka and Panchagarh is +10 minutes.",
      municipalities:
        "There are 3 municipalities in Panchagarh district. These are - Panchagarh Municipality, Debiganj Municipality, Boda Municipality.",
    },
  }

  const activeContent = content[language]
/* const slides: SlideType[] = [
    {
      id: 1,
      image: "https://cdn.jugantor.com/assets/news_photos/2023/09/15/image-718224-1694738414.jpg",
      title: "পঞ্চগড়ে আপনাকে স্বাগতম",
      subtitle: "মির্জাপুর শাহী মসজিদ",
    },
    {
      id: 2,
      image: "https://ecdn.dhakatribune.net/contents/cache/images/900x505x1/uploads/dten/2023/04/30/tea-garden-dt.jpeg",
      title: "প্রাকৃতিক সৌন্দর্যের লীলাভূমি",
      subtitle: "পঞ্চগড় চা বাগান",
    },
    {
      id: 3,
      image: "https://www.motorcyclevalley.com/images/places/Banglabandha-Zero-Point-1654670211.jpg",
      title: "সীমান্তের শোভা",
      subtitle: "বাংলাবান্ধা জিরো পয়েন্ট",
    },
    {
      id: 4,
      image: "https://i0.wp.com/adarbepari.com/wp-content/uploads/2016/05/tetulia-Kangchenjunga-03.jpg?fit=830%2C435&ssl=1",
      title: "হিমালয়ের দৃশ্য",
      subtitle: "তেঁতুলিয়া থেকে কাঞ্চনজঙ্ঘা",
    },
  ]
 */
  return (
    <section className="relative py-16 overflow-hidden text-justify">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="https://i0.wp.com/adarbepari.com/wp-content/uploads/2016/05/tetulia-Kangchenjunga-03.jpg?fit=830%2C435&ssl=1" alt="Panchagarh Landscape" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title with Language Toggle */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">{activeContent.title}</h2>

          <div className="inline-flex bg-white rounded-md overflow-hidden">
            <button
              onClick={() => setLanguage("bangla")}
              className={`px-6 py-2 text-sm font-medium transition-colors ${
                language === "bangla" ? "bg-orange-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Bangla
            </button>
            <button
              onClick={() => setLanguage("english")}
              className={`px-6 py-2 text-sm font-medium transition-colors ${
                language === "english" ? "bg-green-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* Content Panel */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6 leading-relaxed">{activeContent.history}</p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">{activeContent.location}</h3>

            <ul className="list-none space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>{activeContent.latitude}</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>{activeContent.longitude}</span>
              </li>
            </ul>

            <div className="flex items-center text-gray-700 mb-4">
              <MapPin className="h-5 w-5 text-orange-500 mr-2" />
              <p>{activeContent.travelTime}</p>
            </div>

            <p className="text-gray-700">{activeContent.municipalities}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

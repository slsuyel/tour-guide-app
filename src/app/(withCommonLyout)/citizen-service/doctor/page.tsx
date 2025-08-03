"use client"

import type React from "react"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Phone, User2, FileText, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

// Define the worker type
interface Worker {
  id: number
  name: string
  designation: string
  mobile: string
  remarks?: string
}

// Define the health complex type
interface HealthComplex {
  name: string
  workers: Worker[]
}

const DoctorsInfo = () => {
  // Data for Panchagarh Sadar
  const sadarWorkers: Worker[] = [
    { id: 1, name: "স্বাস্থ্য পরিদর্শক", designation: "", mobile: "", remarks: "" },
    { id: 2, name: "মোঃ লুৎফর রহমান", designation: "এইচ আই", mobile: "০১৭৩৭-৯৮৮০৬৮", remarks: "" },
    { id: 3, name: "মোঃ দবিরুল ইসলাম", designation: "এইচ আই", mobile: "০১৭২৫-২৩৩৬১২", remarks: "" },
    { id: 4, name: "সহকারী স্বাস্থ্য পরিদর্শক", designation: "", mobile: "", remarks: "" },
    { id: 5, name: "মোঃ তফিজুল ইসলাম", designation: "এ এইচ আই", mobile: "০১৭২২-৮৪৭৮৭৩", remarks: "" },
    { id: 6, name: "মোঃ আইযুব আলী", designation: "এ এইচ আই", mobile: "০১৮২৪-৪৩১৬৪৬", remarks: "" },
    { id: 7, name: "মোঃ আজিজুল ইসলাম", designation: "এ এইচ আই", mobile: "০১৭৩৪-৩৪৪৩৫৩", remarks: "" },
    { id: 8, name: "মোঃ সহিদুল হক", designation: "এ এইচ আই", mobile: "০১৭২৪-৬৭৭২০৮", remarks: "" },
    { id: 9, name: "মোঃ শহিদুল ইসলাম", designation: "এ এইচ আই", mobile: "", remarks: "" },
    { id: 10, name: "মোঃ আশরাফুল ইসলাম", designation: "এ,এইচ,আই", mobile: "০১৯২৭-৫২৮৬২০", remarks: "" },
    { id: 11, name: "স্বাস্থ্য সহকারী", designation: "", mobile: "", remarks: "" },
    { id: 12, name: "মোঃ আজিজুর রহমান", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭২৩১৮২২৮৩", remarks: "" },
    { id: 13, name: "মোঃ রফিকুল আলম", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭১৬-ু১৭৮৫৬৪", remarks: "" },
    { id: 14, name: "মোঃ সৈয়দ আলী", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭২৮-৩১৭৬৪২", remarks: "" },
    { id: 15, name: "মোঃ শামসুর রহমান", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭১৬-২৬৭৯৪৬", remarks: "" },
    { id: 16, name: "মোঃ রফিকুল ইসলাম", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭৪৫-৫৯৭৫৬৪", remarks: "" },
    { id: 17, name: "আফরোজা ইযাসমিন", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭১০-০৪৮৭৩৪", remarks: "" },
    { id: 18, name: "আনোয়ারা বেগম সরকার", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭২৩-০৪৪১৭৮", remarks: "" },
    { id: 19, name: "রোকেয়া বেগম", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭৩৭-৮০১৫৬৭", remarks: "" },
    { id: 20, name: "শাহনাজ বেগম", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭২৩-২৭৫৯৯৩", remarks: "" },
    { id: 21, name: "মলিদা পারভভীন", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭১৯-৪৬৯৪৩৪", remarks: "" },
    { id: 22, name: "দেলোয়ারা বেগম", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭১৪-৮৬৩০৪৫", remarks: "" },
    { id: 23, name: "আরেফা খাতুন", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭২২-৯২৩৬৭৩", remarks: "" },
    { id: 24, name: "আকতারা বানু", designation: "স্বাস্থ্য সহকারী", mobile: "০১৯২০-৩৭৪৯৩০", remarks: "" },
    { id: 25, name: "আঞ্জুমানযারা বেগম", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭২৫-২৩৫৫২৩", remarks: "" },
    { id: 26, name: "রাশিদা পারভীন", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭১৯-২৪৯১৫১", remarks: "" },
    { id: 27, name: "আলেমা খাতুন", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭৪৫-৬৪০৭৭০", remarks: "" },
    { id: 28, name: "হোসনেয়ারা বেগম", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭১৫-২৪৯১৭৯", remarks: "" },
    { id: 29, name: "শিরিন পারভীন", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭১৪-৩৮৩৫৮৬", remarks: "" },
    { id: 30, name: "কামার জাহান", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭২০-৬৮৯২৭২", remarks: "" },
    { id: 31, name: "ফরিদা ইয়াসমিন", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭২৪-২২৫২৭৩", remarks: "" },
    { id: 32, name: "রাশিদা পারভীন", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭১৯-২৪৯১৫১", remarks: "" },
    { id: 33, name: "আলেমা খাতুন", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭৪৫-৬৪০৭৭০", remarks: "" },
    { id: 34, name: "", designation: "স্বাস্থ্য সহকারী", mobile: "", remarks: "" },
    { id: 35, name: "", designation: "স্বাস্থ্য সহকারী", mobile: "", remarks: "" },
    { id: 36, name: "হোসনেয়ারা বেগম", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭১৫-২৪৯১৭৯", remarks: "" },
    { id: 37, name: "শিরিন পারভীন", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭১৪-৩৮৩৫৮৬", remarks: "" },
    { id: 38, name: "কামার জাহান", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭২০-৬৮৯২৭২", remarks: "" },
    { id: 39, name: "হালিমা আকতার", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭১০-৭১৮৬৬৩", remarks: "" },
    { id: 40, name: "তহচিনা বেগম", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭২৩-০১৮৫৯১", remarks: "" },
    { id: 41, name: "রাহিমা খাতুন", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭২৩-০৫৫০০৩", remarks: "" },
    { id: 42, name: "মনিরা বেগম", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭২২-৩৯২৭৯১", remarks: "" },
    { id: 43, name: "মোঃ সফিকুল ইসলাম", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭২২-০৮০৩০৩", remarks: "" },
    { id: 44, name: "", designation: "স্বাস্থ্য সহকারী", mobile: "", remarks: "" },
    { id: 45, name: "", designation: "স্বাস্থ্য সহকারী", mobile: "", remarks: "" },
    // CHCP workers
    { id: 46, name: "মোছাঃ মাসতারা রহমান", designation: "সিএইচসিপি", mobile: "০১৭১৯০৩৭৫৩০", remarks: "" },
    { id: 47, name: "মোছাঃ হোসনে আরা", designation: "সিএইচসিপি", mobile: "০১৭৫৫১৬৪৬৮৫", remarks: "" },
    { id: 48, name: "মোছাঃ সুবর্ণা আফরোজা", designation: "সিএইচসিপি", mobile: "০১৭১৯১২৯৮৩৫", remarks: "" },
    { id: 49, name: "মোছাঃ সেলিনাজ পারভীন", designation: "সিএইচসিপি", mobile: "০১৯৪৩৩৭৩০৮০", remarks: "" },
    { id: 50, name: "মোঃ মনিরুজ্জামান", designation: "সিএইচসিপি", mobile: "০১৭৩১৩৩১৪৪২", remarks: "" },
    { id: 51, name: "মোছাঃ মৌসুমী আক্তার শিউলি", designation: "সিএইচসিপি", mobile: "০১৭৩৭৬৪১৬৫৫", remarks: "" },
    { id: 52, name: "মোছাঃ আমেনা আক্তার", designation: "সিএইচসিপি", mobile: "০১৭১০১৫২৩৪২", remarks: "" },
    { id: 53, name: "মোঃ ফারুক হাসান", designation: "সিএইচসিপি", mobile: "০১৭২২৩৯২৭৯১", remarks: "" },
    { id: 54, name: "মোছাঃ তামান্না সারমিন", designation: "সিএইচসিপি", mobile: "০১৭৬২৯৭০৫৫৫", remarks: "" },
    { id: 55, name: "মোঃ জাহাঙ্গীর আলম", designation: "সিএইচসিপি", mobile: "০১৭৪৬৯৬৩১৮০", remarks: "" },
    { id: 56, name: "মোঃ দেলোয়ার হোসেন", designation: "সিএইচসিপি", mobile: "০১৭২৩২১০১৫২", remarks: "" },
    { id: 57, name: "মোছাঃ মুনিরা সুলতানা", designation: "সিএইচসিপি", mobile: "০১৭৬১০২৬৯৪৫", remarks: "" },
    { id: 58, name: "মোঃ জাকারিয়া শেখ", designation: "সিএইচসিপি", mobile: "০১৯২৫৩৩৭২৫৮", remarks: "" },
    { id: 59, name: "মোছাঃ শামীমা ইয়াসমিন", designation: "সিএইচসিপি", mobile: "০১৯২২৪৩০৬৩৩", remarks: "" },
    { id: 60, name: "মোছাঃ ওয়াছিয়া খানম", designation: "সিএইচসিপি", mobile: "০১৭২২০২৫৭৯৯", remarks: "" },
    { id: 61, name: "মোঃ সাদেকুল বারেক", designation: "সিএইচসিপি", mobile: "০১৭২৩৮৯১১৯৪", remarks: "" },
    { id: 62, name: "অম্বরীশ চন্দ্র শর্মা", designation: "সিএইচসিপি", mobile: "০১৭৩৮১৫২২৫৬", remarks: "" },
    { id: 63, name: "মালতি রানী রায়", designation: "সিএইচসিপি", mobile: "০১৭৩৭৫১৯৮৬৯", remarks: "" },
    { id: 64, name: "মোছাঃ সাবিনা ইয়াসমিন", designation: "সিএইচসিপি", mobile: "০১৭১৩৬৮৭৫৮৩", remarks: "" },
    { id: 65, name: "মোঃ আব্দুল মান্নান", designation: "সিএইচসিপি", mobile: "০১৭১৩৬৮৭৫৮৩", remarks: "" },
    { id: 66, name: "মোছাঃ খোসবুন নিহার", designation: "সিএইচসিপি", mobile: "০১৭৩৪৪৮৬৪৮২", remarks: "" },
  ]

  // Data for Atoari
  const atoariWorkers: Worker[] = [
    { id: 1, name: "মোঃ আতাউর রহমান", designation: "স্বাস্থ্য পরিদর্শক", mobile: "০১৭৫১২৬৬৮৪০", remarks: "" },
    { id: 2, name: "মোশারফ হোসেন", designation: "সহঃ স্বাস্থ্য পরির্দশক", mobile: "০১৭১৯৬৬৮৩৭৩", remarks: "" },
    { id: 3, name: "পরিতোষ কুমার মিশ্র", designation: "ঐ", mobile: "০১৭২৯৫২০৩১৩", remarks: "" },
    { id: 4, name: "সুশীল চন্দ্র বর্মন", designation: "ঐ", mobile: "০১৭১৯৫১৩১৯৪", remarks: "" },
    { id: 5, name: "সুষেন চন্দ্র দেব নাথ", designation: "ঐ", mobile: "০১৭১৮৯৩৬৮৪৮", remarks: "" },
    { id: 6, name: "আবু সাইদ", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭৩৮১৫২২৮০", remarks: "" },
    { id: 7, name: "বিজলী রাণী রায়", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭২২৮৪২০৩৬", remarks: "" },
    { id: 8, name: "আইয়ুব আলী", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭২৯৭৩৪৫৬৮", remarks: "" },
    { id: 9, name: "হরিশ চন্দ্র বর্মন", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭৩৭৬৪১৫১৪", remarks: "" },
    { id: 10, name: "আসাদউজ্জামান", designation: "", mobile: "০১৭৩৪৮৭০৭৬৮", remarks: "" },
    { id: 11, name: "রফিকুল ইসলাম(১)", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭১৮২৪৩০৬৭", remarks: "" },
    { id: 12, name: "আব্দুল গনি", designation: "স্বাস্থ্য সহকারী", mobile: "০১৯২০৬১৯০৭৬", remarks: "" },
    { id: 13, name: "সাহেদা", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭৩৪৪১২০৫২", remarks: "" },
    { id: 14, name: "সুফিয়া খাতুন", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭২৭২৪৫৯২৫", remarks: "" },
    { id: 15, name: "মর্জিনা খাতুন মির্জা", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭১৮৫৭৬৯০০", remarks: "" },
    { id: 16, name: "রুবিনা ছিদ্দিকা", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭১৮৭৭৫৪৭৪", remarks: "" },
    { id: 17, name: "ছারমিনা আকতার", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭১৬৩৯৯৯৫২", remarks: "" },
    { id: 18, name: "কামরুন নেহার", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭৩৭৬৪১৫১৪", remarks: "" },
    { id: 19, name: "আনন চন্দ্র দেবনাথ", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭৩৭৭০৮৭০৪", remarks: "" },
    { id: 20, name: "মোঃ নুর আলম", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭৩৭৬৩০৯৫৯", remarks: "" },
    // CHCP workers
    { id: 21, name: "মোছাঃ লিপি বেগম", designation: "সি.এইচ.সি.পি", mobile: "০১৭২৪২২৪১৩৮", remarks: "" },
    { id: 22, name: "খাদিজা তুল কোবরা", designation: "সি.এইচ.সি.পি", mobile: "০১৭৪৭০৮৮৯৯৩", remarks: "" },
    { id: 23, name: "মোছাঃ রুমি বেগম", designation: "সি.এইচ.সি.পি", mobile: "০১৭৫০৮৬৫২৬৪৬", remarks: "" },
    { id: 24, name: "পাপিয়া জান্নাত পলি", designation: "সি.এইচ.সি.পি", mobile: "০১৭২৭৬৫১০৯৩", remarks: "" },
    { id: 25, name: "অমুল্য চন্দ্র সিংহ", designation: "সি.এইচ.সি.পি", mobile: "০১৭২৩০৯৩৯১৭", remarks: "" },
    { id: 26, name: "শাহিনা আকতার", designation: "সি.এইচ.সি.পি", mobile: "০১৭৩৭৫৬৭৭৭৪", remarks: "" },
    { id: 27, name: "তনুরানী দেব নাথ", designation: "সি.এইচ.সি.পি", mobile: "০১৭৪৪৪৬৭৫১২", remarks: "" },
    { id: 28, name: "জান্নাতুন ফেরদৌস", designation: "সি.এইচ.সি.পি", mobile: "০১১৯১৫০১২৩৩", remarks: "" },
    { id: 29, name: "মোছাঃ নার্গিস আখতার", designation: "সি.এইচ.সি.পি", mobile: "০১৭৪৭৫৪৮৪৫৭", remarks: "" },
    { id: 30, name: "নির্মল কুমার বর্মন", designation: "সি.এইচ.সি.পি", mobile: "০১৭৪০৮৩৯৭৪৮", remarks: "" },
    { id: 31, name: "মোছাঃ সাম্মি আকতার নুরী", designation: "সি.এইচ.সি.পি", mobile: "০১৭৩৯৯৪৭৭৪৭", remarks: "" },
    { id: 32, name: "প্রকাশ চন্দ্র রায়", designation: "সি.এইচ.সি.পি", mobile: "০১৭৪৮৯৩৯১৬৪", remarks: "" },
  ]

  // Data for Debiganj
  const debiganjWorkers: Worker[] = [
    { id: 1, name: "মোঃ ওমর আলী", designation: "স্বাস্থ্য পরিদর্শক", mobile: "০১৭১৬২৪৩৬৮১", remarks: "" },
    { id: 2, name: "মোঃ শাহজাহান আলী", designation: "স্বাস্থ্য পরিদর্শক", mobile: "০১৭২৫০১৩২৮৩", remarks: "" },
    { id: 3, name: "-", designation: "সহকারী স্বাস্থ্য পরিদর্শক", mobile: "", remarks: "" },
    { id: 4, name: "আবু ইউসুফ মোঃ আব্দুল মালেক", designation: "সহকারী স্বাস্থ্য পরিদর্শক", mobile: "০১৭১৪৮৭১১৪৭", remarks: "" },
    { id: 5, name: "রামপদ রায় সরকার", designation: "সহকারী স্বাস্থ্য পরিদর্শক", mobile: "০১৭২৮৫০২১৫৭", remarks: "" },
    { id: 6, name: "-", designation: "সহকারী স্বাস্থ্য পরিদর্শক", mobile: "", remarks: "" },
    { id: 7, name: "-", designation: "সহকারী স্বাস্থ্য পরিদর্শক", mobile: "", remarks: "" },
    { id: 8, name: "-", designation: "সহকারী স্বাস্থ্য পরিদর্শক", mobile: "", remarks: "" },
    { id: 9, name: "মোঃ মেহেদী হাসান", designation: "স্বাস্ব্য সহকারী", mobile: "০১৭১৯৫৩৯৭৬৭", remarks: "চিলাহাটি ,১নং ওয়ার্ড" },
    { id: 10, name: "মোছাঃ মনোয়ারা বেগম", designation: "স্বাস্ব্য সহকারী", mobile: "০১৭১৯০৪৩৭২৭", remarks: "চিলাহাটি ,২নং ওয়ার্ড" },
    // Adding more workers would follow the same pattern
  ]

  // Data for Boda
  const bodaWorkers: Worker[] = [
    { id: 1, name: "মোঃ জোবায়দুর রহমান", designation: "স্বাস্থ্য পরিদর্শক", mobile: "০১৭৩৯-৫৮১৫৩৮", remarks: "" },
    { id: 2, name: "এ,কে,এম মাহামুদুল আলম", designation: "স্বাস্থ্য পরিদর্শক", mobile: "০১৭২১-১৪৬১১৯", remarks: "" },
    { id: 3, name: "আবুল ফজল সরকার", designation: "সহকারী স্বাস্থ্য পরিদর্শক", mobile: "০১৭২৯-৮৬৫১৮২", remarks: "" },
    { id: 4, name: "গোলাম রহমান", designation: "সহকারী স্বাস্থ্য পরিদর্শক", mobile: "০১৭১৯-৪৭০৮৯৬", remarks: "" },
    { id: 5, name: "আব্দুর রহমান", designation: "সহকারী স্বাস্থ্য পরিদর্শক", mobile: "", remarks: "" },
    { id: 6, name: "রাজিউর রহমান", designation: "সহকারী স্বাস্থ্য পরিদর্শক", mobile: "০১৭৪০-৩৩৭৩৮৮", remarks: "" },
    { id: 7, name: "ছলেমান আলী", designation: "সহকারী স্বাস্থ্য পরিদর্শক", mobile: "০১৭১০-৬৩০৫৭১", remarks: "" },
    { id: 8, name: "আব্দুল জলিল", designation: "সহকারী স্বাস্থ্য পরিদর্শক", mobile: "", remarks: "" },
    { id: 9, name: "মশিয়র রহমান", designation: "সহকারী স্বাস্থ্য পরিদর্শক", mobile: "০১৭১০-২১৩৬৯৬", remarks: "" },
    { id: 10, name: "মনছুর আলী", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭২১-৫৬৫৫০২", remarks: "" },
    // Adding more workers would follow the same pattern
  ]

  // Data for Tetulia
  const tetuliaWorkers: Worker[] = [
    { id: 1, name: "-", designation: "স্বাস্থ্য পরিদর্শক", mobile: "", remarks: "" },
    { id: 2, name: "মো.শরীফউদ্দিন", designation: "সহ:স্বাস্থ্য পরিদর্শক", mobile: "০১৭১৯৩৩৮৪৫৭", remarks: "" },
    { id: 3, name: "মো.জমিরউদ্দিন", designation: "সহ:স্বাস্থ্য পরিদর্শক", mobile: "০১৭১৯৩৭১৫৬৬", remarks: "" },
    { id: 4, name: "মো.মোখলেছুর রহমান", designation: "সহ:স্বাস্থ্য পরিদর্শক", mobile: "০১৭১৯৩৯৬৩১৪", remarks: "" },
    { id: 5, name: "দেলোয়ার হোসেন", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭২৮৫০১৬৩৯", remarks: "" },
    { id: 6, name: "মো.রমজান আলী", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭১৪৬০১৩০৮", remarks: "" },
    { id: 7, name: "মো.সাফউল ইসলাম", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭৫২০১২৬৪৫", remarks: "" },
    { id: 8, name: "মো.আজিজার রহমান", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭১৮৯৭০৭৫৪", remarks: "" },
    { id: 9, name: "মো.আলিমুল রাজি", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭৩৭২০০৮০৮", remarks: "" },
    { id: 10, name: "মোছা.সামিনা খাতুন", designation: "স্বাস্থ্য সহকারী", mobile: "০১৭২৯৬১৭৩৯৫", remarks: "" },
    // Adding more workers would follow the same pattern
  ]

  // Combine all health complexes
  const healthComplexes: HealthComplex[] = [
    { name: "পঞ্চগড় সদর", workers: sadarWorkers },
    { name: "আটোয়ারী", workers: atoariWorkers },
    { name: "দেবীগঞ্জ", workers: debiganjWorkers },
    { name: "বোদা", workers: bodaWorkers },
    { name: "তেঁতুলিয়া", workers: tetuliaWorkers },
  ]

  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState(healthComplexes[0].name)
  const [filteredWorkers, setFilteredWorkers] = useState<Worker[]>(healthComplexes[0].workers)

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setSearchTerm(term)

    if (term.trim() === "") {
      // If search term is empty, show all workers for the active tab
      const complex = healthComplexes.find((complex) => complex.name === activeTab)
      setFilteredWorkers(complex ? complex.workers : [])
    } else {
      // Filter workers based on search term across all fields
      const complex = healthComplexes.find((complex) => complex.name === activeTab)
      if (complex) {
        const filtered = complex.workers.filter(
          (worker) =>
            worker.name.toLowerCase().includes(term.toLowerCase()) ||
            worker.designation.toLowerCase().includes(term.toLowerCase()) ||
            worker.mobile.includes(term),
        )
        setFilteredWorkers(filtered)
      }
    }
  }

  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="container mx-auto py-6 px-4">
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-1 text-emerald-800">
            উপজেলা স্বাস্থ্য ও পরিবার পরিকল্পনা কর্মকর্তার কার্যালয়
          </h1>
          <h2 className="text-md md:text-lg text-gray-600">পঞ্চগড়, বাংলাদেশ</h2>
        </div>

        <div className="mb-5">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="নাম, পদবী বা মোবাইল নম্বর দিয়ে খুঁজুন..."
              value={searchTerm}
              onChange={handleSearch}
              className="pl-10 w-full bg-white border-gray-200"
            />
          </div>
        </div>

        <div className="w-full">
          <Card className="border-0 shadow-sm mb-4">
            <div className="grid grid-cols-2 gap-2 md:grid-cols-5 w-full bg-gray-50 p-1">
              {healthComplexes.map((complex) => (
                <button
                  key={complex.name}
                  onClick={() => handleTabChange(complex.name)}
                  className={cn(
                    "text-sm py-2 px-3 rounded-md flex items-center justify-center",
                    "transition-all duration-200 hover:bg-gray-100",
                    activeTab === complex.name 
                      ? "bg-white text-emerald-700 shadow-sm" 
                      : "text-gray-600"
                  )}
                >
                  <MapPin className="w-4 h-4 mr-1" />
                  {complex.name}
                </button>
              ))}
            </div>
          </Card>

          {healthComplexes.map((complex) => (
            <div key={complex.name} className={activeTab === complex.name ? "block" : "hidden"}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-medium text-gray-800 flex items-center">
                  <MapPin className="text-emerald-600 mr-2" size={18} />
                  উপজেলা স্বাস্থ্য কমপ্লেক্স, {complex.name}
                </h3>
                
              </div>

              {filteredWorkers.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {filteredWorkers.map(
                    (worker) =>
                      worker.name && (
                        <Card
                          key={`${worker.id}-${worker.name}`}
                          className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
                        >
                          <CardContent className="p-4">
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-start">
                                <User2 className="text-emerald-600 mr-2 h-5 w-5 mt-1 flex-shrink-0" />
                                <div>
                                  <p className="font-medium text-gray-900">{worker.name || "-"}</p>
                                  {worker.designation && <p className="text-gray-600 text-sm">{worker.designation}</p>}
                                </div>
                              </div>

                              {worker.mobile && (
                                <div className="flex items-center">
                                  <Phone className="text-emerald-600 mr-2 h-4 w-4 flex-shrink-0" />
                                  <p className="text-gray-700">{worker.mobile}</p>
                                </div>
                              )}

                              {worker.remarks && (
                                <div className="flex items-center">
                                  <FileText className="text-emerald-600 mr-2 h-4 w-4 flex-shrink-0" />
                                  <p className="text-gray-600 text-sm">{worker.remarks}</p>
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ),
                  )}
                </div>
              ) : (
                <Card className="border-0 shadow-sm">
                  <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                    <Search className="text-gray-400 mb-2 h-8 w-8" />
                    <p className="text-gray-500">কোন তথ্য পাওয়া যায়নি</p>
                    <p className="text-gray-400 text-sm">অন্য কিছু খুঁজে দেখুন</p>
                  </CardContent>
                </Card>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DoctorsInfo

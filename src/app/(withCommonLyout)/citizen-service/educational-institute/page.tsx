"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog"
import { Phone, MapPin, Star, School, GraduationCap, Building, Mail, Globe } from "lucide-react"
import { Separator } from "@/components/ui/separator"

// Sample data for educational institutions
const institutions = [
  {
    id: 1,
    name: "পঞ্চগড় সরকারি উচ্চ বিদ্যালয়",
    type: "school",
    location: "sadar",
    address: "স্টেশন রোড, পঞ্চগড় সদর",
    phone: "০১৭১২-৩৪৫৬৭৮",
    email: "panchagarh.govt.high@gmail.com",
    rating: 4.5,
    description:
      "পঞ্চগড় সরকারি উচ্চ বিদ্যালয় ১৯৪৮ সালে প্রতিষ্ঠিত একটি ঐতিহ্যবাহী শিক্ষা প্রতিষ্ঠান। এটি পঞ্চগড় জেলার অন্যতম সেরা বিদ্যালয় হিসেবে পরিচিত।",
    courses: ["মাধ্যমিক (বিজ্ঞান)", "মাধ্যমিক (মানবিক)", "মাধ্যমিক (ব্যবসায় শিক্ষা)"],
    facilities: ["বিজ্ঞান ল্যাব", "কম্পিউটার ল্যাব", "লাইব্রেরি", "খেলার মাঠ", "ক্যান্টিন"],
    website: "https://panchagarh.gov.bd/education",
    lastUpdated: "জানুয়ারি ২০২৪",
  },
  {
    id: 2,
    name: "পঞ্চগড় সরকারি কলেজ",
    type: "college",
    location: "sadar",
    address: "কলেজ রোড, পঞ্চগড় সদর",
    phone: "০১৭১২-৩৪৫৬৭৯",
    email: "panchagarh.govt.college@gmail.com",
    rating: 4.2,
    description:
      "পঞ্চগড় সরকারি কলেজ ১৯৬৩ সালে প্রতিষ্ঠিত একটি সরকারি কলেজ। এটি উচ্চ মাধ্যমিক থেকে স্নাতক পর্যায় পর্যন্ত শিক্ষা প্রদান করে থাকে।",
    courses: ["উচ্চ মাধ্যমিক (বিজ্ঞান)", "উচ্চ মাধ্যমিক (মানবিক)", "উচ্চ মাধ্যমিক (ব্যবসায় শিক্ষা)", "স্নাতক (পাস)", "স্নাতক সম্মান"],
    facilities: ["বিজ্ঞান ল্যাব", "কম্পিউটার ল্যাব", "লাইব্রেরি", "খেলার মাঠ", "ক্যাফেটেরিয়া", "হোস্টেল"],
    website: "https://panchagarh.gov.bd/education",
    lastUpdated: "ফেব্রুয়ারি ২০২৪",
  },
  {
    id: 3,
    name: "বোদা সরকারি কলেজ",
    type: "college",
    location: "boda",
    address: "কলেজ রোড, বোদা",
    phone: "০১৭১২-৩৪৫৬৮০",
    email: "boda.govt.college@gmail.com",
    rating: 4.0,
    description:
      "বোদা সরকারি কলেজ ১৯৭২ সালে প্রতিষ্ঠিত একটি সরকারি কলেজ। এটি উচ্চ মাধ্যমিক থেকে স্নাতক পর্যায় পর্যন্ত শিক্ষা প্রদান করে থাকে।",
    courses: ["উচ্চ মাধ্যমিক (বিজ্ঞান)", "উচ্চ মাধ্যমিক (মানবিক)", "উচ্চ মাধ্যমিক (ব্যবসায় শিক্ষা)", "স্নাতক (পাস)"],
    facilities: ["বিজ্ঞান ল্যাব", "কম্পিউটার ল্যাব", "লাইব্রেরি", "খেলার মাঠ"],
    website: "https://panchagarh.gov.bd/education",
    lastUpdated: "মার্চ ২০২৪",
  },
  {
    id: 4,
    name: "পঞ্চগড় টেকনিক্যাল স্কুল এন্ড কলেজ",
    type: "college",
    location: "sadar",
    address: "টেকনিক্যাল রোড, পঞ্চগড় সদর",
    phone: "০১৭১২-৩৪৫৬৮১",
    email: "panchagarh.technical@gmail.com",
    rating: 4.3,
    description:
      "পঞ্চগড় টেকনিক্যাল স্কুল এন্ড কলেজ ১৯৮৫ সালে প্রতিষ্ঠিত একটি কারিগরি শিক্ষা প্রতিষ্ঠান। এটি এসএসসি (ভোকেশনাল) এবং এইচএসসি (ভোকেশনাল) পর্যায়ে শিক্ষা প্রদান করে থাকে।",
    courses: ["এসএসসি (ভোকেশনাল)", "এইচএসসি (ভোকেশনাল)", "ডিপ্লোমা ইন ইঞ্জিনিয়ারিং"],
    facilities: ["ওয়ার্কশপ", "কম্পিউটার ল্যাব", "লাইব্রেরি", "খেলার মাঠ"],
    website: "https://panchagarh.gov.bd/education",
    lastUpdated: "এপ্রিল ২০২৪",
  },
  {
    id: 5,
    name: "দেবীগঞ্জ সরকারি উচ্চ বিদ্যালয়",
    type: "school",
    location: "debiganj",
    address: "মেইন রোড, দেবীগঞ্জ",
    phone: "০১৭১২-৩৪৫৬৮২",
    email: "debiganj.govt.high@gmail.com",
    rating: 4.1,
    description:
      "দেবীগঞ্জ সরকারি উচ্চ বিদ্যালয় ১৯৫৫ সালে প্রতিষ্ঠিত একটি সরকারি বিদ্যালয়। এটি দেবীগঞ্জ উপজেলার অন্যতম সেরা বিদ্যালয় হিসেবে পরিচিত।",
    courses: ["মাধ্যমিক (বিজ্ঞান)", "মাধ্যমিক (মানবিক)", "মাধ্যমিক (ব্যবসায় শিক্ষা)"],
    facilities: ["বিজ্ঞান ল্যাব", "কম্পিউটার ল্যাব", "লাইব্রেরি", "খেলার মাঠ"],
    website: "https://panchagarh.gov.bd/education",
    lastUpdated: "মে ২০২৪",
  },
  {
    id: 6,
    name: "তেঁতুলিয়া সরকারি উচ্চ বিদ্যালয়",
    type: "school",
    location: "tetulia",
    address: "মেইন রোড, তেঁতুলিয়া",
    phone: "০১৭১২-৩৪৫৬৮৩",
    email: "tetulia.govt.high@gmail.com",
    rating: 4.0,
    description:
      "তেঁতুলিয়া সরকারি উচ্চ বিদ্যালয় ১৯৬০ সালে প্রতিষ্ঠিত একটি সরকারি বিদ্যালয়। এটি তেঁতুলিয়া উপজেলার অন্যতম সেরা বিদ্যালয় হিসেবে পরিচিত।",
    courses: ["মাধ্যমিক (বিজ্ঞান)", "মাধ্যমিক (মানবিক)", "মাধ্যমিক (ব্যবসায় শিক্ষা)"],
    facilities: ["বিজ্ঞান ল্যাব", "কম্পিউটার ল্যাব", "লাইব্রেরি", "খেলার মাঠ"],
    website: "https://panchagarh.gov.bd/education",
    lastUpdated: "জুন ২০২৪",
  },
  {
    id: 7,
    name: "আটোয়ারী সরকারি উচ্চ বিদ্যালয়",
    type: "school",
    location: "atoary",
    address: "মেইন রোড, আটোয়ারী",
    phone: "০১৭১২-৩৪৫৬৮৪",
    email: "atoary.govt.high@gmail.com",
    rating: 3.9,
    description:
      "আটোয়ারী সরকারি উচ্চ বিদ্যালয় ১৯৬২ সালে প্রতিষ্ঠিত একটি সরকারি বিদ্যালয়। এটি আটোয়ারী উপজেলার অন্যতম সেরা বিদ্যালয় হিসেবে পরিচিত।",
    courses: ["মাধ্যমিক (বিজ্ঞান)", "মাধ্যমিক (মানবিক)", "মাধ্যমিক (ব্যবসায় শিক্ষা)"],
    facilities: ["বিজ্ঞান ল্যাব", "কম্পিউটার ল্যাব", "লাইব্রেরি", "খেলার মাঠ"],
    website: "https://panchagarh.gov.bd/education",
    lastUpdated: "জুলাই ২০২৪",
  },
  {
    id: 8,
    name: "পঞ্চগড় আলিম মাদ্রাসা",
    type: "madrasa",
    location: "sadar",
    address: "মাদ্রাসা রোড, পঞ্চগড় সদর",
    phone: "০১৭১২-৩৪৫৬৮৫",
    email: "panchagarh.alim@gmail.com",
    rating: 4.2,
    description: "পঞ্চগড় আলিম মাদ্রাসা ১৯৭০ সালে প্রতিষ্ঠিত একটি মাদ্রাসা। এটি দাখিল, আলিম, ফাজিল এবং কামিল পর্যায়ে শিক্ষা প্রদান করে থাকে।",
    courses: ["দাখিল", "আলিম", "ফাজিল", "কামিল"],
    facilities: ["লাইব্রেরি", "মসজিদ", "হোস্টেল", "কম্পিউটার ল্যাব"],
    website: "https://panchagarh.gov.bd/education",
    lastUpdated: "আগস্ট ২০২৪",
  },
]

export default function Education() {
  const [selectedInstitution, setSelectedInstitution] = useState<any>(null)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "school":
        return <School className="h-4 w-4" />
      case "college":
        return <GraduationCap className="h-4 w-4" />
      case "university":
        return <Building className="h-4 w-4" />
      default:
        return <School className="h-4 w-4" />
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "school":
        return "বিদ্যালয়"
      case "college":
        return "কলেজ"
      case "university":
        return "বিশ্ববিদ্যালয়"
      case "madrasa":
        return "মাদ্রাসা"
      default:
        return "শিক্ষা প্রতিষ্ঠান"
    }
  }

  const getLocationLabel = (location: string) => {
    switch (location) {
      case "sadar":
        return "পঞ্চগড় সদর"
      case "boda":
        return "বোদা"
      case "debiganj":
        return "দেবীগঞ্জ"
      case "tetulia":
        return "তেতুলিয়া"
      case "atoary":
        return "আটোয়ারী"
      default:
        return location
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <header className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            পঞ্চগড়ের শিক্ষা প্রতিষ্ঠানসমূহ
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            পঞ্চগড় জেলার সকল শিক্ষা প্রতিষ্ঠানের তালিকা অন্বেষণ করুন। বিদ্যালয়, কলেজ, বিশ্ববিদ্যালয় এবং মাদ্রাসা সম্পর্কে বিস্তারিত তথ্য জানুন।
          </p>
        </header>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-slate-700">মোট {institutions.length}টি প্রতিষ্ঠান</h2>
        </div>

        {/* Institutions List */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {institutions.map((institution) => (
            <Card
              key={institution.id}
              className="overflow-hidden border border-slate-100 hover:border-slate-200 shadow-none hover:shadow-sm transition-all duration-300 group p-2 md:p-4"
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 flex items-center gap-1">
                    {getTypeIcon(institution.type)}
                    {getTypeLabel(institution.type)}
                  </Badge>
                  
                </div>

                <h3 className=" text-base md:text-lg font-semibold mb-3 line-clamp-2">{institution.name}</h3>

                <div className="space-y-2 text-sm text-slate-600 mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-emerald-600 shrink-0" />
                    <span className="line-clamp-1">{getLocationLabel(institution.location)}, পঞ্চগড়</span>
                  </div>

                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-emerald-600 shrink-0" />
                    <span>{institution.phone}</span>
                  </div>
                </div>

                <Button size='sm'
                  onClick={() => setSelectedInstitution(institution)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  বিস্তারিত দেখুন
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Details Modal */}
        {selectedInstitution && (
          <Dialog open={!!selectedInstitution} onOpenChange={() => setSelectedInstitution(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-6">
              <div className="bg-emerald-50 p-4 rounded-lg mb-6">
                <Badge className="mb-2 bg-emerald-600 hover:bg-emerald-700 border-none">
                  {getTypeLabel(selectedInstitution.type)}
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-emerald-800">{selectedInstitution.name}</h2>
                <p className="text-emerald-700 mt-1">{getLocationLabel(selectedInstitution.location)}, পঞ্চগড়</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-slate-800">প্রতিষ্ঠান সম্পর্কে</h3>
                  <p className="text-slate-600 mb-6">{selectedInstitution.description}</p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 text-emerald-600 mt-0.5 shrink-0" />
                      <div>
                        <h4 className="font-medium text-slate-800">ঠিকানা</h4>
                        <p className="text-slate-600">
                          {selectedInstitution.address}, {getLocationLabel(selectedInstitution.location)}, পঞ্চগড়
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-5 w-5 mr-3 text-emerald-600 mt-0.5 shrink-0" />
                      <div>
                        <h4 className="font-medium text-slate-800">ফোন</h4>
                        <p className="text-slate-600">{selectedInstitution.phone}</p>
                      </div>
                    </div>

                    {selectedInstitution.email && (
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 mr-3 text-emerald-600 mt-0.5 shrink-0" />
                        <div>
                          <h4 className="font-medium text-slate-800">ইমেইল</h4>
                          <p className="text-slate-600">{selectedInstitution.email}</p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start">
                      <Star className="h-5 w-5 mr-3 text-emerald-600 mt-0.5 shrink-0" />
                      <div>
                        <h4 className="font-medium text-slate-800">রেটিং</h4>
                        <div className="flex items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < selectedInstitution.rating ? "text-yellow-500 fill-yellow-500" : "text-slate-300"
                              }`}
                            />
                          ))}
                          <span className="ml-2 text-slate-600">({selectedInstitution.rating})</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  {selectedInstitution.courses && selectedInstitution.courses.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-4 text-slate-800">কোর্স সমূহ</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedInstitution.courses.map((course: string, index: number) => (
                          <div key={index} className="flex items-center p-2 bg-slate-50 rounded-md">
                            <GraduationCap className="h-4 w-4 mr-2 text-emerald-600" />
                            <span className="text-slate-700">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedInstitution.facilities && selectedInstitution.facilities.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-slate-800">সুবিধাসমূহ</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedInstitution.facilities.map((facility: string, index: number) => (
                          <div key={index} className="flex items-center p-2 bg-slate-50 rounded-md">
                            <div className="h-2 w-2 rounded-full bg-emerald-600 mr-2"></div>
                            <span className="text-slate-700">{facility}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <Separator className="my-6" />

              <DialogFooter className="flex flex-col sm:flex-row gap-3 sm:justify-between">
                <div className="flex gap-3">
                  <Button onClick={() => setSelectedInstitution(null)} variant="outline">
                    বন্ধ করুন
                  </Button>
                  {selectedInstitution.website && (
                    <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                      <a
                        href={selectedInstitution.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Globe className="h-4 w-4 mr-2" />
                        ওয়েবসাইট দেখুন
                      </a>
                    </Button>
                  )}
                </div>
                <div className="flex items-center text-sm text-slate-500">
                  <span>সর্বশেষ আপডেট: {selectedInstitution.lastUpdated || "জানুয়ারি ২০২৪"}</span>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  )
}

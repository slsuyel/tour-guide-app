"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Globe, Linkedin, Mail, Twitter, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

// Sample contributor data
const contributors = [
  {
    id: 1,
    name: "আব্দুল করিম",
    englishName: "Abdul Karim",
    role: "প্রকল্প পরিচালক",
    bio: "পঞ্চগড় জেলা তথ্য ওয়েবসাইটের প্রকল্প পরিচালক। ১০ বছরেরও বেশি সময় ধরে ডিজিটাল বাংলাদেশ গড়ার লক্ষ্যে কাজ করে যাচ্ছেন।",
    image: "/professional-man-glasses.png",
    email: "abdul.karim@example.com",
    social: {
      linkedin: "https://linkedin.com/in/abdulkarim",
      twitter: "https://twitter.com/abdulkarim",
      github: "https://github.com/abdulkarim",
    },
    contributions: ["প্রকল্প পরিকল্পনা", "সার্বিক তত্ত্বাবধান", "সরকারি সংযোগ স্থাপন"],
  },
  {
    id: 2,
    name: "নাজমা বেগম",
    englishName: "Nazma Begum",
    role: "তথ্য সংগ্রাহক",
    bio: "পঞ্চগড় জেলার বিভিন্ন উপজেলা থেকে তথ্য সংগ্রহ ও যাচাই-বাছাই করে ওয়েবসাইটে প্রকাশের জন্য প্রস্তুত করেন।",
    image: "/professional-woman-hijab.png",
    email: "nazma.begum@example.com",
    social: {
      linkedin: "https://linkedin.com/in/nazmabegum",
    },
    contributions: ["তথ্য সংগ্রহ", "তথ্য যাচাই-বাছাই", "ডাটা এন্ট্রি"],
  },
  {
    id: 3,
    name: "রফিকুল ইসলাম",
    englishName: "Rafiqul Islam",
    role: "ওয়েব ডেভেলপার",
    bio: "৫ বছরের অভিজ্ঞতাসম্পন্ন ফুল-স্ট্যাক ডেভেলপার। পঞ্চগড় জেলা তথ্য ওয়েবসাইটের ডিজাইন ও ডেভেলপমেন্ট কাজে নেতৃত্ব দিয়েছেন।",
    image: "/professional-bearded-man.png",
    email: "rafiqul.islam@example.com",
    social: {
      linkedin: "https://linkedin.com/in/rafiqulislam",
      github: "https://github.com/rafiqulislam",
      website: "https://rafiqulislam.dev",
    },
    contributions: ["ওয়েবসাইট ডিজাইন", "ফ্রন্টএন্ড ডেভেলপমেন্ট", "ব্যাকএন্ড ডেভেলপমেন্ট", "API ইন্টিগ্রেশন"],
  },
  {
    id: 4,
    name: "সুমাইয়া আক্তার",
    englishName: "Sumaiya Akter",
    role: "UI/UX ডিজাইনার",
    bio: "ক্রিয়েটিভ ডিজাইনার হিসেবে ৪ বছরের অভিজ্ঞতা। পঞ্চগড় জেলা তথ্য ওয়েবসাইটের ইউজার ইন্টারফেস ও এক্সপেরিয়েন্স ডিজাইন করেছেন।",
    image: "/professional-woman-designer.png",
    email: "sumaiya.akter@example.com",
    social: {
      linkedin: "https://linkedin.com/in/sumaiyaakter",
      twitter: "https://twitter.com/sumaiyaakter",
      website: "https://sumaiyaakter.design",
    },
    contributions: ["UI/UX ডিজাইন", "প্রোটোটাইপিং", "ইউজার টেস্টিং", "ভিজ্যুয়াল ডিজাইন"],
  },
  {
    id: 5,
    name: "মাহমুদুল হাসান",
    englishName: "Mahmudul Hasan",
    role: "কন্টেন্ট রাইটার",
    bio: "বাংলা ও ইংরেজি ভাষায় দক্ষ কন্টেন্ট রাইটার। পঞ্চগড় জেলার ইতিহাস, ঐতিহ্য ও বিভিন্ন তথ্য সম্পর্কে লিখেছেন।",
    image: "/placeholder-ldib4.png",
    email: "mahmudul.hasan@example.com",
    social: {
      linkedin: "https://linkedin.com/in/mahmudulhasan",
      twitter: "https://twitter.com/mahmudulhasan",
    },
    contributions: ["কন্টেন্ট রাইটিং", "কপি এডিটিং", "অনুবাদ", "প্রুফরিডিং"],
  },
  {
    id: 6,
    name: "তানজিনা তাবাসসুম",
    englishName: "Tanjina Tabassum",
    role: "ডাটা এনালিস্ট",
    bio: "পরিসংখ্যান ও ডাটা এনালিসিসে দক্ষ। পঞ্চগড় জেলার বিভিন্ন পরিসংখ্যান বিশ্লেষণ ও ভিজ্যুয়ালাইজেশন করেছেন।",
    image: "/placeholder-b65o9.png",
    email: "tanjina.tabassum@example.com",
    social: {
      linkedin: "https://linkedin.com/in/tanjinatabassum",
      github: "https://github.com/tanjinatabassum",
    },
    contributions: ["ডাটা এনালিসিস", "ডাটা ভিজ্যুয়ালাইজেশন", "পরিসংখ্যান বিশ্লেষণ"],
  },
  {
    id: 7,
    name: "আরিফুল ইসলাম",
    englishName: "Ariful Islam",
    role: "ফটোগ্রাফার",
    bio: "পেশাদার ফটোগ্রাফার হিসেবে ৭ বছরের অভিজ্ঞতা। পঞ্চগড় জেলার বিভিন্ন স্থান, ঐতিহ্য ও সংস্কৃতির ছবি তুলেছেন।",
    image: "/placeholder-lt3yp.png",
    email: "ariful.islam@example.com",
    social: {
      website: "https://arifulislam.photography",
      instagram: "https://instagram.com/arifulislam",
    },
    contributions: ["ফটোগ্রাফি", "ইমেজ এডিটিং", "ভিজ্যুয়াল কন্টেন্ট"],
  },
  {
    id: 8,
    name: "সাদিয়া আফরিন",
    englishName: "Sadia Afrin",
    role: "প্রজেক্ট কো-অর্ডিনেটর",
    bio: "প্রকল্প ব্যবস্থাপনায় দক্ষ। পঞ্চগড় জেলা তথ্য ওয়েবসাইট প্রকল্পের সমন্বয়ক হিসেবে দায়িত্ব পালন করেছেন।",
    image: "/placeholder-2imqv.png",
    email: "sadia.afrin@example.com",
    social: {
      linkedin: "https://linkedin.com/in/sadiaafrin",
    },
    contributions: ["প্রকল্প সমন্বয়", "সময়সূচি ব্যবস্থাপনা", "টিম কো-অর্ডিনেশন", "রিপোর্টিং"],
  },
]

export default function Contributors() {
  const [selectedContributor, setSelectedContributor] = useState<any>(null)

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
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">অবদানকারীগণ</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              পঞ্চগড় জেলা তথ্য ওয়েবসাইট তৈরিতে যাঁরা অবদান রেখেছেন তাঁদের পরিচিতি। এই সকল অবদানকারীদের অক্লান্ত পরিশ্রম ও নিষ্ঠার কারণে এই
              প্রকল্প সফলভাবে বাস্তবায়িত হয়েছে।
            </p>
          </div>

          {/* Contributors Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {contributors.map((contributor, index) => (
              <motion.div
                key={contributor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-4">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 mb-4">
                      {contributor.image ? (
                        <img
                          src={"https://drjollydiagnostics.com/wp-content/uploads/2017/11/profile-placeholder.png"}
                          alt={contributor.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-purple-100">
                          <User className="h-12 w-12 text-purple-500" />
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 text-center">{contributor.name}</h3>
                    <p className="text-sm text-gray-500 mb-2 text-center">{contributor.englishName}</p>
                    <div className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full mb-3">
                      {contributor.role}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm line-clamp-3 mb-4 text-center">{contributor.bio}</p>

                  <Button
                    onClick={() => setSelectedContributor(contributor)}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    বিস্তারিত দেখুন
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team Information */}
          <div className="mt-16 bg-white rounded-xl shadow-sm p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">আমাদের টিম</h2>
            <p className="text-gray-600 mb-6">
              পঞ্চগড় জেলা তথ্য ওয়েবসাইট একটি দলগত প্রচেষ্টার ফসল। বিভিন্ন পেশা ও দক্ষতার মানুষ একত্রিত হয়ে এই প্রকল্পটি সফলভাবে বাস্তবায়ন
              করেছেন। আমরা সকলেই পঞ্চগড় জেলার উন্নয়নে অবদান রাখার লক্ষ্যে কাজ করে যাচ্ছি।
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                যোগাযোগ করুন
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">আরও জানুন</Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contributor Details Modal */}
      {selectedContributor && (
        <Dialog open={!!selectedContributor} onOpenChange={() => setSelectedContributor(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{selectedContributor.name}</DialogTitle>
              <DialogDescription className="text-purple-600 font-medium">{selectedContributor.role}</DialogDescription>
            </DialogHeader>

            <div className="grid md:grid-cols-3 gap-6 mt-4">
              <div className="md:col-span-1 flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 mb-4">
                  {selectedContributor.image ? (
                    <img
                      src={"https://drjollydiagnostics.com/wp-content/uploads/2017/11/profile-placeholder.png"}
                      alt={selectedContributor.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-purple-100">
                      <User className="h-16 w-16 text-purple-500" />
                    </div>
                  )}
                </div>

                <div className="space-y-2 w-full">
                  {selectedContributor.email && (
                    <a
                      href={`mailto:${selectedContributor.email}`}
                      className="flex items-center justify-center gap-2 p-2 bg-gray-100 rounded-md text-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      <span className="text-sm">ইমেইল</span>
                    </a>
                  )}

                  {selectedContributor.social && (
                    <div className="flex justify-center gap-2 mt-3">
                      {selectedContributor.social.linkedin && (
                        <a
                          href={selectedContributor.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 transition-colors"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {selectedContributor.social.twitter && (
                        <a
                          href={selectedContributor.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-sky-100 rounded-full text-sky-500 hover:bg-sky-200 transition-colors"
                        >
                          <Twitter className="h-4 w-4" />
                        </a>
                      )}
                      {selectedContributor.social.github && (
                        <a
                          href={selectedContributor.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 transition-colors"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      {selectedContributor.social.website && (
                        <a
                          href={selectedContributor.social.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-green-100 rounded-full text-green-600 hover:bg-green-200 transition-colors"
                        >
                          <Globe className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">পরিচিতি</h3>
                <p className="text-gray-600 mb-6">{selectedContributor.bio}</p>

                <h3 className="text-lg font-semibold mb-2 text-gray-800">অবদান</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {selectedContributor.contributions.map((contribution: string, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-center p-2 bg-purple-50 border border-purple-100 rounded-md text-purple-800"
                    >
                      <div className="h-2 w-2 rounded-full bg-purple-500 mr-2"></div>
                      <span>{contribution}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">যোগাযোগ</h3>
                  <p className="text-gray-600">
                    {selectedContributor.name}-এর সাথে যোগাযোগ করতে ইমেইল করুন অথবা সোশ্যাল মিডিয়া লিংকে ভিজিট করুন।
                  </p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

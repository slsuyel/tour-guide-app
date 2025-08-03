"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Users, Calendar, Phone, Info, CheckCircle, ChevronDown, ChevronUp, X } from 'lucide-react'

// Array of multiple stadiums
const stadiumsData = [
  {
    id: 1,
    name: "পঞ্চগড় স্টেডিয়াম",
    location: "পঞ্চগড় সদর, পঞ্চগড়",
    capacity: "৫,০০০ দর্শক",
    established: "২০০৫ সাল",
    description: "পঞ্চগড় স্টেডিয়াম জেলা ও আশপাশের অঞ্চলের খেলাধুলার প্রধান স্থান। এখানে ক্রিকেট, ফুটবলসহ বিভিন্ন খেলাধুলার আয়োজন হয়ে থাকে।",
    facilities: ["ক্রিকেট মাঠ", "ফুটবল মাঠ", "জগিং ট্র্যাক", "শিক্ষণ কেন্দ্র", "পার্কিং ব্যবস্থা"],
    contact: "০১৭XXXXXXXX",
    color: "from-green-600 to-emerald-700",
    lightColor: "bg-green-50 border-green-100",
    iconColor: "text-green-600",
  },
  {
    id: 2,
    name: "বোদা উপজেলা স্টেডিয়াম",
    location: "বোদা, পঞ্চগড়",
    capacity: "৩,০০০ দর্শক",
    established: "২০১০ সাল",
    description: "বোদা উপজেলা স্টেডিয়াম স্থানীয় খেলাধুলার একটি গুরুত্বপূর্ণ কেন্দ্র। এখানে নিয়মিত ফুটবল ও ক্রিকেট টুর্নামেন্ট অনুষ্ঠিত হয়।",
    facilities: ["ফুটবল মাঠ", "ক্রিকেট প্র্যাকটিস পিচ", "দর্শক গ্যালারি", "পার্কিং"],
    contact: "০১৮XXXXXXXX",
    color: "from-blue-600 to-indigo-700",
    lightColor: "bg-blue-50 border-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 3,
    name: "দেবীগঞ্জ মিনি স্টেডিয়াম",
    location: "দেবীগঞ্জ, পঞ্চগড়",
    capacity: "২,০০০ দর্শক",
    established: "২০১৫ সাল",
    description: "দেবীগঞ্জ মিনি স্টেডিয়াম স্থানীয় যুবকদের খেলাধুলার জন্য নির্মিত একটি আধুনিক স্টেডিয়াম। এখানে বিভিন্ন প্রতিযোগিতা অনুষ্ঠিত হয়।",
    facilities: ["মাল্টিপারপাস কোর্ট", "ফুটবল মাঠ", "ফিটনেস সেন্টার", "ক্যান্টিন"],
    contact: "০১৯XXXXXXXX",
    color: "from-amber-500 to-orange-600",
    lightColor: "bg-amber-50 border-amber-100",
    iconColor: "text-amber-600",
  },
]

export default function Stadiums() {
  const [selectedStadium, setSelectedStadium] = useState<number | null>(null)
  const [expandedStadium, setExpandedStadium] = useState<number | null>(null)

  const handleStadiumClick = (id: number) => {
    setSelectedStadium(id)
  }

  const handleCloseDetails = () => {
    setSelectedStadium(null)
  }

  const toggleExpand = (id: number) => {
    setExpandedStadium(expandedStadium === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">পঞ্চগড় জেলার স্টেডিয়ামসমূহ</h1>
            <p className="text-gray-600">পঞ্চগড় জেলার বিভিন্ন উপজেলায় অবস্থিত খেলার মাঠ ও স্টেডিয়ামের তথ্য</p>
          </div>

          {/* Stadium List */}
          {selectedStadium === null ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stadiumsData.map((stadium, index) => (
                <motion.div
                  key={stadium.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => handleStadiumClick(stadium.id)}
                >
                  {/* Stadium Card Header */}
                  <div className={`h-24 bg-gradient-to-r ${stadium.color} p-4 flex flex-col justify-center`}>
                    <h2 className="text-xl font-bold text-white">{stadium.name}</h2>
                    <p className="text-white text-opacity-90 flex items-center gap-1 text-sm">
                      <MapPin className="h-3 w-3" />
                      {stadium.location}
                    </p>
                  </div>

                  {/* Stadium Card Info */}
                  <div className="p-4">
                    <div className="grid grid-cols-3 gap-2 text-center mb-3">
                      <div>
                        <p className="text-xs text-gray-500">ক্ষমতা</p>
                        <p className="font-medium text-sm">{stadium.capacity}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">প্রতিষ্ঠিত</p>
                        <p className="font-medium text-sm">{stadium.established}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">সুবিধা</p>
                        <p className="font-medium text-sm">{stadium.facilities.length}টি</p>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex justify-center">
                      <button className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors">
                        বিস্তারিত দেখুন
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            // Stadium Details View
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-md overflow-hidden relative"
              >
                {/* Close Button */}
                <button
                  onClick={handleCloseDetails}
                  className="absolute top-4 right-4 z-10 bg-white bg-opacity-80 p-1 rounded-full"
                >
                  <X className="h-5 w-5 text-gray-700" />
                </button>

                {stadiumsData
                  .filter((stadium) => stadium.id === selectedStadium)
                  .map((stadium) => (
                    <div key={stadium.id}>
                      {/* Stadium Header */}
                      <div className={`relative h-48 md:h-64 bg-gradient-to-r ${stadium.color} flex items-center justify-center`}>
                        <div className="text-center text-white p-6">
                          <h1 className="text-3xl md:text-4xl font-bold mb-2">{stadium.name}</h1>
                          <p className="text-white text-opacity-90 flex items-center justify-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {stadium.location}
                          </p>
                        </div>
                      </div>

                      {/* Stadium Info */}
                      <div className="p-6">
                        {/* Quick Info */}
                        <div className="grid grid-cols-3 divide-x divide-gray-100 border border-gray-100 rounded-lg mb-6">
                          <div className="p-4 flex flex-col items-center justify-center">
                            <Users className={`h-5 w-5 ${stadium.iconColor} mb-1`} />
                            <p className="text-sm text-gray-500">ক্ষমতা</p>
                            <p className="font-medium">{stadium.capacity}</p>
                          </div>
                          <div className="p-4 flex flex-col items-center justify-center">
                            <Calendar className={`h-5 w-5 ${stadium.iconColor} mb-1`} />
                            <p className="text-sm text-gray-500">প্রতিষ্ঠিত</p>
                            <p className="font-medium">{stadium.established}</p>
                          </div>
                          <div className="p-4 flex flex-col items-center justify-center">
                            <Phone className={`h-5 w-5 ${stadium.iconColor} mb-1`} />
                            <p className="text-sm text-gray-500">যোগাযোগ</p>
                            <p className="font-medium">{stadium.contact}</p>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="flex items-start gap-3 mb-6">
                          <Info className={`h-5 w-5 ${stadium.iconColor} mt-1 flex-shrink-0`} />
                          <p className="text-gray-700 leading-relaxed">{stadium.description}</p>
                        </div>

                        {/* Facilities */}
                        <div className="mt-6">
                          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-gray-800">
                            <span className={`w-8 h-8 rounded-full ${stadium.lightColor} flex items-center justify-center`}>
                              <CheckCircle className={`h-5 w-5 ${stadium.iconColor}`} />
                            </span>
                            সুবিধাসমূহ
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                            {stadium.facilities.map((facility, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                className={`flex items-center gap-2 p-3 rounded-lg ${stadium.lightColor}`}
                              >
                                <CheckCircle className={`h-4 w-4 ${stadium.iconColor}`} />
                                <span>{facility}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Visit Info */}
                        <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
                          <h4 className="font-medium text-gray-800 mb-2">ভ্রমণ তথ্য</h4>
                          <p className="text-sm text-gray-600">
                            স্টেডিয়াম সকাল ৬টা থেকে সন্ধ্যা ৭টা পর্যন্ত খোলা থাকে। বিশেষ খেলার দিনে টিকেট কাউন্টার থেকে প্রবেশপত্র সংগ্রহ করতে হবে।
                          </p>
                        </div>

                        {/* Back Button */}
                        <div className="mt-6 flex justify-center">
                          <button
                            onClick={handleCloseDetails}
                            className={`px-6 py-2 bg-gradient-to-r ${stadium.color} text-white rounded-full hover:opacity-90 transition-opacity`}
                          >
                            তালিকায় ফিরে যান
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </motion.div>
            </AnimatePresence>
          )}

          {/* Mobile View - Accordion Style */}
          <div className="md:hidden mt-8">
            <h2 className="text-xl font-bold mb-4 text-gray-800">সকল স্টেডিয়াম</h2>
            {stadiumsData.map((stadium) => (
              <div key={stadium.id} className="mb-3 bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleExpand(stadium.id)}
                  className={`w-full p-4 flex items-center justify-between bg-gradient-to-r ${stadium.color} text-white`}
                >
                  <span className="font-medium">{stadium.name}</span>
                  {expandedStadium === stadium.id ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                
                {expandedStadium === stadium.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4"
                  >
                    <p className="text-sm text-gray-700 mb-3">{stadium.description}</p>
                    <div className="grid grid-cols-2 gap-2 text-center mb-3">
                      <div className="p-2 bg-gray-50 rounded">
                        <p className="text-xs text-gray-500">ক্ষমতা</p>
                        <p className="font-medium">{stadium.capacity}</p>
                      </div>
                      <div className="p-2 bg-gray-50 rounded">
                        <p className="text-xs text-gray-500">প্রতিষ্ঠিত</p>
                        <p className="font-medium">{stadium.established}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleStadiumClick(stadium.id)}
                      className="w-full mt-2 px-4 py-2 bg-gray-100 rounded text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      বিস্তারিত দেখুন
                    </button>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

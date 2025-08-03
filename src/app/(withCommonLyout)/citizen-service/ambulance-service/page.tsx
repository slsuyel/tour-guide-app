"use client"
import { motion } from "framer-motion"
import { Phone, Clock, MapPin, Truck, AlertCircle, Heart, Users, CheckCircle } from "lucide-react"

export default function AmbulanceService() {
  const ambulanceContacts = [
    {
      area: "পঞ্চগড় সদর",
      phone: "০১৭XXXXXXXXXXX",
      address: "পঞ্চগড় সদর হাসপাতাল সংলগ্ন, পঞ্চগড়",
    },
    {
      area: "বোদা",
      phone: "০১৭XXXXXXXXXXX",
      address: "বোদা উপজেলা স্বাস্থ্য কমপ্লেক্স, বোদা",
    },
    {
      area: "দেবীগঞ্জ",
      phone: "০১৭XXXXXXXXXXX",
      address: "দেবীগঞ্জ উপজেলা স্বাস্থ্য কমপ্লেক্স, দেবীগঞ্জ",
    },
    {
      area: "আটোয়ারী",
      phone: "০১৭XXXXXXXXXXX",
      address: "আটোয়ারী উপজেলা স্বাস্থ্য কমপ্লেক্স, আটোয়ারী",
    },
    {
      area: "তেঁতুলিয়া",
      phone: "০১৭XXXXXXXXXXX",
      address: "তেঁতুলিয়া উপজেলা স্বাস্থ্য কমপ্লেক্স, তেঁতুলিয়া",
    },
  ]

  const ambulanceTypes = [
    {
      type: "বেসিক অ্যাম্বুলেন্স",
      features: ["প্রাথমিক চিকিৎসা সরঞ্জাম", "অক্সিজেন সিলিন্ডার", "স্ট্রেচার", "হুইল চেয়ার"],
      price: "১,৫০০ - ২,৫০০ টাকা",
    },
    {
      type: "অ্যাডভান্সড অ্যাম্বুলেন্স",
      features: ["প্রাথমিক চিকিৎসা সরঞ্জাম", "অক্সিজেন সিলিন্ডার", "কার্ডিয়াক মনিটর", "ডেফিব্রিলেটর", "ভেন্টিলেটর", "প্যারামেডিক স্টাফ"],
      price: "৩,০০০ - ৫,০০০ টাকা",
    },
    {
      type: "আইসিইউ অ্যাম্বুলেন্স",
      features: [
        "অত্যাধুনিক জীবন রক্ষাকারী যন্ত্রপাতি",
        "ভেন্টিলেটর",
        "কার্ডিয়াক মনিটর",
        "ডেফিব্রিলেটর",
        "সাকশন মেশিন",
        "ইনফিউশন পাম্প",
        "মেডিকেল অক্সিজেন সিলিন্ডার",
        "মেডিকেল স্টাফ",
      ],
      price: "৬,০০০ - ১০,০০০ টাকা",
    },
  ]

  const emergencyNumbers = [
    { name: "অ্যাম্বুলেন্স কন্ট্রোল রুম", number: "০১৭XXXXXXXXXXX" },
    { name: "পঞ্চগড় সদর হাসপাতাল", number: "০৫৬৮-৬১৩৪৫" },
    { name: "জাতীয় জরুরি সেবা", number: "৯৯৯" },
    { name: "স্বাস্থ্য বাতায়ন", number: "১৬২৬৩" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto"
        >
          {/* Header */}
          <div className="relative h-48 md:h-64 rounded-t-xl overflow-hidden mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white flex items-center justify-center">
              <div className="text-center text-white p-6">
                <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center justify-center gap-2">
                  <Truck className="h-8 w-8" />
                  পঞ্চগড় অ্যাম্বুলেন্স সেবা
                </h1>
                <p className="text-red-100">২৪/৭ জরুরি অ্যাম্বুলেন্স সেবা</p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                <Heart className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2 text-gray-800">আমাদের লক্ষ্য</h2>
                <p className="text-gray-700 leading-relaxed">
                  পঞ্চগড় জেলার বিভিন্ন প্রান্তে দ্রুত এবং নির্ভরযোগ্য অ্যাম্বুলেন্স সেবা পৌঁছে দিতে আমরা প্রতিশ্রুতিবদ্ধ। স্বাস্থ্যসেবা পৌঁছে দেওয়ার
                  ক্ষেত্রে সময়ই সবচেয়ে বড় ফ্যাক্টর। তাই আমরা ২৪ ঘণ্টা প্রস্তুত — আপনার প্রয়োজনে, আপনার পাশে।
                </p>
              </div>
            </div>
          </div>

          {/* Emergency Numbers - Prominent Display */}
          <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-red-800 flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              জরুরি যোগাযোগ নম্বরসমূহ
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {emergencyNumbers.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-3 text-center shadow-sm border border-red-100"
                >
                  <p className="text-sm text-gray-600">{contact.name}</p>
                  <p className="text-xl font-bold text-red-600">{contact.number}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* How to Request */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
            <div className="py-4 px-6 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white text-white">
              <h2 className="text-xl font-bold">অ্যাম্বুলেন্স কিভাবে পাবেন</h2>
              <p className="text-sm opacity-90">সহজ ৩ ধাপে অ্যাম্বুলেন্স সেবা পেতে</p>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-red-600">১</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">কল করুন</h3>
                    <p className="text-gray-600">আপনার নিকটস্থ অ্যাম্বুলেন্স সেবা কেন্দ্রে কল করুন অথবা কন্ট্রোল রুমে যোগাযোগ করুন।</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-red-600">২</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">তথ্য দিন</h3>
                    <p className="text-gray-600">রোগীর অবস্থা, ঠিকানা এবং প্রয়োজনীয় অ্যাম্বুলেন্সের ধরন সম্পর্কে জানান।</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-red-600">৩</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">অপেক্ষা করুন</h3>
                    <p className="text-gray-600">
                      আমাদের দক্ষ টিম দ্রুততম সময়ে আপনার ঠিকানায় পৌঁছে যাবে। সাধারণত ১০-১৫ মিনিটের মধ্যে শহর এলাকায় এবং ২০-৩০ মিনিটের
                      মধ্যে গ্রামীণ এলাকায়।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ambulance Types */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
            <div className="py-4 px-6 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white text-white">
              <h2 className="text-xl font-bold">অ্যাম্বুলেন্সের ধরন</h2>
              <p className="text-sm opacity-90">আমাদের বিভিন্ন ধরনের অ্যাম্বুলেন্স সেবা</p>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ambulanceTypes.map((ambulance, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <div className="bg-red-50 p-3 border-b border-gray-200">
                      <h3 className="font-bold text-gray-800">{ambulance.type}</h3>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2">
                        {ambulance.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-sm text-gray-500">সার্ভিস চার্জ</span>
                        <span className="font-semibold text-red-600">{ambulance.price}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">
                * দূরত্ব, সময় এবং সেবার ধরন অনুযায়ী মূল্য পরিবর্তন হতে পারে। সঠিক মূল্য জানতে কল করুন।
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
            <div className="py-4 px-6 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white text-white">
              <h2 className="text-xl font-bold">যোগাযোগ কেন্দ্রসমূহ</h2>
              <p className="text-sm opacity-90">পঞ্চগড় জেলার বিভিন্ন উপজেলায় আমাদের যোগাযোগ কেন্দ্র</p>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ambulanceContacts.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="border border-gray-200 rounded-lg p-4 hover:bg-red-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-red-500" />
                      {contact.area}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-700">{contact.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-700">{contact.address}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Service Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white p-4 rounded-xl shadow-sm text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-red-100 rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">২৪/৭ সেবা</h3>
              <p className="text-sm text-gray-600">দিনে-রাতে, সপ্তাহের সাতদিন, বছরের ৩৬৫ দিন সেবা প্রদান করি</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-white p-4 rounded-xl shadow-sm text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-red-100 rounded-full flex items-center justify-center">
                <Truck className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">আধুনিক অ্যাম্বুলেন্স</h3>
              <p className="text-sm text-gray-600">সকল অ্যাম্বুলেন্স আধুনিক চিকিৎসা সরঞ্জাম সহ সজ্জিত</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="bg-white p-4 rounded-xl shadow-sm text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-red-100 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">দক্ষ কর্মী</h3>
              <p className="text-sm text-gray-600">প্রশিক্ষিত প্যারামেডিক এবং চালক দ্বারা সেবা প্রদান</p>
            </motion.div>
          </div>

          {/* Important Notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6 shadow-sm">
            <h2 className="text-lg font-bold mb-2 text-yellow-800 flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              গুরুত্বপূর্ণ তথ্য
            </h2>
            <p className="text-gray-700">
              জরুরি অবস্থায় অ্যাম্বুলেন্স কল করার সময় রোগীর অবস্থা, ঠিকানা এবং যোগাযোগের নম্বর স্পষ্টভাবে জানান। অ্যাম্বুলেন্স আসার আগে প্রাথমিক
              চিকিৎসা দিন এবং রোগীকে স্থির রাখুন।
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

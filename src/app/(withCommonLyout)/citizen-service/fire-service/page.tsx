"use client"
import { motion } from "framer-motion"
import { Phone, Globe, Mail, User, AlertTriangle, Info, FileText, Flame, PhoneCall } from "lucide-react"

export default function FireService() {
  const fireStations = [
    {
      name: "পঞ্চগড় সদর ফায়ার স্টেশন",
      mobile: "০১৯০১০২৩২৯৭",
      website: "fireservice.portal.gov.bd",
    },
    {
      name: "তেঁতুলিয়া ফায়ার স্টেশন",
      mobile: "০১৯০১০২৩২৩৭",
      website: "fireservice.tetulia.panchagarh.gov.bd",
    },
    {
      name: "বোদা ফায়ার স্টেশন",
      mobile: "০১৯০১০২৩২৩৯",
      website: "fireservice.portal.gov.bd",
    },
    {
      name: "আটোয়ারী ফায়ার স্টেশন",
      mobile: "০১৯০১০২৩২৪১",
      website: "",
    },
    {
      name: "দেবীগঞ্জ ফায়ার স্টেশন",
      mobile: "০১৯০১০২৩২৪৩",
      website: "",
    },
  ]

  const emergencyContacts = [
    {
      name: "ফায়ার সার্ভিস হটলাইন",
      number: "১০২",
      icon: <Flame className="h-5 w-5 text-red-500" />,
    },
    {
      name: "জাতীয় জরুরি সেবা",
      number: "৯৯৯",
      icon: <AlertTriangle className="h-5 w-5 text-red-500" />,
    },
    {
      name: "তথ্য সেবা",
      number: "৩৩৩",
      icon: <Info className="h-5 w-5 text-blue-500" />,
    },
    {
      name: "বিকল্প ফায়ার সার্ভিস নম্বর",
      number: "১৬১৬৩",
      icon: <PhoneCall className="h-5 w-5 text-red-500" />,
    },
  ]

  const services = ["ই-ফায়ার লাইসেন্স আবেদন", "বহুতল ভবনের অনাপত্তি সনদ", "ফায়ার সেফটি প্রশিক্ষণ", "ভলান্টিয়ার প্রশিক্ষণ কোর্স"]

  const websites = [
    {
      name: "পঞ্চগড় ফায়ার সার্ভিস",
      url: "fireservice.panchagarh.gov.bd",
    },
    {
      name: "তেঁতুলিয়া ফায়ার সার্ভিস",
      url: "fireservice.tetulia.panchagarh.gov.bd",
    },
  ]

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
          <div className="relative h-48 md:h-64 rounded-t-xl overflow-hidden mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 flex items-center justify-center">
              <div className="text-center text-white p-6">
                <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center justify-center gap-2">
                  <Flame className="h-8 w-8" />
                  পঞ্চগড় জেলার ফায়ার সার্ভিস স্টেশনসমূহ
                </h1>
                <p className="text-red-100">জরুরি অবস্থায় যোগাযোগের তথ্য</p>
              </div>
            </div>
          </div>

          {/* Emergency Contacts - Prominent Display */}
          <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-red-800 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              জরুরি যোগাযোগ নম্বরসমূহ
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {emergencyContacts.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-3 text-center shadow-sm border border-red-100"
                >
                  <div className="flex justify-center mb-2">{contact.icon}</div>
                  <p className="text-sm text-gray-600">{contact.name}</p>
                  <p className="text-xl font-bold text-red-600">{contact.number}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Fire Stations */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
            <div className="py-4 px-6 bg-gradient-to-r from-red-600 to-orange-500 text-white">
              <h2 className="text-xl font-bold">ফায়ার স্টেশনসমূহ</h2>
              <p className="text-sm opacity-90">পঞ্চগড় জেলার বিভিন্ন উপজেলার ফায়ার স্টেশনের যোগাযোগ তথ্য</p>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fireStations.map((station, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="border border-gray-200 rounded-lg p-4 hover:bg-red-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <Flame className="h-5 w-5 text-red-500" />
                      {station.name}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-700">{station.mobile}</span>
                      </div>
                      {station.website && (
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-gray-500" />
                          <a
                            href={`https://${station.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-sm"
                          >
                            {station.website}
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* District Administration */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
            <div className="py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <h2 className="text-xl font-bold">জেলা ফায়ার সার্ভিস প্রশাসন</h2>
              <p className="text-sm opacity-90">উপসহকারী পরিচালক, পঞ্চগড়</p>
            </div>

            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto md:mx-0">
                  <User className="h-12 w-12 text-gray-400" />
                </div>
                <div className="space-y-2 text-center md:text-left">
                  <h3 className="text-lg font-semibold">মোঃ ফরহাদ হোসেন</h3>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700">অফিস ফোন: ০২৫৮৭৭-১৮১৮০</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700">মোবাইল: ০১৯০১০২৩২০৯</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <a href="mailto:dadpcg@fireservice.gov.bd" className="text-blue-600 hover:underline">
                        dadpcg@fireservice.gov.bd
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services and Websites - Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Services */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="py-4 px-6 bg-gradient-to-r from-green-600 to-teal-500 text-white">
                <h2 className="text-xl font-bold">সেবাসমূহ</h2>
                <p className="text-sm opacity-90">ফায়ার সার্ভিস দ্বারা প্রদত্ত সেবা</p>
              </div>

              <div className="p-4">
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-2 p-3 rounded-lg bg-green-50 border border-green-100"
                    >
                      <FileText className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>{service}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Websites */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="py-4 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <h2 className="text-xl font-bold">অফিসিয়াল ওয়েবসাইট</h2>
                <p className="text-sm opacity-90">ফায়ার সার্ভিসের অফিসিয়াল ওয়েবসাইট</p>
              </div>

              <div className="p-4">
                <ul className="space-y-3">
                  {websites.map((website, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-2 p-3 rounded-lg bg-purple-50 border border-purple-100"
                    >
                      <Globe className="h-5 w-5 text-purple-600 flex-shrink-0" />
                      <a
                        href={`https://${website.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {website.name}: {website.url}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6 shadow-sm">
            <h2 className="text-lg font-bold mb-2 text-yellow-800 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              গুরুত্বপূর্ণ তথ্য
            </h2>
            <p className="text-gray-700">
              আগুন লাগলে অথবা যেকোনো দুর্ঘটনায় অবিলম্বে ফায়ার সার্ভিসের হটলাইন নম্বরে (১০২) যোগাযোগ করুন। আপনার সঠিক ঠিকানা ও দুর্ঘটনার ধরন
              সম্পর্কে স্পষ্ট তথ্য দিন।
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

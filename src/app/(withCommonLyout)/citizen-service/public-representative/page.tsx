"use client"

import { useState } from "react"
import { FileText, Download, Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export default function UnionOfficials() {
  const [searchTerm, setSearchTerm] = useState("")

  const upazilas = [
    {
      id: 1,
      name: "পঞ্চগড় সদর",
      pdfLink: "https://www.panchagarh.gov.bd/bn/site/files/%E0%A6%AA%E0%A6%9E%E0%A7%8D%E0%A6%9A%E0%A6%97%E0%A7%9C-%E0%A6%B8%E0%A6%A6%E0%A6%B0-%E0%A6%89%E0%A6%AA%E0%A6%9C%E0%A7%87%E0%A6%B2%E0%A6%BE%E0%A6%B0-%E0%A6%B8%E0%A6%95%E0%A6%B2-%E0%A6%87%E0%A6%89%E0%A6%A8%E0%A6%BF%E0%A7%9F%E0%A6%A8%E0%A7%87%E0%A6%B0-%E0%A6%9A%E0%A7%87%E0%A7%9F%E0%A6%BE%E0%A6%B0%E0%A6%AE%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8,-%E0%A6%B8%E0%A6%A6%E0%A6%B8%E0%A7%8D%E0%A6%AF-%E0%A6%93-%E0%A6%B8%E0%A6%9A%E0%A6%BF%E0%A6%AC%E0%A6%97%E0%A6%A3%E0%A7%87%E0%A6%B0-%E0%A6%A8%E0%A6%BE%E0%A6%AE-%E0%A6%93-%E0%A6%AE%E0%A7%8B%E0%A6%AC%E0%A6%BE%E0%A6%87%E0%A6%B2-%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%B0"
    },
    {
      id: 2,
      name: "বোদা",
      pdfLink: "https://www.panchagarh.gov.bd/bn/site/files/%E0%A6%AC%E0%A7%8B%E0%A6%A6%E0%A6%BE-%E0%A6%89%E0%A6%AA%E0%A6%9C%E0%A7%87%E0%A6%B2%E0%A6%BE%E0%A6%B0-%E0%A6%B8%E0%A6%95%E0%A6%B2-%E0%A6%87%E0%A6%89%E0%A6%A8%E0%A6%BF%E0%A7%9F%E0%A6%A8%E0%A7%87%E0%A6%B0-%E0%A6%9A%E0%A7%87%E0%A7%9F%E0%A6%BE%E0%A6%B0%E0%A6%AE%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8,-%E0%A6%B8%E0%A6%A6%E0%A6%B8%E0%A7%8D%E0%A6%AF-%E0%A6%93-%E0%A6%B8%E0%A6%9A%E0%A6%BF%E0%A6%AC%E0%A6%97%E0%A6%A3%E0%A7%87%E0%A6%B0-%E0%A6%A8%E0%A6%BE%E0%A6%AE-%E0%A6%93-%E0%A6%AE%E0%A7%8B%E0%A6%AC%E0%A6%BE%E0%A6%87%E0%A6%B2-%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%B0"
    },
    {
      id: 3,
      name: "আটোয়ারী",
      pdfLink: "https://www.panchagarh.gov.bd/bn/site/files/%E0%A6%86%E0%A6%9F%E0%A7%8B%E0%A7%9F%E0%A6%BE%E0%A6%B0%E0%A7%80-%E0%A6%89%E0%A6%AA%E0%A6%9C%E0%A7%87%E0%A6%B2%E0%A6%BE%E0%A6%B0-%E0%A6%B8%E0%A6%95%E0%A6%B2-%E0%A6%87%E0%A6%89%E0%A6%A8%E0%A6%BF%E0%A7%9F%E0%A6%A8%E0%A7%87%E0%A6%B0-%E0%A6%9A%E0%A7%87%E0%A7%9F%E0%A6%BE%E0%A6%B0%E0%A6%AE%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8,-%E0%A6%B8%E0%A6%A6%E0%A6%B8%E0%A7%8D%E0%A6%AF-%E0%A6%93-%E0%A6%B8%E0%A6%9A%E0%A6%BF%E0%A6%AC%E0%A6%97%E0%A6%A3%E0%A7%87%E0%A6%B0-%E0%A6%A8%E0%A6%BE%E0%A6%AE-%E0%A6%93-%E0%A6%AE%E0%A7%8B%E0%A6%AC%E0%A6%BE%E0%A6%87%E0%A6%B2-%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%B0"
    },
    {
      id: 4,
      name: "তেতুলিয়া",
      pdfLink: "https://www.panchagarh.gov.bd/bn/site/files/%E0%A6%A4%E0%A7%87%E0%A6%A4%E0%A7%81%E0%A6%B2%E0%A6%BF%E0%A7%9F%E0%A6%BE-%E0%A6%89%E0%A6%AA%E0%A6%9C%E0%A7%87%E0%A6%B2%E0%A6%BE%E0%A6%B0-%E0%A6%B8%E0%A6%95%E0%A6%B2-%E0%A6%87%E0%A6%89%E0%A6%A8%E0%A6%BF%E0%A7%9F%E0%A6%A8%E0%A7%87%E0%A6%B0-%E0%A6%9A%E0%A7%87%E0%A7%9F%E0%A6%BE%E0%A6%B0%E0%A6%AE%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8,-%E0%A6%B8%E0%A6%A6%E0%A6%B8%E0%A7%8D%E0%A6%AF-%E0%A6%93-%E0%A6%B8%E0%A6%9A%E0%A6%BF%E0%A6%AC%E0%A6%97%E0%A6%A3%E0%A7%87%E0%A6%B0-%E0%A6%A8%E0%A6%BE%E0%A6%AE-%E0%A6%93-%E0%A6%AE%E0%A7%8B%E0%A6%AC%E0%A6%BE%E0%A6%87%E0%A6%B2-%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%B0"
    },
    {
      id: 5,
      name: "দেবীগঞ্জ",
      pdfLink: "https://www.panchagarh.gov.bd/bn/site/files/%E0%A6%A6%E0%A7%87%E0%A6%AC%E0%A7%80%E0%A6%97%E0%A6%9E%E0%A7%8D%E0%A6%9C-%E0%A6%89%E0%A6%AA%E0%A6%9C%E0%A7%87%E0%A6%B2%E0%A6%BE%E0%A6%B0-%E0%A6%B8%E0%A6%95%E0%A6%B2-%E0%A6%87%E0%A6%89%E0%A6%A8%E0%A6%BF%E0%A7%9F%E0%A6%A8%E0%A7%87%E0%A6%B0-%E0%A6%9A%E0%A7%87%E0%A7%9F%E0%A6%BE%E0%A6%B0%E0%A6%AE%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8,-%E0%A6%B8%E0%A6%A6%E0%A6%B8%E0%A7%8D%E0%A6%AF-%E0%A6%93-%E0%A6%B8%E0%A6%9A%E0%A6%BF%E0%A6%AC%E0%A6%97%E0%A6%A3%E0%A7%87%E0%A6%B0-%E0%A6%A8%E0%A6%BE%E0%A6%AE-%E0%A6%93-%E0%A6%AE%E0%A7%8B%E0%A6%AC%E0%A6%BE%E0%A6%87%E0%A6%B2-%E0%A6%A8%E0%A6%BE%E0%A6%AE%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%B0"
    }
  ]

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const filteredUpazilas = upazilas.filter(upazila => 
    upazila.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <header className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-center">
            পঞ্চগড় জেলার সকল ইউনিয়নের চেয়ারম্যান, সদস্য ও সচিবের নাম ও মোবাইল নাম্বার
          </h1>
          <p className="text-center mt-2 text-purple-100">
            পঞ্চগড় জেলার বিভিন্ন উপজেলার ইউনিয়ন পরিষদের কর্মকর্তাদের তথ্য
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="relative max-w-md mx-auto mb-8">
          <div className="absolute left-3 top-3">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input 
            type="search" 
            placeholder="উপজেলা খুঁজুন..." 
            className="pl-10 py-6 rounded-xl border-2 border-gray-200 focus:border-purple-500 shadow-sm" 
            value={searchTerm} 
            onChange={handleSearch} 
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
        >
          <div className="py-4 px-6 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
            <h2 className="text-xl font-bold">উপজেলা অনুযায়ী তথ্য</h2>
            <p className="text-sm opacity-90">নিম্নলিখিত উপজেলাগুলির ইউনিয়ন পরিষদের কর্মকর্তাদের তথ্য ডাউনলোড করুন</p>
          </div>

          <div className="p-4">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-purple-50">
                    <th className="border border-gray-200 px-4 py-3 text-center w-16">ক্রমিক নং</th>
                    <th className="border border-gray-200 px-4 py-3 text-center">উপজেলার নাম</th>
                    <th className="border border-gray-200 px-4 py-3 text-center">ডাউনলোড</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUpazilas.map((upazila, index) => (
                    <motion.tr 
                      key={upazila.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      className="hover:bg-purple-50 transition-colors"
                    >
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        <div className="flex justify-center">
                          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-medium text-sm">
                            {upazila.id < 10 ? `০${upazila.id}` : upazila.id}
                          </div>
                        </div>
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center font-medium">
                        {upazila.name}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        <a 
                          href={upazila.pdfLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors"
                        >
                          <FileText className="h-5 w-5" />
                          <span className="hidden md:inline">পিডিএফ ডাউনলোড</span>
                          <span className="md:hidden">ডাউনলোড</span>
                        </a>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredUpazilas.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <p>কোন উপজেলা পাওয়া যায়নি।</p>
              </div>
            )}
          </div>
        </motion.div>

        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800">তথ্য সম্পর্কে</h2>
          <p className="text-gray-700 mb-4">
            এই পৃষ্ঠায় পঞ্চগড় জেলার সকল উপজেলার ইউনিয়ন পরিষদের চেয়ারম্যান, সদস্য ও সচিবদের নাম ও মোবাইল নম্বর সম্বলিত পিডিএফ ফাইল রয়েছে। 
            আপনি যে কোন উপজেলার তথ্য ডাউনলোড করতে উপরের টেবিলে দেওয়া "ডাউনলোড" বাটনে ক্লিক করুন।
          </p>
          <div className="flex items-center gap-2 text-purple-700 font-medium">
            <Download className="h-5 w-5" />
            <span>পিডিএফ ফাইল দেখতে আপনার ডিভাইসে পিডিএফ রিডার থাকতে হবে</span>
          </div>
        </div>
      </main>

    </div>
  )
}

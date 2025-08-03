"use client"
import { motion } from "framer-motion"
import { ExternalLink, Newspaper } from "lucide-react"

type NewsPortal = {
  name: string
  link?: string
  status?: string
  note?: string
}

const newsPortals: NewsPortal[] = [
  {
    name: "পঞ্চগড় নিউজ",
    link: "http://www.panchagarhnews.com/",
  },
  {
    name: "পঞ্চবার্তা (সাপ্তাহিক)",
    note: "পঞ্চগড় প্রেসক্লাব কর্তৃক প্রকাশিত",
  },
  {
    name: "পঞ্চপুরা পঞ্চগড় বার্তা (সাপ্তাহিক)",
    status: "বিলুপ্ত",
  },
  {
    name: "এই সময় (পাক্ষিক)",
    note: "পঞ্চগড় জেলার স্থানীয় খবরের কাগজ",
  },
  {
    name: "দেবীগঞ্জ সংবাদ",
    link: "https://debiganjsongbad.com/",
  },
]

export default function LocalNews() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Newspaper className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-center text-gray-800">পঞ্চগড় জেলার স্থানীয় সংবাদপত্র</h2>
          </div>

          <ul className="space-y-3">
            {newsPortals.map((portal, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-semibold text-gray-700">{portal.name}</span>
                    {portal.status && <span className="ml-2 text-sm text-red-500">({portal.status})</span>}
                    {portal.note && <p className="text-sm text-gray-600 mt-1">{portal.note}</p>}
                  </div>

                  {portal.link && (
                    <a
                      href={portal.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition"
                    >
                      <span>ভিজিট করুন</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>

          <div className="mt-8 pt-4 border-t border-gray-100 text-center text-sm text-gray-500">
            <p>উপরোক্ত তথ্য সর্বশেষ আপডেট: {new Date().toLocaleDateString("bn-BD")}</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

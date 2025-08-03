"use client"

import { useState, useEffect } from "react"
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export default function HatBazar() {
    const [activeTab, setActiveTab] = useState("পঞ্চগড় সদর")
    const [searchTerm, setSearchTerm] = useState("")
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkIfMobile()
        window.addEventListener("resize", checkIfMobile)

        return () => {
            window.removeEventListener("resize", checkIfMobile)
        }
    }, [])

    const markets: Record<string, string[]> = {
        "পঞ্চগড় সদর": [
            "আম কাঠাল হাট",
            "আমলাহার হাট",
            "কহুরুর হাট",
            "কাজির হাট",
            "গলেহা হাট",
            "গোয়ালঝাড় হাট",
            "চাকলাহাট",
            "জগদল হাট",
            "জয়বাংলা হাট",
            "জিয়াবাড়ী হাট",
            "ঝলই হাট",
            "টুনির হাট",
            "ঠেকরপাড়া হাট",
            "ঢাংগীপুখুরী হাট",
            "তালমা হাট",
            "দলুয়া হাট",
            "দশ মাইল হাট",
            "দেওয়ানহাট",
            "পানিমাছ পুকুরী হাট",
            "পুখুরীডাংগা হাট",
            "পুরাতন বোর্ড অফিস হাট",
            "পেত্নীর হাট",
        ],
        " দেবীগঞ্জ": [
            "ভাউলাগঞ্জ হাট",
            "টোকরাভাষা রামগঞ্জ বিলাসী হাট",
            "শালডাঙ্গা হাট",
            "কালীবাড়ি বাজার",
            "দেবীগঞ্জ হাট",
            "খোচাবাড়ী হাট",
            "ঢাঙ্গীর হাট",
            "শান্তিরহাট",
            "ফুলবাড়ী হাট",
            "শীবের হাট",
            "ক্লাবগঞ্জ হাট",
            "জগন্নাথ হাট",
            "টেপ্রীগঞ্জ হাট",
            "শেখবাধা ফুলবাড়ী হাট",
            "কালীগঞ্জ হাট",
            "খোগের হাট",
            "লক্ষীরহাট",
            "চেংঠীহাট",
            "নতুন হাট",
            "বাগদহ বাজার",
            "ডাডুয়ার হাট",
            "গাজোকাটি হাট",
        ],
        "আটোয়ারী": [
            "গুঞ্জরমারী",
            "চুচুলী বটতলী হাট",
            "তোড়িয়া হাট",
            "দিঘীরকোন হাট",
            "ধামোর হাট",
            "নুনুমন্ডল হাট",
            "পাটশিরি হাট",
            "বারঘাটি হাট",
            "রাখালদেবী হাট",
            "রাণীগঞ্জ হাট",
            "লীলার বাজার হাট",
            "সিকটিহারী হাট",
        ],
        " তেঁতুলিয়া": [
            "সিপাইপাড়া বাজার",
            "তিরনই বাজার",
            "রনচন্ডি বাজার",
            "শালবাহান বাজার",
            "কালান্দিগছ রোড বাজার",
            "কালান্দিগছ বাজার",
            "সিরাজনগর বাজার",
            "মুহুরী বাজার", // Fixed character encoding issue
            "শিলাইকুঠি বাজার",
            "চড়ক ডাংগী বাজার",
            "বুড়াবুড়ি বাজার",
            "ভজনপুর বাজার",
            "ডুংডুংগী বাজার",
            "দেবনগড় বাজার",
            "আমজুয়ানী বাজার",
            "মাগুড়মারী চৌরাস্তা বাজার",
        ],
        " বোদা": [],
    }

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    const filteredMarkets: Record<string, string[]> = Object.keys(markets).reduce((acc: Record<string, string[]>, area) => {
        const filtered = markets[area].filter((market) =>
            market.toLowerCase().includes(searchTerm.toLowerCase())
        )
        acc[area] = filtered
        return acc
    }, {} as Record<string, string[]>)

    const colors: Record<string, string> = {
        "পঞ্চগড় সদর": "from-emerald-500 to-green-600",
        "বোদা": "from-blue-500 to-indigo-600",
        "দেবীগঞ্জ": "from-amber-500 to-orange-600",
        "আটোয়ারী": "from-rose-500 to-red-600",
        "তেঁতুলিয়া": "from-purple-500 to-violet-600",
    }

    const cardColors: Record<string, string> = {
        "পঞ্চগড় সদর": "bg-emerald-50 border-emerald-200 hover:bg-emerald-100",
        "বোদা": "bg-blue-50 border-blue-200 hover:bg-blue-100",
        "দেবীগঞ্জ": "bg-amber-50 border-amber-200 hover:bg-amber-100",
        "আটোয়ারী": "bg-rose-50 border-rose-200 hover:bg-rose-100",
        "তেঁতুলিয়া": "bg-purple-50 border-purple-200 hover:bg-purple-100",
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
            <header className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-6">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl md:text-4xl font-bold text-center">পঞ্চগড়ের হাট বাজারের তালিকা</h1>
                    <p className="text-center mt-2 text-teal-100">পঞ্চগড় জেলার বিভিন্ন উপজেলার হাট বাজারের সম্পূর্ণ তথ্য</p>
                </div>
            </header>

            <main className="container mx-auto px-4 py-6">
                <div className="relative max-w-md mx-auto mb-8">
                    <div className="absolute left-3 top-3">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                        type="search"
                        placeholder="হাট বাজার খুঁজুন..."
                        className="pl-10 py-6 rounded-xl border-2 border-gray-200 focus:border-teal-500 shadow-sm"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-6">
                    {Object.keys(markets).map((area) => (
                        <button
                            key={area}
                            onClick={() => setActiveTab(area)}
                            className={`
                py-3 px-2 rounded-lg font-medium text-sm md:text-base transition-all duration-200
                ${activeTab === area
                                    ? `bg-gradient-to-r ${colors[area]} text-white shadow-md transform scale-105`
                                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                                }
              `}
                        >
                            {area}
                        </button>
                    ))}
                </div>

                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                >
                    <div className={`py-4 px-6 bg-gradient-to-r ${colors[activeTab]} text-white`}>
                        <h2 className="text-xl font-bold">{activeTab} উপজেলার হাট বাজার</h2>
                        <p className="text-sm opacity-90">মোট: {filteredMarkets[activeTab].length} টি হাট বাজার</p>
                    </div>

                    <div className="p-4">
                        {filteredMarkets[activeTab].length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                {filteredMarkets[activeTab].map((market, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.2, delay: index * 0.03 }}
                                        className={`border rounded-lg ${cardColors[activeTab]} transition-colors p-3`}
                                    >
                                        <div className="flex items-center">
                                            <div
                                                className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-gradient-to-r ${colors[activeTab]} text-white font-medium text-sm`}
                                            >
                                                {index + 1}
                                            </div>
                                            <span className="font-medium">{market}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8 text-gray-500">
                                <p>কোন হাট বাজার পাওয়া যায়নি।</p>
                            </div>
                        )}
                    </div>
                </motion.div>
            </main>

        </div>
    )
}

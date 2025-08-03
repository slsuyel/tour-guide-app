"use client"

import Image from "next/image"
import Link from "next/link"
import { Moon, X, Sun, MoreVertical } from "lucide-react"
import { useState, useEffect } from "react"

// Card data with image, title, and slug
const cardData = [
    {
        title: "দর্শনীয় স্থান সমূহ",
        image: "/banners/placeses-ppp.png",
        slug: "tourist-place/",
        color: "from-orange-400 to-pink-500",
    },
    // {
    //     title: "পঞ্চগড়ের ইতিহাস",
    //     image: "/banners/history.png",
    //     slug: "citizen-service/history",
    //     color: "from-gray-500 to-gray-800",
    // },
    {
        title: "আবহাওয়ার পূর্বাভাস",
        image: "/banners/person-umbrella-rain.png",
        slug: "weather-forecast",
        color: "from-blue-400 to-blue-600",
    },
    {
        title: "পরিবহন ব্যবস্থা",
        image: "/banners/orange-tour-bus-bicycles.png",
        slug: "transportation",
        color: "from-yellow-400 to-orange-500",
    },
    {
        title: "আবাসিক হোটেল",
        image: "/banners/accommodation.png",
        slug: "residential-hotel",
        color: "from-purple-400 to-indigo-500",
    },

    // {
    //     title: "ইভেন্টসমূহ",
    //     image: "/banners/outdoor-music-concert.png",
    //     slug: "events",
    //     color: "from-green-400 to-teal-500",
    // },
    
]

// Content text
const content = {
    welcome: "আপনাকে স্বাগত",
    subtitle: "বাংলাদেশের উত্তরের প্রাকৃতিক সৌন্দর্যে ঘেরা শহরে",
    dropdown: ["যোগাযোগ করুন", "আমরা কে"],
    explore: "আরও দেখুন",
}

export default function MobileHomePage() {
    const [showDropdown, setShowDropdown] = useState(false)
    const [sunriseTime, setSunriseTime] = useState<string>("--:--")
    const [sunsetTime, setSunsetTime] = useState<string>("--:--")
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchSunriseSunset = async () => {
            try {
                setIsLoading(true)
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=Panchagarh,bd&units=metric&appid=70003417e444b7f1f64ac94c357fcf98`,
                )

                if (!response.ok) {
                    throw new Error("Weather data not available")
                }

                const data = await response.json()

                // Format sunrise and sunset times
                const formattedSunrise = formatTimeToBengali(data.sys.sunrise * 1000)
                const formattedSunset = formatTimeToBengali(data.sys.sunset * 1000)

                setSunriseTime(formattedSunrise)
                setSunsetTime(formattedSunset)
            } catch (err) {
                console.error("Error fetching sunrise/sunset data:", err)
                setSunriseTime("--:--")
                setSunsetTime("--:--")
            } finally {
                setIsLoading(false)
            }
        }

        fetchSunriseSunset()
    }, [])

    // Function to format time in Bengali with AM/PM
    const formatTimeToBengali = (timestamp: number): string => {
        const date = new Date(timestamp)

        // Get hours and minutes
        let hours = date.getHours()
        const minutes = date.getMinutes()

        // Determine AM/PM
        const ampm = hours >= 12 ? "PM" : "AM"

        // Convert to 12-hour format
        hours = hours % 12
        hours = hours ? hours : 12 // the hour '0' should be '12'

        // Convert to Bengali numerals
        const bengaliHours = convertToBengaliNumerals(hours.toString().padStart(2, "0"))
        const bengaliMinutes = convertToBengaliNumerals(minutes.toString().padStart(2, "0"))

        return `${bengaliHours}:${bengaliMinutes} ${ampm}`
    }

    // Function to convert English numerals to Bengali
    const convertToBengaliNumerals = (englishNumber: string): string => {
        const bengaliNumerals = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"]
        return englishNumber
            .split("")
            .map((char) => {
                if (/\d/.test(char)) {
                    return bengaliNumerals[Number.parseInt(char)]
                }
                return char
            })
            .join("")
    }

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-emerald-500 to-emerald-700 relative">
            <div className="pb-16">
                {" "}
                {/* Add padding to prevent content from being hidden behind fixed footer */}
                {/* Header */}
                <header className="p-2 sm:p-3 flex justify-between items-center">
                    <div className="w-1/3"></div>
                    <div className="w-1/3"></div>
                    <div className="w-1/3 flex justify-end items-center gap-2">
                        <div className="relative">
                            {/* <button className="text-white p-1" onClick={() => setShowDropdown(!showDropdown)}>
                                <MoreVertical size={20} />
                            </button> */}

                            {showDropdown && (
                                <div className="absolute right-0 mt-1 bg-white rounded-md shadow-lg py-1 w-36 z-10">
                                    <div className="flex justify-end p-1">
                                        <button onClick={() => setShowDropdown(false)} className="text-gray-500 hover:text-gray-700">
                                            <X size={16} />
                                        </button>
                                    </div>
                                    {content.dropdown.map((item, index) => (
                                        <button
                                            key={index}
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </header>
                {/* Welcome Text */}
                <div className="text-center text-white mt-2 mb-4 px-4">
                    <h1 className="text-2xl font-bold mb-1">{content.welcome}</h1>
                    <p className="text-base text-center">{content.subtitle}</p>
                </div>
                {/* Weather Info */}
                <div className="flex justify-center mb-4 px-3">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm text-white rounded-full px-4 py-1.5 flex items-center gap-3 text-sm shadow-lg mb-4">
                        <div className="flex items-center">
                            <Sun className="w-[18px] h-[18px] text-yellow-300 mr-1" />
                            {isLoading ? <span className="animate-pulse">সূর্যোদয়: লোড হচ্ছে...</span> : <span>সূর্যোদয়: {sunriseTime}</span>}
                        </div>
                        <div className="flex items-center">
                            <Moon className="w-[18px] h-[18px] text-blue-200 mr-1" />
                            {isLoading ? <span className="animate-pulse">সূর্যাস্ত: লোড হচ্ছে...</span> : <span>সূর্যাস্ত: {sunsetTime}</span>}
                        </div>
                    </div>
                </div>
                {/* Cards Grid */}
                <div className="px-3 grid grid-cols-2 gap-3 mb-4">
                    {cardData.map((card, index) => (
                        <Link href={`/${card.slug}`} key={index} className="block group">
                            <div className="bg-white rounded-md shadow-lg transform transition-all duration-300 hover:scale-105 h-full">
                                <div className="relative">
                                    <div className={`absolute z-10`}></div>
                                    <Image
                                        src={card.image || "/placeholder.svg"}
                                        alt={card.title}
                                        width={300}
                                        height={200}
                                        className="w-full h-32 object-cover rounded-t-md"
                                    />
                                </div>
                                <div className="p-3 text-center">
                                    <h3 className="text-base font-bold">{card.title}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

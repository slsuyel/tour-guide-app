"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { MapPin, Phone, Printer, Mail, Clock, Droplets, Wind, Sunrise, Sunset, ExternalLink, Play } from "lucide-react"
import { Facebook, Twitter, Youtube } from "lucide-react"
import Link from "next/link"
import VisitorBadge from "../ui/visitor-badge"

type WeatherData = {
  main: {
    temp: number
    humidity: number
    pressure: number
  }
  weather: Array<{
    main: string
    description: string
    icon: string
  }>
  wind: {
    speed: number
    gust?: number
  }
  visibility: number
  sys: {
    sunrise: number
    sunset: number
  }
  name: string
  dt: number
}

export default function Footer() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentTime, setCurrentTime] = useState(new Date())
  const currentYear = new Date().getFullYear()

  // Important links data
  const importantLinks = [
    {
      name: "রাষ্ট্রপতির কার্যালয়",
      url: "https://www.bangabhaban.gov.bd/",
    },
    {
      name: "জাতীয় তথ্য বাতায়ন",
      url: "https://bangladesh.gov.bd/",
    },
    {
      name: "পঞ্চগড় জেলা বাতায়ন",
      url: "https://panchagarh.gov.bd/",
    },
    {
      name: "ইউনিয়ন পরিষদ ক্যাশলেস সেবা",
      url: "https://uniontax.gov.bd/",
    },
    {
      name: "পৌরসভা  পরিষদ ক্যাশলেস সেবা",
      url: "https://pouroseba.gov.bd/",
    },
  ]

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true)
        // Using OpenWeatherMap API with city name
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Panchagarh,bd&units=metric&appid=70003417e444b7f1f64ac94c357fcf98`,
        )

        if (!response.ok) {
          throw new Error("Weather data not available")
        }

        const data = await response.json()
        setWeatherData(data)
        setError(null)
      } catch (err) {
        console.error("Error fetching weather:", err)
        setError("Weather data unavailable")
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()

    // Update current time every minute
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)

    return () => clearInterval(timeInterval)
  }, [])

  // Format time from timestamp
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000)
    return date.toLocaleTimeString("bn-BD", { hour: "2-digit", minute: "2-digit" })
  }

  // Get weather icon URL
  const getWeatherIconUrl = (iconCode: string) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`
  }

  // Format date in Bengali
  const formatDateInBengali = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    return date.toLocaleDateString("bn-BD", options)
  }

  return (
    <footer className="bg-emerald-700 text-white hidden md:block">
      {/* Main Footer Content */}
      <div className="container mx-auto px-3 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Important Links */}
          <div className="order-2 md:order-1">
            <h3 className="text-base font-bold mb-3 border-b border-emerald-600 pb-1">গুরুত্বপূর্ণ লিংক</h3>
            <div className="space-y-2">
              {importantLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm hover:text-emerald-200 transition-colors group"
                >
                  <ExternalLink className="h-3 w-3 mr-2 flex-shrink-0 opacity-70 group-hover:opacity-100" />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
            <VisitorBadge />
          </div>

          {/* Contact Information */}
          <div className="order-3 md:order-2">
            <h3 className="text-base font-bold mb-3 border-b border-emerald-600 pb-1">ঠিকানা</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-start">
                <MapPin className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" />
                <span>জেলা প্রশাসকের কার্যালয়, পঞ্চগড়</span>
              </p>
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-1 flex-shrink-0" />
                <span>ফোন - ০৫৬৮-৬১২০০</span>
              </p>
              <p className="flex items-center">
                <Printer className="h-4 w-4 mr-1 flex-shrink-0" />
                <span>ফ্যাক্স - ০৫৬৮-৬১২২৫</span>
              </p>
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-1 flex-shrink-0" />
                <a href="mailto:dcpanchagarh@mopa.gov.bd" className="hover:text-emerald-200 transition-colors">
                  dcpanchagarh@mopa.gov.bd
                </a>
              </p>
            </div>
            <Link
              href={`https://www.upload-apk.com/en/L1huOObIJHzh6Hp`}
              target="_blank"
              className="mb-2 mt-1 md:mb-0 flex items-center gap-1"
            >
              <Play size={16} />
              <p>App Download</p>
            </Link>


            <h3 className="text-base font-bold mt-4 mb-2 border-b border-emerald-600 pb-1">আমাদের সামাজিক যোগাযোগ মাধ্যম</h3>
            <div className="flex space-x-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-500 hover:bg-sky-600 p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="mailto:info@panchagarh.gov.bd"
                className="bg-red-500 hover:bg-red-600 p-2 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Weather Information */}
          <div className="order-1 md:order-3 mb-4 md:mb-0">
            <h3 className="text-base font-bold mb-3 border-b border-emerald-600 pb-1">আবহাওয়া / জলবায়ু</h3>

            {loading ? (
              <div className="bg-emerald-600/50 rounded-lg p-3 animate-pulse">
                <div className="h-16 bg-emerald-500/30 rounded mb-3"></div>
                <div className="h-3 bg-emerald-500/30 rounded mb-2 w-3/4"></div>
                <div className="h-3 bg-emerald-500/30 rounded mb-2 w-1/2"></div>
                <div className="h-3 bg-emerald-500/30 rounded w-2/3"></div>
              </div>
            ) : error ? (
              <div className="bg-emerald-600/50 rounded-lg p-3">
                <p className="text-center text-sm">{error}</p>
                <p className="text-center text-xs mt-2">
                  <Clock className="inline-block mr-1 h-3 w-3" />
                  {formatDateInBengali(currentTime)}
                </p>
              </div>
            ) : weatherData ? (
              <div className="bg-emerald-600/50 rounded-lg p-3">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <p className="text-xs">
                      {currentTime.toLocaleTimeString("bn-BD", { hour: "2-digit", minute: "2-digit" })},{" "}
                      {formatDateInBengali(currentTime)}
                    </p>
                    <h4 className="font-bold text-sm">পঞ্চগড়, বাংলাদেশ</h4>
                  </div>
                  {weatherData.weather[0].icon && (
                    <div className="relative h-10 w-10">
                      <Image
                        src={getWeatherIconUrl(weatherData.weather[0].icon) || "/placeholder.svg"}
                        alt={weatherData.weather[0].description}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>

                <div className="flex items-center mb-2">
                  <span className="text-3xl font-bold">{Math.round(weatherData.main.temp)}°C</span>
                  <span className="ml-2 text-xs">{weatherData.weather[0].main}</span>
                </div>

                <div className="grid grid-cols-2 gap-1 text-xs">
                  <div className="flex items-center">
                    <Droplets className="h-3 w-3 mr-1 text-emerald-200" />
                    <span>আর্দ্রতা: {weatherData.main.humidity}%</span>
                  </div>
                  <div className="flex items-center">
                    <Wind className="h-3 w-3 mr-1 text-emerald-200" />
                    <span>বাতাস: {Math.round(weatherData.wind.speed * 3.6)} কিমি/ঘ</span>
                  </div>
                  <div className="flex items-center">
                    <Sunrise className="h-3 w-3 mr-1 text-emerald-200" />
                    <span>সূর্যোদয়: {formatTime(weatherData.sys.sunrise)}</span>
                  </div>
                  <div className="flex items-center">
                    <Sunset className="h-3 w-3 mr-1 text-emerald-200" />
                    <span>সূর্যাস্ত: {formatTime(weatherData.sys.sunset)}</span>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-emerald-800 py-3 text-white text-xs">
        <div className="container mx-auto px-3 flex justify-between items-center flex-col md:flex-row text-center md:text-left">
          {/* Left side */}
          <div className=" flex items-center gap-x-2">

            <Link
              href="/privacy-policies" 
              className="text-sm hover:text-emerald-200 transition-colors"
            >
              Privacy & Policy
            </Link>

          </div>

          {/* Center */}
          <div className="mb-2 md:mb-0">
            <p>© {currentYear} পঞ্চগড় জেলা প্রশাসন। সর্বস্বত্ব সংরক্ষিত।</p>
          </div>

          {/* Right side */}
          <div>
            <p>
              কারিগরি সহায়তায়:{" "}
              <span className="font-semibold">
                {" "}
                <a href="https://softwebsys.com/" target="_blank" rel="noopener noreferrer">
                  সফটওয়েব সিস্টেম সল্যুশন
                </a>
              </span>
            </p>
          </div>
        </div>


      </div>
    </footer>
  )
}

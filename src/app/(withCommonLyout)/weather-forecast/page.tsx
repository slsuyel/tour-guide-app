"use client"

import { ArrowLeft, Droplets, Thermometer, Wind } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function WeatherForecastPage() {
  const [weatherData, setWeatherData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentTime, setCurrentTime] = useState(new Date())

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
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 pb-20">
      {/* Header with back button */}
      <div className="p-4 flex items-center">
        <Link href="/" className="text-white p-2 rounded-full bg-blue-500">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-white text-xl font-bold ml-4">আবহাওয়ার পূর্বাভাস - পঞ্চগড়</h1>
      </div>

      {/* Date display */}
      <div className="text-center text-white mb-4 px-4">
        <p className="text-lg">{formatDateInBengali(currentTime)}</p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      ) : error ? (
        <div className="bg-blue-500 backdrop-blur-sm rounded-lg mx-4 p-6 text-center text-white">
          <p className="text-lg">{error}</p>
          <button onClick={() => window.location.reload()} className="mt-4 bg-blue-700 px-4 py-2 rounded-lg">
            পুনরায় চেষ্টা করুন
          </button>
        </div>
      ) : weatherData ? (
        <div className="px-4">
          {/* Main weather card */}
          <div className="bg-blue-500 backdrop-blur-sm rounded-lg p-6 text-white mb-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-3xl font-bold">{Math.round(weatherData.main.temp)}°C</h2>
                <p className="text-lg capitalize">{weatherData.weather[0].description}</p>
                <p className="text-sm">অনুভূত তাপমাত্রা: {Math.round(weatherData.main.feels_like)}°C</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={getWeatherIconUrl(weatherData.weather[0].icon) || "/placeholder.svg"}
                  alt={weatherData.weather[0].description}
                  width={80}
                  height={80}
                  className="mb-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-blue-500 p-3 rounded-lg flex items-center">
                <Thermometer className="text-yellow-300 mr-3" size={24} />
                <div>
                  <p className="text-xs opacity-80">সর্বোচ্চ / সর্বনিম্ন</p>
                  <p>
                    {Math.round(weatherData.main.temp_max)}° / {Math.round(weatherData.main.temp_min)}°
                  </p>
                </div>
              </div>
              <div className="bg-blue-500 p-3 rounded-lg flex items-center">
                <Droplets className="text-blue-300 mr-3" size={24} />
                <div>
                  <p className="text-xs opacity-80">আর্দ্রতা</p>
                  <p>{weatherData.main.humidity}%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional weather info */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-500 backdrop-blur-sm rounded-lg p-4 text-white">
              <div className="flex items-center mb-2">
                <Wind className="text-white mr-2" size={20} />
                <h3 className="font-semibold">বাতাস</h3>
              </div>
              <p className="text-2xl font-bold mb-1">{weatherData.wind.speed} m/s</p>
              <p className="text-sm">দিক: {weatherData.wind.deg}°</p>
            </div>

            <div className="bg-blue-500 backdrop-blur-sm rounded-lg p-4 text-white">
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-yellow-300 mr-2"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
                <h3 className="font-semibold">সূর্যোদয় / সূর্যাস্ত</h3>
              </div>
              <div className="flex flex-col">
                <p className="text-sm">সূর্যোদয়: {formatTime(weatherData.sys.sunrise)}</p>
                <p className="text-sm">সূর্যাস্ত: {formatTime(weatherData.sys.sunset)}</p>
              </div>
            </div>
          </div>

          {/* Pressure and visibility */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-500 backdrop-blur-sm rounded-lg p-4 text-white">
              <h3 className="font-semibold mb-1">চাপ</h3>
              <p className="text-xl font-bold">{weatherData.main.pressure} hPa</p>
            </div>
            <div className="bg-blue-500 backdrop-blur-sm rounded-lg p-4 text-white">
              <h3 className="font-semibold mb-1">দৃশ্যমানতা</h3>
              <p className="text-xl font-bold">{(weatherData.visibility / 1000).toFixed(1)} কিমি</p>
            </div>
          </div>

          {/* Last updated */}
          <div className="text-center text-white text-sm mt-6 opacity-80">
            <p>সর্বশেষ আপডেট: {formatTime(weatherData.dt)}</p>
          </div>
        </div>
      ) : null}
    </div>
  )
}

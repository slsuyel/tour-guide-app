"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, Search, Menu, X, MapPin, Phone } from "lucide-react"
import { useGetAllPlacesQuery } from "../Redux/RTK/placeApi"
import Image from "next/image"

export interface TPlace {
  id: number;
  name: string;
}


const Header = () => {
  const { data, isLoading } = useGetAllPlacesQuery(undefined)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleDropdown = (slug: string) => {
    if (activeDropdown === slug) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(slug)
    }
  }

  const places: TPlace[] = data?.data || []


  const navigationItems = [
    {
      title: "হোম",
      slug: "",
    },
    {
      title: "দর্শনীয় স্থানসমূহ",
      slug: "tourist-attractions",
      children: places && places?.map((place) => ({
        title: place?.name,
        slug: `tourist-place/${place?.name}`,
      })),

    },
    {
      title: "গ্যালারি",
      slug: "gallery",
      children: [
        { title: "ছবি", slug: "gallery/photos" },
        { title: "ভিডিও", slug: "gallery/videos" },
      ],
    },
    {
      title: "অন্যান্য",
      slug: "others",
      children: [
        { title: "ভ্রমণ খরচ ক্যালকুলেটর", slug: "tour-calculator" },
        { title: "ইভেন্ট সমূহ", slug: "events" },
        // { title: "আবাসন", slug: "housing" },
        { title: "আবাসিক হোটেল", slug: "residential-hotel" },
        {
          title: "ব্যবসা",
          slug: "business",
        },
      ],
    }
    ,
    {
      title: "পরিবহন ব্যবস্থা",
      slug: "transportation",
    },
    {
      title: "আবহাওয়া",
      slug: "weather-forecast",
    },

    {
      title: "নাগরিক সেবা",
      slug: "citizen-service",
    },
    {
      title: "যোগাযোগ",
      slug: "#",
      children: [
        { title: "আমাদের সম্পর্কে", slug: "about-us" },
        { title: "যোগাযোগ", slug: "contact-us" },
      ],
    },
    {
      title: "Privacy Policy",
      slug: "privacy-policies",
    },
  ]

  return (
    <>
      {/* Top bar with contact info */}
      <div className=" bg-emerald-900 text-white py-2 hidden md:block">
        {/* <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>পঞ্চগড়, বাংলাদেশ</span>
            </div>
            
          </div>
          <div className="flex items-center space-x-4">
            <button className="hover:text-emerald-200 transition-colors">বাংলা</button>
            <span>|</span>
            <button className="hover:text-emerald-200 transition-colors">English</button>
          </div>
        </div> */}
        <p className="text-sm text-center">
          <strong>Disclaimer:</strong> This app is not affiliated with any government entity and does not represent any government body in any capacity. All information provided is sourced from <a href="https://www.panchagarh.gov.bd" target="_blank" rel="noopener noreferrer">https://www.panchagarh.gov.bd</a>.
        </p>

      </div>

      {/* Main header */}
      <header
        className={`${isScrolled ? "py-2 shadow-lg bg-white/95 backdrop-blur-sm" : "py-4 bg-white"
          } sticky top-0 z-50 transition-all duration-300 `}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href={'/'}>
              <div className="flex items-center space-x-2">
                <div className="rounded-lg flex items-center justify-center shadow-md">
                  <Image src={'/logo.png'} alt="logo" width={60} height={60} />
                </div>
                <div className="hidden md:block">
                  <h1 className="text-xl font-bold text-gray-800">পঞ্চগড় </h1>
                  <p className="text-xs text-emerald-600">পঞ্চগড় ভ্রমণ গাইড</p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div key={item.slug} className="relative group px-1">
                  {item.children ? (
                    <div className="flex items-center cursor-pointer group py-2">
                      <button className="flex items-center px-3 py-2 rounded-md group-hover:bg-emerald-50 transition-colors duration-200">
                        <span className="text-gray-700 group-hover:text-emerald-700 transition-colors duration-200 font-medium">
                          {item.title}
                        </span>
                        <ChevronDown className="ml-1 w-4 h-4 text-emerald-500 group-hover:text-emerald-700 transition-transform duration-300 group-hover:rotate-180" />
                      </button>

                      {/* Dropdown for desktop */}
                      <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                        <div className="py-2 max-h-[60vh] overflow-y-auto">
                          {item.children.map((child) => (
                            <Link
                              href={`/${child.slug}`}
                              key={child.slug}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors duration-150"
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={`/${item.slug}`}
                      className="block px-3 py-2 text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-md transition-colors duration-200 font-medium"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Search and Mobile menu buttons */}
            <div className="flex items-center space-x-2">


              <button
                className="lg:hidden p-2 text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-full transition-colors duration-200 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">পঞ্চ</span>
                  </div>
                  <div>
                    <h1 className="text-lg font-bold text-gray-800">পঞ্চগড় ভ্রমণ</h1>
                    <p className="text-xs text-emerald-600">পর্যটন গাইড</p>
                  </div>
                </div>
                <button
                  className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="py-4">
              {navigationItems.map((item) => (
                <div key={item.slug} className="border-b border-gray-100 last:border-0">
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.slug)}
                        className="w-full flex justify-between items-center px-4 py-3 text-gray-700 hover:bg-gray-50"
                      >
                        <span className="font-medium">{item.title}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${activeDropdown === item.slug ? "rotate-180" : ""}`}
                        />
                      </button>

                      {activeDropdown === item.slug && (
                        <div className="bg-gray-50 py-2 max-h-60 overflow-y-auto">
                          {item.children.map((child) => (
                            <Link
                              href={`/${child.slug}`}
                              key={child.slug}
                              className="block px-8 py-2 text-sm text-gray-600 hover:text-emerald-700"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={`/${item.slug}`}
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}

              <div className="flex justify-center space-x-6 mt-4 py-4 border-t border-gray-100">
                <button className="text-gray-700 hover:text-emerald-700">বাংলা</button>
                <button className="text-gray-400 hover:text-emerald-700">English</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header

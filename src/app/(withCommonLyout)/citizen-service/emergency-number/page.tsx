"use client"

import { useState } from "react"
import { Search, Phone, ExternalLink } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import Link from "next/link"

export default function EmergencyContacts() {
  const [searchTerm, setSearchTerm] = useState("")

  const emergencyServices = [
    { name: "ফায়ার সার্ভিস", number: "05662-61699" },
    { name: "পুলিশ (পঞ্চগড় সদর থানা)", number: "০৫৬৮-৬১৫৫৫	" },
    { name: "এম্বুলেন্স (সদর হাসপাতাল)", number: "01730-337138" },
    { name: "সদর হাসপাতাল", number: "05662-61522" },
    { name: "বিদ্যুৎ অফিস", number: "05662-61422" },
    { name: "পৌরসভা", number: "05662-61631" },
  ]
  

  const governmentOffices = [
    { name: "ডিসি অফিস ", number: "05662-61400" },
    { name: "উপজেলা নির্বাহী অফিসার", number: "05662-61229" },
    { name: "ইউনিয়ন পরিষদ (সাধারণ)", number: "উপযুক্ত ইউনিয়ন অফিস অনুযায়ী ভিন্ন" },
  ]
  

  const healthcareServices = [
    {
      name: "পঞ্চগড় সদর হাসপাতাল",
      number: "05662-61522",
      address: "হাসপাতাল রোড, পঞ্চগড়",
      schedule: "২৪ ঘন্টা খোলা",
    },
    {
      name: "টেলি-হেলথ সেবা",
      number: "16263",
      link: "https://dghs.gov.bd/",
    },
  ]
  

  const womenChildrenSupport = [
    { name: "নারী হেল্পলাইন", number: "109" },
    { name: "শিশু হেল্পলাইন", number: "1098" },
  ]

  const disasterManagement = [
    { name: "দুর্যোগকালীন হটলাইন", number: "1090" },
    {
      name: "আশ্রয়কেন্দ্র - সদর",
      number: "01700-000004",
      address: "সরকারি প্রাথমিক বিদ্যালয়, পঞ্চগড় সদর",
    },
    {
      name: "আশ্রয়কেন্দ্র - দেবীগঞ্জ",
      number: "01700-000005",
      address: "উপজেলা পরিষদ, দেবীগঞ্জ",
    },
  ]

  const localNGOs = [
    { name: "BRAC", number: "01730-569349" },
    { name: "ASA", number: "01712-068726" },
    { name: "TMSS", number: "01718-203268" },
  ]
  

  const officialLinks = [
    {
      name: "জেলা প্রশাসকের অফিসিয়াল ফেসবুক",
      link: "https://www.facebook.com/dcpanchagarh",
    },
    {
      name: "পঞ্চগড় জেলা ওয়েবসাইট",
      link: "http://www.panchagarh.gov.bd/",
    },
  ]


  // Filter function for search
  const filterBySearch = (items: any) => {
    return items.filter((item: any) =>
      Object.values(item).some(
        (value) => typeof value === "string" && value.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    )
  }

  // Call function for mobile
  const callNumber = (number: any) => {
    window.location.href = `tel:${number}`
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white py-4 md:py-8 px-4 text-center">
        <h1 className=" text-xl lg:text-3xl font-bold mb-2">জরুরি নাম্বার - পঞ্চগড়</h1>
        <p className=" text-base md:text-lg text-center">জরুরিতে পাশে থাকুক সঠিক তথ্য।</p>
      </div>

      {/* Search Bar */}
      <div className="sticky top-0 z-10 bg-white p-4 shadow-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="সেবা খুঁজুন..."
            className="pl-10 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Emergency Services */}
        <Card className="shadow-sm md:shadow-md p-2 md:p-3 rounded-md">
          <CardHeader className="bg-red-50">
            <CardTitle className="text-xl text-red-700">জরুরি সেবা নম্বরসমূহ</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="space-y-3">
              {filterBySearch(emergencyServices).map((service: any, index: any) => (
                <div key={index} className="flex justify-between items-center border-b pb-2">
                  <div className="font-medium">{service.name}</div>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 text-red-600 border-red-200 hover:bg-red-50"
                    onClick={() => callNumber(service.number)}
                  >
                    <Phone size={16} />
                    {service.number}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Government Offices */}
        <Card className="shadow-sm md:shadow-md p-2 md:p-3 rounded-md">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-xl text-blue-700">সরকারি অফিস নম্বরসমূহ</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="space-y-3">
              {filterBySearch(governmentOffices).map((office: any, index: any) => (
                <div key={index} className="flex justify-between items-center border-b pb-2">
                  <div className="font-medium">{office.name}</div>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 text-blue-600 border-blue-200 hover:bg-blue-50"
                    onClick={() => callNumber(office.number)}
                  >
                    <Phone size={16} />
                    {office.number}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Healthcare Services */}
        <Card className="shadow-sm md:shadow-md p-2 md:p-3 rounded-md">
          <CardHeader className="bg-green-50">
            <CardTitle className="text-xl text-green-700">স্বাস্থ্যসেবা</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="space-y-4">
              {filterBySearch(healthcareServices).map((service: any, index: any) => (
                <div key={index} className="border-b pb-3">
                  <div className="flex justify-between items-center mb-1">
                    <div className="font-medium">{service.name}</div>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 text-green-600 border-green-200 hover:bg-green-50"
                      onClick={() => callNumber(service.number)}
                    >
                      <Phone size={16} />
                      {service.number}
                    </Button>
                  </div>
                  {service.address && <div className="text-sm text-gray-600 mt-1">ঠিকানা: {service.address}</div>}
                  {service.schedule && <div className="text-sm text-gray-600">সময়সূচি: {service.schedule}</div>}
                  {service.link && (
                    <Link
                      href={service.link}
                      target="_blank"
                      className="text-sm text-green-600 flex items-center gap-1 mt-1"
                    >
                      ওয়েবসাইট <ExternalLink size={14} />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Women and Children Support */}
        <Card className="shadow-sm md:shadow-md p-2 md:p-3 rounded-md">
          <CardHeader className="bg-purple-50">
            <CardTitle className="text-xl text-purple-700">মহিলা ও শিশু সহায়তা</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="space-y-3">
              {filterBySearch(womenChildrenSupport).map((support: any, index: any) => (
                <div key={index} className="flex justify-between items-center border-b pb-2">
                  <div className="font-medium">{support.name}</div>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 text-purple-600 border-purple-200 hover:bg-purple-50"
                    onClick={() => callNumber(support.number)}
                  >
                    <Phone size={16} />
                    {support.number}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Disaster Management */}
        <Card className="shadow-sm md:shadow-md p-2 md:p-3 rounded-md">
          <CardHeader className="bg-amber-50">
            <CardTitle className="text-xl text-amber-700">দুর্যোগ ব্যবস্থাপনা</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="space-y-4">
              {filterBySearch(disasterManagement).map((item: any, index: any) => (
                <div key={index} className="border-b pb-3">
                  <div className="flex justify-between items-center mb-1">
                    <div className="font-medium">{item.name}</div>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 text-amber-600 border-amber-200 hover:bg-amber-50"
                      onClick={() => callNumber(item.number)}
                    >
                      <Phone size={16} />
                      {item.number}
                    </Button>
                  </div>
                  {item.address && <div className="text-sm text-gray-600 mt-1">ঠিকানা: {item.address}</div>}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Local NGOs */}
        <Card className="shadow-sm md:shadow-md p-2 md:p-3 rounded-md">
          <CardHeader className="bg-teal-50">
            <CardTitle className="text-xl text-teal-700">স্থানীয় এনজিও/সংস্থা</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="space-y-3">
              {filterBySearch(localNGOs).map((ngo: any, index: any) => (
                <div key={index} className="flex justify-between items-center border-b pb-2">
                  <div className="font-medium">{ngo.name}</div>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 text-teal-600 border-teal-200 hover:bg-teal-50"
                    onClick={() => callNumber(ngo.number)}
                  >
                    <Phone size={16} />
                    {ngo.number}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Official Links */}
        <Card className="shadow-sm md:shadow-md p-2 md:p-3 rounded-md">
          <CardHeader className="bg-indigo-50">
            <CardTitle className="text-xl text-indigo-700">ফেসবুক / অফিসিয়াল ওয়েবসাইট</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="space-y-3">
              {filterBySearch(officialLinks).map((link: any, index: any) => (
                <div key={index} className="flex justify-between items-center border-b pb-2">
                  <div className="font-medium">{link.name}</div>
                  <Link href={link.link} target="_blank" className="flex items-center gap-1 text-indigo-600">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 text-indigo-600 border-indigo-200 hover:bg-indigo-50"
                    >
                      <ExternalLink size={16} />
                      দেখুন
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

      </div>

    </div>
  )
}

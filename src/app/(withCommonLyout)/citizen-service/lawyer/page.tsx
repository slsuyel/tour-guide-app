"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Phone, User2, Briefcase, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Define the lawyer type
interface Lawyer {
  id: number
  name: string
  caseType: string
  mobile: string
}

const PanelLawyers = () => {
  // Data for Panel Lawyers
  const lawyers: Lawyer[] = [
    { id: 1, name: "Md Abu Bakkar Siddik", caseType: "Criminal", mobile: "01706787320" },
    { id: 2, name: "Md Aminur Rahman", caseType: "Criminal", mobile: "01712742935" },
    { id: 3, name: "Akhil Chandro Borman", caseType: "Civil", mobile: "01720499290" },
    { id: 4, name: "Md Golam Hafiz", caseType: "Both", mobile: "01716795692" },
    { id: 5, name: "Md Mojammel Chowdhury", caseType: "Both", mobile: "01718237256" },
    { id: 6, name: "Md Adom Sufi", caseType: "Both", mobile: "01712557556" },
    { id: 7, name: "Md Abul Hossain 1", caseType: "Civil", mobile: "01718788253" },
    { id: 8, name: "Md Azaharul Islam 2", caseType: "Civil", mobile: "01718788268" },
    { id: 9, name: "Md Toslim Uddin", caseType: "Civil", mobile: "01719249510" },
    { id: 10, name: "Md Mirza Sultana Alom", caseType: "Criminal", mobile: "01715672228" },
    { id: 11, name: "Md Mostafa Kamal Hossen", caseType: "Both", mobile: "01716711737" },
    { id: 12, name: "Md Ershad Sorkar", caseType: "Criminal", mobile: "01710001359" },
    { id: 13, name: "A K M Anoarul Islam", caseType: "Civil", mobile: "01719470201" },
    { id: 14, name: "Md Abu Hasem Prodhan Ronju", caseType: "Civil", mobile: "01735822841" },
    { id: 15, name: "Md Fozlul Haque", caseType: "Civil", mobile: "01719249591" },
    { id: 16, name: "Md Akbor Ali", caseType: "Both", mobile: "01718333846" },
    { id: 17, name: "Mst Mohsina Khatun", caseType: "Both", mobile: "01716457347" },
    { id: 18, name: "Md Nozrul Islam", caseType: "Criminal", mobile: "01712731484" },
    { id: 19, name: "A K M Waliullah Prodhan", caseType: "Both", mobile: "01718658428" },
  ]

  const [searchTerm, setSearchTerm] = useState("")
  const [filteredLawyers, setFilteredLawyers] = useState<Lawyer[]>(lawyers)
  const [caseTypeFilter, setCaseTypeFilter] = useState<string[]>([])

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setSearchTerm(term)
    filterLawyers(term, caseTypeFilter)
  }

  // Handle case type filter
  const handleCaseTypeFilter = (type: string) => {
    let newFilters: string[]

    if (caseTypeFilter.includes(type)) {
      newFilters = caseTypeFilter.filter((t) => t !== type)
    } else {
      newFilters = [...caseTypeFilter, type]
    }

    setCaseTypeFilter(newFilters)
    filterLawyers(searchTerm, newFilters)
  }

  // Filter lawyers based on search term and case type
  const filterLawyers = (term: string, caseTypes: string[]) => {
    let filtered = lawyers

    // Apply search filter
    if (term.trim() !== "") {
      filtered = filtered.filter(
        (lawyer) =>
          lawyer.name.toLowerCase().includes(term.toLowerCase()) ||
          lawyer.caseType.toLowerCase().includes(term.toLowerCase()) ||
          lawyer.mobile.includes(term),
      )
    }

    // Apply case type filter
    if (caseTypes.length > 0) {
      filtered = filtered.filter((lawyer) => caseTypes.includes(lawyer.caseType))
    }

    setFilteredLawyers(filtered)
  }

  // Get badge color based on case type
  const getCaseTypeBadgeColor = (caseType: string) => {
    switch (caseType) {
      case "Criminal":
        return "bg-red-50 text-red-700 border-red-200"
      case "Civil":
        return "bg-blue-50 text-blue-700 border-blue-200"
      case "Both":
        return "bg-purple-50 text-purple-700 border-purple-200"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200"
    }
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="container mx-auto py-6 px-4">
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-1 text-gray-800">তালিকাভুক্ত আইনজীবীগণ</h1>
          <h2 className="text-md md:text-lg text-gray-600">পঞ্চগড়, বাংলাদেশ</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-3 mb-5">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="নাম, মামলার ধরন বা মোবাইল নম্বর দিয়ে খুঁজুন..."
              value={searchTerm}
              onChange={handleSearch}
              className="pl-10 w-full bg-white border-gray-200"
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 whitespace-nowrap">
                <Filter size={16} />
                <span>মামলার ধরন</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuCheckboxItem
                checked={caseTypeFilter.includes("Criminal")}
                onCheckedChange={() => handleCaseTypeFilter("Criminal")}
              >
                ফৌজদারি
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={caseTypeFilter.includes("Civil")}
                onCheckedChange={() => handleCaseTypeFilter("Civil")}
              >
                দেওয়ানি
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={caseTypeFilter.includes("Both")}
                onCheckedChange={() => handleCaseTypeFilter("Both")}
              >
                উভয়
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-800 flex items-center">
            <Briefcase className="text-gray-600 mr-2" size={18} />
            তালিকাভুক্ত আইনজীবীগণ
          </h3>
          <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
            {filteredLawyers.length} জন আইনজীবী
          </Badge>
        </div>

        {filteredLawyers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredLawyers.map((lawyer) => (
              <Card
                key={lawyer.id}
                className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <CardContent className="p-4">
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start">
                        <User2 className="text-gray-600 mr-2 h-5 w-5 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">{lawyer.name}</p>
                          <div className="flex items-center mt-1">
                            <Badge variant="outline" className={getCaseTypeBadgeColor(lawyer.caseType)}>
                              {lawyer.caseType === "Criminal"
                                ? "ফৌজদারি"
                                : lawyer.caseType === "Civil"
                                  ? "দেওয়ানি"
                                  : "উভয়"}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-gray-500 text-sm">#{lawyer.id}</div>
                    </div>

                    <div className="flex items-center">
                      <Phone className="text-gray-600 mr-2 h-4 w-4 flex-shrink-0" />
                      <p className="text-gray-700">{lawyer.mobile}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="border-0 shadow-sm">
            <CardContent className="flex flex-col items-center justify-center p-8 text-center">
              <Search className="text-gray-400 mb-2 h-8 w-8" />
              <p className="text-gray-500">কোন তথ্য পাওয়া যায়নি</p>
              <p className="text-gray-400 text-sm">অন্য কিছু খুঁজে দেখুন</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export default PanelLawyers

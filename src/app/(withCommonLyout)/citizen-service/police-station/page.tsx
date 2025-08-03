"use client"

import { useState } from "react"
import { Search, Phone, Mail, User, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { officersData } from "@/constants/policeData"

export default function OfficersDirectory() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter officers based on search term
  const filteredOfficers = officersData.filter((officer) => {
    const matchesSearch =
      officer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      officer.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      officer.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      officer.mobile?.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesSearch
  })

  // Get officer initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-4xl font-bold">পঞ্চগড় পুলিশ অফিসার ডিরেক্টরি</h1>
          <p className="mt-2 text-indigo-100">Panchagarh Police Officer Directory</p>
        </div>
      </header>

      {/* Search Section */}
      <div className="container mx-auto max-w-6xl py-6 px-4">
        <div className="bg-white rounded-lg p-4 mb-8 border border-slate-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
            <Input
              placeholder="Search by name, designation, email, or phone..."
              className="pl-10 border-slate-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center text-sm text-slate-500">
          <Users size={16} className="mr-2" />
          <span>
            Showing {filteredOfficers.length} of {officersData.length} officers
          </span>
        </div>

        {/* Officers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredOfficers.map((officer) => (
            <Card
              key={officer.serialNumber}
              className="overflow-hidden border shadow-none p-2 md:p-3 border-slate-100 hover:border-slate-200 transition-colors"
            >
              <CardContent className="p-0">
                <div className="flex flex-col">
                  {/* Officer Image */}
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 h-48 flex items-center justify-center overflow-hidden">
                    {officer.imageUrl ? (
                      <img
                        src={officer.imageUrl || "/placeholder.svg"}
                        alt={officer.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = `/placeholder.svg?height=200&width=200&query=police officer in uniform`
                        }}
                      />
                    ) : (
                      <img
                        src={`/placeholder.svg?height=200&width=200&query=police officer in uniform`}
                        alt={officer.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Officer Details */}
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg text-slate-800">{officer.name}</h3>
                      {officer.batch && (
                        <Badge variant="secondary" className="text-xs font-medium">
                          Batch {officer.batch}
                        </Badge>
                      )}
                    </div>

                    <p className="text-slate-600 text-sm mb-4 font-medium">{officer.designation}</p>

                    <div className="space-y-3">
                      {officer.email && (
                        <div className="flex items-center text-sm">
                          <Mail size={16} className="mr-2 text-indigo-600 shrink-0" />
                          <a
                            href={`mailto:${officer.email}`}
                            className="text-indigo-600 hover:text-indigo-700 truncate"
                          >
                            {officer.email}
                          </a>
                        </div>
                      )}

                      {officer.mobile && (
                        <div className="flex items-center text-sm">
                          <Phone size={16} className="mr-2 text-indigo-600 shrink-0" />
                          <a href={`tel:${officer.mobile}`} className="text-slate-700 hover:text-slate-900">
                            {officer.mobile}
                          </a>
                        </div>
                      )}

                      {officer.officePhone && (
                        <div className="flex items-center text-sm">
                          <Phone size={16} className="mr-2 text-slate-500 shrink-0" />
                          <span className="text-slate-700">{officer.officePhone}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredOfficers.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg border border-slate-100">
            <User size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-xl font-medium text-slate-700">No officers found</h3>
            <p className="text-slate-500 mt-2">Try adjusting your search criteria</p>
            <Button variant="outline" className="mt-4" onClick={() => setSearchTerm("")}>
              Clear search
            </Button>
          </div>
        )}
      </div>

  
    </div>
  )
}

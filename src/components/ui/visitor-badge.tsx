"use client"

import { useEffect, useState } from "react"
import { Users, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function VisitorBadge() {
    const [totalVisitors, setTotalVisitors] = useState(0)
    const [dailyVisitors, setDailyVisitors] = useState(0)

    useEffect(() => {
        // Base date when the counter "started"
        const baseDate = new Date("2025-06-01")
        const baseVisitorCount = 1000 // Starting visitor count

        // Get current date
        const currentDate = new Date()

        // Calculate days elapsed since base date
        const timeDifference = currentDate.getTime() - baseDate.getTime()
        const daysElapsed = Math.floor(timeDifference / (1000 * 3600 * 24))

        // Calculate total visitors (base count + days elapsed * 10)
        const total = baseVisitorCount + daysElapsed * 10
        setTotalVisitors(total)

        // Generate random daily visitors between 10-50
        const daily = Math.floor(Math.random() * 41) + 10 // Random number between 10-50
        setDailyVisitors(daily)
    }, [])

    return (
        <div className="flex items-center space-x-6">
            {/* <div className="flex items-center space-x-2 bg-gray-200">
                <Users className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-gray-600 font-medium">Total Visitors:</span>
                <Badge variant="secondary" className="text-sm font-bold bg-blue-50 text-blue-700 border-blue-200">
                    {totalVisitors.toLocaleString()}
                </Badge>
            </div> */}
            <img className=" mt-2"
                src={`https://img.shields.io/badge/Total Visitors-${totalVisitors.toLocaleString()}-blue`}
                alt="Visitor Count Badge"
            />
            {/* <div className="h-6 w-px bg-gray-300"></div>

            <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-sm text-gray-600 font-medium">Today:</span>
                <Badge variant="outline" className="text-sm font-bold bg-green-50 text-green-700 border-green-200">
                    +{dailyVisitors}
                </Badge>
            </div> */}
        </div>
    )
}

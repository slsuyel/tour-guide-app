"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calculator, Users, Calendar, Download } from "lucide-react"
import html2canvas from "html2canvas"

export default function TourCostCalculator() {
  const [days, setDays] = useState(1)
  const [people, setPeople] = useState(1)
  const [transportCost, setTransportCost] = useState(0)
  const [otherCost, setOtherCost] = useState(0)
  const [transportType, setTransportType] = useState("bus")
  const [acType, setAcType] = useState("non-ac")
  const [route, setRoute] = useState("dhaka-panchagarh")

  const totalCost = transportCost + otherCost
  useEffect(() => {
    let estimated = 0

    if (route === "dhaka-panchagarh") {
      estimated = transportType === "bus" ? (acType === "ac" ? 1200 : 900) : (acType === "ac" ? 1300 : 1000)
    } else if (route === "rajshahi-panchagarh") {
      estimated = transportType === "bus" ? (acType === "ac" ? 800 : 600) : (acType === "ac" ? 900 : 700)
    } else if (route === "chittagong-panchagarh") {
      estimated = transportType === "bus" ? (acType === "ac" ? 1500 : 1200) : (acType === "ac" ? 1600 : 1300)
    } else if (route === "khulna-panchagarh") {
      estimated = transportType === "bus" ? (acType === "ac" ? 1100 : 850) : (acType === "ac" ? 1200 : 950)
    } else if (route === "barisal-panchagarh") {
      estimated = transportType === "bus" ? (acType === "ac" ? 1250 : 1000) : (acType === "ac" ? 1350 : 1100)
    } else if (route === "mymensingh-panchagarh") {
      estimated = transportType === "bus" ? (acType === "ac" ? 1000 : 800) : (acType === "ac" ? 1100 : 900)
    } else if (route === "sylhet-panchagarh") {
      estimated = transportType === "bus" ? (acType === "ac" ? 1400 : 1100) : (acType === "ac" ? 1500 : 1200)
    } else if (route === "rangpur-panchagarh") {
      estimated = transportType === "bus" ? (acType === "ac" ? 400 : 300) : (acType === "ac" ? 500 : 400)
    }

    setTransportCost(estimated)
  }, [route, transportType, acType])


  const downloadAsImage = async () => {
    const element = document.getElementById("tour-calculator")
    if (!element) return

    const canvas = await html2canvas(element, {
      scale: 3,
      useCORS: true,
      allowTaint: true
    })

    const imgData = canvas.toDataURL("image/png")
    const link = document.createElement("a")
    link.href = imgData
    link.download = "tour-cost-calculation.png"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="container w-full md:max-w-xl mx-auto">
      <div className="flex justify-end mb-4">
        <Button
          onClick={downloadAsImage}
          className="mt-4 bg-gradient-to-br from-emerald-600 to-emerald-800 hover:from-emerald-700 hover:to-emerald-900 text-white"
        >
          <Download className="mr-2 h-4 w-4" /> Image ডাউনলোড করুন
        </Button>
      </div>

      <Card id="tour-calculator" className="shadow-sm p-2 md:p-4 border-emerald-200 overflow-hidden">
        <CardHeader className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white rounded-t-lg">
          <div className="flex items-center justify-center gap-2">
            <Calculator className="h-6 w-6" />
            <CardTitle className="text-2xl font-bold">ভ্রমণ খরচ ক্যালকুলেটর</CardTitle>
          </div>
        </CardHeader>

        <CardContent className="pt-6 pb-2 bg-gradient-to-br from-emerald-50 to-emerald-100">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-emerald-600" />
                <Label htmlFor="days">ট্যুরের দিন সংখ্যা:</Label>
              </div>
              <Input id="days" type="number" min="1" value={days} onChange={(e) => setDays(Math.max(1, +e.target.value))} />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-emerald-600" />
                <Label htmlFor="people">ভ্রমণকারীর সংখ্যা:</Label>
              </div>
              <Input id="people" type="number" min="1" value={people} onChange={(e) => setPeople(Math.max(1, +e.target.value))} />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="route">যাত্রাপথ নির্বাচন করুন:</Label>
              <select
                id="route"
                value={route}
                onChange={(e) => setRoute(e.target.value)}
                className="w-full p-2 bg-gray-100 border border-emerald-200 rounded-md"
              >
                <option value="dhaka-panchagarh">ঢাকা → পঞ্চগড়</option>
                <option value="rajshahi-panchagarh">রাজশাহী → পঞ্চগড়</option>
                <option value="chittagong-panchagarh">চট্টগ্রাম → পঞ্চগড়</option>
                <option value="khulna-panchagarh">খুলনা → পঞ্চগড়</option>
                <option value="barisal-panchagarh">বরিশাল → পঞ্চগড়</option>
                <option value="mymensingh-panchagarh">ময়মনসিংহ → পঞ্চগড়</option>
                <option value="sylhet-panchagarh">সিলেট → পঞ্চগড়</option>
                <option value="rangpur-panchagarh">রংপুর → পঞ্চগড়</option>
              </select>
            </div>

            <div className="space-y-4 md:col-span-2">
              <div className="grid grid-cols-2 gap-4">
                <RadioGroup value={transportType} onValueChange={setTransportType} className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bus" id="bus" />
                    <Label htmlFor="bus">বাস</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="train" id="train" />
                    <Label htmlFor="train">ট্রেন</Label>
                  </div>
                </RadioGroup>

                <RadioGroup value={acType} onValueChange={setAcType} className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ac" id="ac" />
                    <Label htmlFor="ac">এসি</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="non-ac" id="non-ac" />
                    <Label htmlFor="non-ac">নন-এসি</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="transportCost">যাতায়াত খরচ:</Label>
              <Input id="transportCost" type="number" min="0" value={transportCost} onChange={(e) => setTransportCost(Math.max(0, +e.target.value))} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="otherCost">অন্যান্য খরচ:</Label>
              <Input id="otherCost" type="number" min="0" value={otherCost} onChange={(e) => setOtherCost(Math.max(0, +e.target.value))} />
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col items-center mt-4 bg-gradient-to-br from-emerald-200 to-emerald-300 rounded-b-lg p-6">
          <div className="text-center mb-4">
            <h4 className="text-lg font-medium text-emerald-800">মোট খরচ:</h4>
            <div className="text-3xl font-bold text-emerald-700 mt-2">{totalCost.toLocaleString()} টাকা</div>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

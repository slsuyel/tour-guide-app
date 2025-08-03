"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ExternalLink, MapPin } from "lucide-react"
import { useEffect, useState } from "react"
import { useIsMobile } from "@/components/hooks/useIsMobile"

export default function PanchagarhAdminPage() {
  const districtData = {
    district: {
      name: "Panchagarh",
      name_bn: "পঞ্চগড়",
    },
    upazilas: [
      {
        name: "Panchagarh Sadar",
        name_bn: "পঞ্চগড় সদর",
        unions: [
          { name: "Amarkhana", name_bn: "আমরখানা", url: "amarkhana.uniontax.gov.bd" },
          { name: "Hafizabad", name_bn: "হাফিজাবাদ", url: "hafizabad.uniontax.gov.bd" },
          { name: "Panchagarh Sadar", name_bn: "পঞ্চগড় সদর", url: "panchagarhsadar.uniontax.gov.bd" },
          { name: "Kamat Kajaldighi", name_bn: "কামাত কাজলদিঘী", url: "kamatkajaldighi.uniontax.gov.bd" },
          { name: "Chaklahat", name_bn: "চাকলাহাট", url: "chaklahat.uniontax.gov.bd" },
          { name: "Satmara", name_bn: "সাতমেড়া", url: "satmara.uniontax.gov.bd" },
          { name: "Haribhanga", name_bn: "হাড়িভাষা", url: "haribhanga.uniontax.gov.bd" },
          { name: "Dhakkamara", name_bn: "ধাক্কামারা", url: "dhakkamara.uniontax.gov.bd" },
          { name: "Magura", name_bn: "মাগুড়া", url: "magura.uniontax.gov.bd" },
          { name: "Garinabari", name_bn: "গরিনাবাড়ী", url: "garinabari.uniontax.gov.bd" },
        ],
      },
      {
        name: "Boda",
        name_bn: "বোদা",
        unions: [
          { name: "Benghari Banagram", name_bn: "বেংহারী বনগ্রাম", url: "bengharibn.uniontax.gov.bd" },
          { name: "Boda", name_bn: "বোদা", url: "boda.uniontax.gov.bd" },
          { name: "Boroshoshi", name_bn: "বড়শশী", url: "boroshoshi.uniontax.gov.bd" },
          { name: "Chandanbari", name_bn: "চন্দনবাড়ী", url: "chandanbari.uniontax.gov.bd" },
          { name: "Jholaishal Shiri", name_bn: "ঝলইশালশিরি", url: "jholaishalshiri.uniontax.gov.bd" },
          { name: "Kajoldighi Kaligonj", name_bn: "কাজলদিঘী কালিয়াগঞ্জ", url: "kajoldighikaligonj.uniontax.gov.bd" },
          { name: "Marea Bamonhat", name_bn: "মাড়েয়া বামনহাট", url: "mareabamonhat.uniontax.gov.bd" },
          { name: "Moidan Dighi", name_bn: "ময়দানদিঘি", url: "moidandighi.uniontax.gov.bd" },
          { name: "Pachpir", name_bn: "পাঁচপীর", url: "pachpir.uniontax.gov.bd" },
          { name: "Sakoa", name_bn: "সাকোয়া", url: "sakoa.uniontax.gov.bd" },
        ],
      },
      {
        name: "Debiganj",
        name_bn: "দেবীগঞ্জ",
        unions: [
          { name: "Chengthi Hazradanga", name_bn: "চেংঠী হাজরাডাঙ্গা", url: "chengthihazradanga.uniontax.gov.bd" },
          { name: "Chilahati", name_bn: "চিলাহাটি", url: "chilahati.uniontax.gov.bd" },
          { name: "Dandopal", name_bn: "দন্ডপাল", url: "dandopal.uniontax.gov.bd" },
          { name: "Debiduba", name_bn: "দেবীডুবা", url: "debiduba.uniontax.gov.bd" },
          { name: "Debiganj", name_bn: "দেবীগঞ্জ", url: "debiganj.uniontax.gov.bd" },
          { name: "Pamuli", name_bn: "পামুলী", url: "pamuli.uniontax.gov.bd" },
          { name: "Shaldanga", name_bn: "শালডাঙ্গা", url: "shaldanga.uniontax.gov.bd" },
          { name: "Sonahar Mollikadaha", name_bn: "সোনাহার মল্লিকাদহ", url: "sonaharmollikadaha.uniontax.gov.bd" },
          { name: "Sundardighi", name_bn: "সুন্দরদিঘী", url: "sundardighi.uniontax.gov.bd" },
          { name: "Tepriganj", name_bn: "টেপ্রীগঞ্জ", url: "tepriganj.uniontax.gov.bd" },
        ],
      },
      {
        name: "Atwari",
        name_bn: "আটোয়ারী",
        unions: [
          { name: "Alowakhowa", name_bn: "আলোয়াখোয়া", url: "alowakhowa.uniontax.gov.bd" },
          { name: "Balarampur", name_bn: "বলরামপুর", url: "balarampur.uniontax.gov.bd" },
          { name: "Dhamor", name_bn: "ধামোর", url: "dhamor.uniontax.gov.bd" },
          { name: "Mirzapur", name_bn: "মির্জাপুর", url: "mirzapur.uniontax.gov.bd" },
          { name: "Radhanagar", name_bn: "রাধানগর", url: "radhanagar.uniontax.gov.bd" },
          { name: "Toria", name_bn: "তোড়িয়া", url: "toria.uniontax.gov.bd" },
        ],
      },
      {
        name: "Tetulia",
        name_bn: "তেঁতুলিয়া",
        unions: [
          { name: "Banglabandha", name_bn: "বাংলাবান্ধা", url: "banglabandha.uniontax.gov.bd" },
          { name: "Tirnaihat", name_bn: "তিরনইহাট", url: "tirnaihat.uniontax.gov.bd" },
          { name: "Tetulia", name_bn: "তেঁতুলিয়া", url: "tetulia.uniontax.gov.bd" },
          { name: "Shalbahan", name_bn: "শালবাহান", url: "shalbahan.uniontax.gov.bd" },
          { name: "Bhajanpur", name_bn: "ভজনপুর", url: "bhajanpur.uniontax.gov.bd" },
          { name: "Buraburi", name_bn: "বুড়াবুড়ি", url: "buraburi.uniontax.gov.bd" },
          { name: "Devnagar", name_bn: "দেবনগর", url: "devnagar.uniontax.gov.bd" },
        ],
      },
    ],
    municipalities: [
      {
        name: "Panchagarh Municipality",
        name_bn: "পঞ্চগড় পৌরসভা",
      },
      {
        name: "Boda Municipality",
        name_bn: "বোদা পৌরসভা",
      },
      {
        name: "Debiganj Municipality",
        name_bn: "দেবীগঞ্জ পৌরসভা",
      },
    ],
  }

  const isMobile = useIsMobile()
  const [accordionValues, setAccordionValues] = useState<string[]>([])

  useEffect(() => {
    if (!isMobile) {
      // On desktop, open all accordions by default
      setAccordionValues(districtData.upazilas.map((_, i) => `unions-${i}`))
    } else {
      // On mobile, keep them closed
      setAccordionValues([])
    }
  }, [isMobile, districtData.upazilas.length])

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 mb-5">
      <header className="bg-gradient-to-r from-green-600 to-teal-500 text-white shadow-lg">
        <div className="container mx-auto py-8 px-4 text-center">
          <h1 className=" text-xl md:text-2xl xl:text-3xl font-bold">{districtData.district.name_bn} জেলার প্রশাসনিক বিভাগ</h1>
          <p className="mt-3 text-white/90 text-lg">উপজেলা, ইউনিয়ন এবং পৌরসভার তালিকা</p>
        </div>
      </header>

      <main className="container mx-auto py-5 md:py-10  px-1">
        {/* উপজেলা সমূহ */}
        <h2 className="text-2xl font-bold mb-6 text-center text-green-800">উপজেলা সমূহ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
          {districtData.upazilas.map((upazila, index) => (
            <Card
              key={index}
              className="h-full overflow-hidden border-none shadow-sm hover:shadow rounded-sm transition-shadow duration-300"
            >
              <CardHeader
                className={`
                ${index % 5 === 0 ? "bg-gradient-to-r from-green-500 to-teal-500" : ""}
                ${index % 5 === 1 ? "bg-gradient-to-r from-blue-500 to-cyan-500" : ""}
                ${index % 5 === 2 ? "bg-gradient-to-r from-purple-500 to-pink-500" : ""}
                ${index % 5 === 3 ? "bg-gradient-to-r from-orange-500 to-amber-500" : ""}
                ${index % 5 === 4 ? "bg-gradient-to-r from-red-500 to-rose-500" : ""}
                text-white p-3 md:p-5
              `}
              >
                <CardTitle className="text-xl md:text-2xl ">{upazila.name_bn}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 bg-white">
                <Accordion
                  type="multiple"
                  value={accordionValues}
                  onValueChange={setAccordionValues}
                  className="w-full"
                >
                  <AccordionItem value={`unions-${index}`} className="border-b-0">
                    <AccordionTrigger className="text-lg font-medium text-green-700">
                      ইউনিয়ন সমূহ ({upazila.unions.length})
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 mt-2">
                        {upazila.unions.map((union, idx) => (
                          <li key={idx} className="flex items-start gap-2 border-b pb-2 last:border-0">
                            <MapPin className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">{union.name_bn}</p>
                              {union.url && (
                                <Link
                                  href={`https://${union.url}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-blue-600 hover:underline flex items-center gap-1 mt-1"
                                >
                                  <ExternalLink className="h-3 w-3" />
                                  ওয়েবসাইট
                                </Link>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* পৌরসভা সমূহ */}
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">পৌরসভা সমূহ</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {districtData.municipalities.map((municipality, index) => (
            <Card
              key={index}
              className="h-full overflow-hidden border-none shadow-sm hover:shadow rounded-sm transition-shadow duration-300"
            >
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white p-2 md:p-5">
                <CardTitle className="text-xl">{municipality.name_bn}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 bg-white">
                <p className="text-gray-600 text-center">পৌরসভা</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} পঞ্চগড় জেলা তথ্য</p>
          <p className="text-sm mt-2 text-white/80">সর্বশেষ হালনাগাদ: মে ২০২৫</p>
        </div>
      </footer>
    </div>
  )
}

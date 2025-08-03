import { ExternalLink, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CourierServicesPage() {
  const courierServices = [
    {
      id: 1,
      name: "শোদাগর এক্সপ্রেস (Shodagor Express)",
      address: "হোল্ডিং-০৪৯৪-০১, ফায়ার সার্ভিসের বিপরীতে, উত্তর মিঠাপুকুর, পঞ্চগড়",
      phone: "01324-719193",
      website: "shodagorexpress.net",
    },
    {
      id: 2,
      name: "সুন্দরবন কুরিয়ার সার্ভিস (Sundarban Courier Service)",
      address: "পঞ্চগড় সদর, বিস্তারিত ঠিকানা অনুপলব্ধ",
      socialMedia: "Sundarban Courier Service Pvt Ltd, Panchagarh",
      website: "",
    },
    {
      id: 3,
      name: "হায়দার কুরিয়ার অ্যান্ড পার্সেল সার্ভিস (Haider Courier & Parcel Service)",
      address: "পঞ্চগড়",
      phone: "01888-083225",
      website: "haidercourier.com",
    },
    {
      id: 4,
      name: "ফক্স পার্সেল (Fox Parcel)",
      address: "পঞ্চগড় সদর",
      service: "সারা দেশে এক্সপ্রেস কুরিয়ার সার্ভিস",
      website: "foxparcel.com",
    },
    {
      id: 5,
      name: "পাঠাও কুরিয়ার (Pathao Courier)",
      service: "সারা দেশে দ্রুততম ডেলিভারি",
      website: "pathao.com/courier",
    },
    {
      id: 6,
      name: "ডেলিভারি টাইগার (Delivery Tiger)",
      service: "সারা দেশে পার্সেল ডেলিভারি",
      website: "deliverytiger.com.bd",
    },
    {
      id: 7,
      name: "আইএক্সপ্রেস (iXpress)",
      service: "সারা দেশে দ্রুত ও নিরাপদ শিপিং",
      website: "ixpressbd.com",
    },
    {
      id: 8,
      name: "এজেআর কুরিয়ার সার্ভিস (AJR Courier Service)",
      service: "ঢাকার মধ্যে সেম ডে ডেলিভারি, সারা দেশে পার্সেল বুকিং",
      website: "ajrgroupbd.com",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <header className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-lg">
        <div className="container mx-auto py-8 px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">পঞ্চগড় জেলার কুরিয়ার সার্ভিসের তালিকা</h1>
          <p className="mt-3 text-white/90 text-lg">
            A comprehensive list of courier services available in Panchagarh district
          </p>
        </div>
      </header>

      <main className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {courierServices.map((service) => (
            <Card
              key={service.id}
              className="h-full overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CardHeader className="bg-gradient-to-br from-emerald-700 to-emerald-400 text-white">
                <CardTitle className="text-base md:text-lg xl:text-xl">{service.name}</CardTitle>
              
              </CardHeader>
                  <CardContent className="space-y-4 pt-4 bg-white">
                  {service.service && <CardDescription className="">{service.service}</CardDescription>}
                {service.address && (
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{service.address}</span>
                  </div>
                )}

                {service.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-green-500" />
                    <span className="text-sm">{service.phone}</span>
                  </div>
                )}

                {service.socialMedia && (
                  <div className="flex items-center gap-2">
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
                      className="text-blue-600"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    <span className="text-sm">{service.socialMedia}</span>
                  </div>
                )}

                {service.website && (
                  <Button
                    variant="outline"
                    className="w-full mt-2 border-purple-300 hover:bg-purple-50 text-purple-700"
                    asChild
                  >
                    <Link href={`https://${service.website}`} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Website
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          
          <p className="text-sm mt-2 text-white/80">Information last updated: May 2025</p>
        </div>
      </footer>
    </div>
  )
}

"use client";

import { useState } from "react";
import { Search, Phone, MapPin, Mail, ArrowLeft } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

interface Hospital {
  name: string;
  address: string;
  phone?: string;
  email?: string;
  area: string;
}

interface HospitalData {
  [key: string]: Hospital[];
}

export default function HospitalsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Hospital data organized by area
  const hospitals: HospitalData = {
    sadar: [
      {
        name: "পঞ্চগড় ডায়াগনস্টিক",
        address: "পুরাতন পঞ্চগড় রোড, পঞ্চগড়",
        phone: "+৮৮০১৭৬৪-৯৫৫২৯৯",
        area: "সদর",
      },
      {
        name: "সদর হাসপাতাল, পঞ্চগড়",
        address: "পঞ্চগড় সদর, ৫০০০",
        phone: "+৮৮০৫৬৮-৬১৩১৬",
        area: "সদর",
      },
      {
        name: "সনোল্যাব",
        address: "তেঁতুলিয়া রোড, পঞ্চগড়",
        phone: "+৮৮০১৭০১-৯৫৭১৪৬",
        area: "সদর",
      },
      {
        name: "আপডেট ডায়াগনস্টিক ও কনসালটেশন সেন্টার",
        address: "এম.আর. কলেজ মোড়, তেঁতুলিয়া রোড, পঞ্চগড়",
        phone: "+৮৮০১৭১৫-১৫৫৬১৯",
        area: "সদর",
      },
      {
        name: "আমিন ক্লিনিক এবং ফিজিওথেরাপি ও ডায়াগনস্টিক সেন্টার",
        address: "জলশী চৌরাস্তা মোড়, পঞ্চগড়",
        phone: "+৮৮০১৭১১-২২১৭৪৭, +৮৮০১৬০১-৮৭৬৬৬৯",
        area: "সদর",
      },
      {
        name: "সেন্ট্রাল হাসপাতাল অ্যান্ড ডায়াগনস্টিক",
        address: "তেঁতুলিয়া রোড, পঞ্চগড়",
        area: "সদর",
      },
      {
        name: "দেশ ক্লিনিক ও ডায়াগনস্টিক",
        address: "হাজী সফির উদ্দিন সুপার মার্কেট, তেঁতুলিয়া রোড, পঞ্চগড় ৫০০০",
        phone: "+৮৮০১৭৫০-৩১৪৮৬৬",
        area: "সদর",
      },
      {
        name: "ডায়াবেটিক হাসপাতাল, পঞ্চগড়",
        address: "পঞ্চগড় সদর, ৫০০০",
        phone: "+৮৮০৫৬৮-৬১৫১৬",
        area: "সদর",
      },
      {
        name: "ডিজি কেয়ার ডায়াগনস্টিক এন্ড কনসালটেন্সি সেন্টার, পঞ্চগড়",
        address: "ঢাকা – রংপুর হাইওয়ে, পঞ্চগড় ৫০০০",
        phone: "+৮৮০১৬০৮-৪৫৮৬৫০, +৮৮০১৭৩৮-১০০০১৮",
        area: "সদর",
      },
      {
        name: "গ্রীন ডায়াগনস্টিক সেন্টার",
        address: "এম.আর. কলেজ মোড়, তেঁতুলিয়া রোড, পঞ্চগড়",
        phone: "+৮৮০১৭৫৮-৫৮৯৯৪৪, +৮৮০১৮৮৬-৭৪৩২৮৩",
        area: "সদর",
      },
      {
        name: "হামদর্দ",
        address: "পঞ্চগড়, -বাংলাবান্ধা হাইওয়ে, পঞ্চগড়",
        phone: "+৮৮০১৭৩০-০৮৭৩০২",
        area: "সদর",
      },
      {
        name: "হেলথ কেয়ার ডায়াগনস্টিক কমপ্লেক্স, পঞ্চগড়",
        address: "পঞ্চগড়, বাংলাবান্ধা হাইওয়ে, পঞ্চগড়",
        phone: "+৮৮০১৩১১-৪৭০০২৯",
        area: "সদর",
      },
      {
        name: "হেলথ কেয়ার স্পেশালাইজড হাসপাতাল, পঞ্চগড়",
        address: "পঞ্চগড়-বাংলাবান্ধা হাইওয়ে, পঞ্চগড়।",
        phone: "+৮৮০১৩১১-৪৭০০২৯",
        area: "সদর",
      },
      {
        name: "নিউ আদর্শ হাসপাতাল, পঞ্চগড়",
        address: "মিঠাপুকুর, তেতুলিয়া বাস স্ট্যান্ড, সদর, পঞ্চগড়, বাংলাদেশ",
        phone: "+৮৮০১৭৫০-৫১১৪৭০, +৮৮০১৮২৪-৪৩১৫৫২",
        email: "adarshaclinic2020@gmail.com",
        area: "সদর",
      },
      {
        name: "নিউ লাইফ ক্লিনিক পঞ্চগড়",
        address: "এম.আর. কলেজ রোড, ডকোরোপাড়া, পঞ্চগড়, বাংলাদেশ",
        phone: "+৮৮০১৭১৫-৬১৪৬৮০",
        area: "সদর",
      },
      {
        name: "নর্দান ডায়াগনস্টিক সেন্টার",
        address: "ঢাকা – রংপুর হাইওয়ে, পঞ্চগড় ৫০০০",
        phone: "+৮৮০১৭২৮-৩১৬৪৭৭",
        area: "সদর",
      },
      {
        name: "রওশন ক্লিনিক এন্ড জেনারেল হাসপাতাল",
        address: "জজ কোর্ট রোড, পঞ্চগড় সদর, পঞ্চগড়",
        phone: "+৮৮০১৭১৬-৩৪৩০০১",
        area: "সদর",
      },
      {
        name: "সিটি জেনারেল হাসপাতাল",
        address: "তেঁতুলিয়া রোড, পঞ্চগড়",
        phone: "+৮৮০১৭১৭-৭২২৪৫৫",
        area: "সদর",
      },
      {
        name: "মেডিপ্লাস ডায়াগনোষ্টিক সেন্টার",
        address: "তেঁতুলিয়া রোড,পঞ্চগড়",
        phone: "+৮৮০১৭১৪-৮০৩২৩৮",
        area: "সদর",
      },
      {
        name: "সেবা প্যাথলজি এন্ড এক্স-রে সেন্টার",
        address: "তেঁতুলিয়া রোড,পঞ্চগড়",
        phone: "+৮৮০১৭১৯-০২৮৮০০",
        area: "সদর",
      },
    ],
    debiganj: [
      {
        name: "হিউম্যান ডায়াগনোষ্টিক সেন্টার",
        address: "বাবুপাড়া, দেবীগঞ্জ,পঞ্চগড়",
        phone: "+৮৮০১৭৪৮-৭১৮২৮৭",
        area: "দেবীগঞ্জ",
      },
      {
        name: "মায়া ডায়াগনোষ্টিক সেন্টার",
        address: "দেবীগঞ্জ, পঞ্চগড়",
        phone: "+৮৮০১৮১৫-২৬৬১৭১",
        area: "দেবীগঞ্জ",
      },
      {
        name: "হিউম্যান ক্লিনিক",
        address: "বাবু পাড়া, দেবীগঞ্জ, পঞ্চগড়",
        phone: "+৮৮০১৭৪৮-৭১৮২৮৭",
        area: "দেবীগঞ্জ",
      },
      {
        name: "করতোয়া ক্লিনিক এন্ড ডায়াগনোষ্টি সেন্টার",
        address: "দেবীগঞ্জ, পঞ্চগড়",
        phone: "+৮৮০১৭১৭-৭৪৯০৫১",
        area: "দেবীগঞ্জ",
      },
      {
        name: "মায়া ক্লিনিক এন্ড ডিজিটাল ডায়াগনোষ্টিক সেন্টার",
        address: "দেবীগঞ্জ, পঞ্চগড়",
        phone: "+৮৮০১৯৪৮-৯৬৮৪৬৭",
        area: "দেবীগঞ্জ",
      },
    ],
    tetulia: [
      {
        name: "সামন্ত প্যাথলজি",
        address: "তেতুলিয়া, পঞ্চগড়",
        phone: "+৮৮০১৭১৮-৭৮৮২৬৫",
        area: "তেতুলিয়া",
      },
    ],
    atwari: [
      {
        name: "মডার্ণ ডায়াগনোষ্টিক সেন্টার",
        address: "আটোয়ারী, পঞ্চগড়",
        phone: "+৮৮০১৭১৯-৫১৩৫৭৯",
        area: "আটোয়ারী",
      },
      {
        name: "সাউদিয়া ডায়াগনোষ্টিক সেন্টার",
        address: "আটোয়ারী, পঞ্চগড়",
        phone: "+৮৮০১৭১৯-৮২৮৪৭৮",
        area: "আটোয়ারী",
      },
      {
        name: "নিরাময় নার্সিং হোম",
        address: "আটোয়ারী, পঞ্চগড়",
        phone: "+৮৮০১৭১১-২৮১৮৩৬",
        area: "আটোয়ারী",
      },
    ],
    boda: [
      {
        name: "নিরাময় ক্লিনিক এন্ড নার্সিং হোম",
        address: "বোদা, পঞ্চগড়",
        phone: "+৮৮০১৭১১-২৮১৮৩৬",
        area: "বোদা",
      },
      {
        name: "কমরেড ফরহাদ কমিউনিটি হাসপাতাল",
        address: "বানিয়াপাড়া, চন্দনবাড়ী, বোদা",
        phone: "+৮৮০১৭১৫-০০৭১৭১",
        area: "বোদা",
      },
      {
        name: "মডার্ণ ক্লিনিক",
        address: "নগর কুমারী, বোদা, পঞ্চগড়",
        phone: "+৮৮০১৭১৭-৪১৩৫৬৯",
        area: "বোদা",
      },
    ],
  }

  // Flatten the hospital data for search
  const allHospitals = Object.values(hospitals).flat();

  // Filter function for search
  const filterBySearch = (items: Hospital[]) => {
    if (!searchTerm) return items;
    
    return items.filter((item) =>
      Object.values(item).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  // Call function for mobile
  const callNumber = (number: any) => {
    if (!number) return;
    // If multiple numbers, take the first one
    const firstNumber = number.split(',')[0].trim();
    window.location.href = `tel:${firstNumber}`;
  };

  // Email function
  const sendEmail = (email: any) => {
    if (!email) return;
    window.location.href = `mailto:${email}`;
  };

  // Render hospital card
  const renderHospitalCard = (hospital: Hospital) => (
    <div 
      key={hospital.name} 
      className="bg-white border border-gray-100 rounded-lg p-4 hover:border-gray-200 transition-all"
    >
      <h3 className="font-medium text-lg text-gray-900">{hospital.name}</h3>
      
      <div className="mt-2 flex items-start gap-2 text-gray-600">
        <MapPin size={16} className="mt-1 flex-shrink-0" />
        <p>{hospital.address}</p>
      </div>
      
      {hospital.phone && (
        <div className="mt-3 flex justify-between items-center">
          <div className="flex items-center gap-2 text-gray-600">
            <Phone size={16} />
            <span className="text-sm">{hospital.phone}</span>
          </div>
          <Button 
            variant="outline" 
            size="sm"
            className="text-green-600 border-green-100 hover:bg-green-50 hover:border-green-200"
            onClick={() => callNumber(hospital.phone)}
          >
            কল করুন
          </Button>
        </div>
      )}
      
      {hospital.email && (
        <div className="mt-2 flex justify-between items-center">
          <div className="flex items-center gap-2 text-gray-600">
            <Mail size={16} />
            <span className="text-sm">{hospital.email}</span>
          </div>
          <Button 
            variant="outline" 
            size="sm"
            className="text-blue-600 border-blue-100 hover:bg-blue-50 hover:border-blue-200"
            onClick={() => sendEmail(hospital.email)}
          >
            ইমেইল
          </Button>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-teal-600 text-white py-6 px-4">
        <div className="container mx-auto">
          <Link href="/citizen-service" className="inline-flex items-center gap-2 text-white mb-4">
            <ArrowLeft size={18} />
            <span>ফিরে যান</span>
          </Link>
          <h1 className="text-2xl font-bold">হাসপাতাল ও ডায়াগনস্টিক সেন্টার - পঞ্চগড়</h1>
          <p className="mt-1 text-teal-100">সকল চিকিৎসা সেবা এক জায়গায়</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="sticky top-0 z-10 bg-white border-b px-4 py-3">
        <div className="container mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="হাসপাতাল বা এলাকা খুঁজুন..."
              className="pl-10 w-full border-gray-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {searchTerm ? (
          <div>
            <h2 className="text-xl font-medium mb-4">সার্চ রেজাল্ট ({filterBySearch(allHospitals).length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filterBySearch(allHospitals).map(renderHospitalCard)}
            </div>
          </div>
        ) : (
          <Tabs defaultValue="sadar">
            <TabsList className="mb-4 w-full flex overflow-x-auto bg-transparent h-auto p-0 space-x-2">
              <TabsTrigger value="sadar" className="px-4 py-2 rounded-full data-[state=active]:bg-teal-100 data-[state=active]:text-teal-800">
                পঞ্চগড় সদর ({hospitals.sadar.length})
              </TabsTrigger>
              <TabsTrigger value="debiganj" className="px-4 py-2 rounded-full data-[state=active]:bg-teal-100 data-[state=active]:text-teal-800">
                দেবীগঞ্জ ({hospitals.debiganj.length})
              </TabsTrigger>
              <TabsTrigger value="boda" className="px-4 py-2 rounded-full data-[state=active]:bg-teal-100 data-[state=active]:text-teal-800">
                বোদা ({hospitals.boda.length})
              </TabsTrigger>
              <TabsTrigger value="atwari" className="px-4 py-2 rounded-full data-[state=active]:bg-teal-100 data-[state=active]:text-teal-800">
                আটোয়ারী ({hospitals.atwari.length})
              </TabsTrigger>
              <TabsTrigger value="tetulia" className="px-4 py-2 rounded-full data-[state=active]:bg-teal-100 data-[state=active]:text-teal-800">
                তেতুলিয়া ({hospitals.tetulia.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="sadar" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hospitals.sadar.map(renderHospitalCard)}
              </div>
            </TabsContent>

            <TabsContent value="debiganj" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hospitals.debiganj.map(renderHospitalCard)}
              </div>
            </TabsContent>

            <TabsContent value="boda" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hospitals.boda.map(renderHospitalCard)}
              </div>
            </TabsContent>

            <TabsContent value="atwari" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hospitals.atwari.map(renderHospitalCard)}
              </div>
            </TabsContent>

            <TabsContent value="tetulia" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hospitals.tetulia.map(renderHospitalCard)}
              </div>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  );
}

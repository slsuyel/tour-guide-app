"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Shield, FileText, Users, Database, Lock, Globe, Mail, Calendar, ChevronRight, ArrowUp } from "lucide-react"
import Link from "next/link"

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("")

  const sections = [
    { id: "interpretation", title: "Interpretation & Definitions", icon: FileText },
    { id: "data-collection", title: "Data Collection", icon: Database },
    { id: "data-usage", title: "How We Use Your Data", icon: Users },
    { id: "data-retention", title: "Data Retention", icon: Lock },
    { id: "data-transfer", title: "Data Transfer", icon: Globe },
    { id: "security", title: "Security", icon: Shield },
    { id: "children", title: "Children's Privacy", icon: Users },
    { id: "links", title: "External Links", icon: Globe },
    { id: "changes", title: "Policy Changes", icon: Calendar },
    { id: "contact", title: "Contact Us", icon: Mail },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky p-2 md:p-4 top-8 shadow-none">
              <CardHeader className=" p-2 lg:p-4 pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Contents
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ScrollArea className="h-[400px]">
                  <nav className="space-y-2">
                    {sections.map((section) => {
                      const Icon = section.icon
                      return (
                        <Button
                          key={section.id}
                          variant={activeSection === section.id ? "default" : "ghost"}
                          className="w-full justify-start text-left h-auto p-3"
                          onClick={() => scrollToSection(section.id)}
                        >
                          <Icon className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span className="text-sm">{section.title}</span>
                          <ChevronRight className="h-3 w-3 ml-auto" />
                        </Button>
                      )
                    })}
                  </nav>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header */}
            <Card className="mb-8 shadow-none border-0 0 text-white bg-emerald-800">
              <CardHeader className=" p-2 lg:p-4 text-center py-5">
                <h1 className=" text-2xl lg:text-3xl font-bold mb-4">Privacy Policy</h1>
                <p className=" text-sm lg:text-xl opacity-90 mb-4">Your privacy is important to us</p>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  Last updated: July 01, 2025
                </Badge>
              </CardHeader>
            </Card>

            {/* Introduction */}
            <Card className="mb-8 shadow-none p-2 md:p-4 ">
              <CardContent className="p-8">
                <div className="prose max-w-none">
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    This Privacy Policy describes our policies and procedures on the collection, use and disclosure of
                    your information when you use our Service and tells you about your privacy rights and how the law
                    protects you.
                  </p>
                  <p className="text-base leading-relaxed text-gray-600">
                    We use your personal data to provide and improve the Service. By using the Service, you agree to the
                    collection and use of information in accordance with this Privacy Policy.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Interpretation and Definitions */}
            <Card id="interpretation" className="mb-8 shadow-none p-2 md:p-4 ">
              <CardHeader className=" p-2 lg:p-4">
                <CardTitle className="flex items-center gap-3  text-base lg:text-xl">
                  <FileText className="h-6 w-6 text-blue-600" />
                  Interpretation and Definitions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-2 lg:p-4">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Interpretation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The words of which the initial letter is capitalized have meanings defined under the following
                    conditions. The following definitions shall have the same meaning regardless of whether they appear
                    in singular or in plural.
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Definitions</h3>
                  <div className="grid gap-4">
                    {[
                      {
                        term: "Account",
                        definition:
                          "means a unique account created for You to access our Service or parts of our Service.",
                      },
                      {
                        term: "Affiliate",
                        definition:
                          'means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.',
                      },
                      {
                        term: "Application",
                        definition: "refers to Panchagarh Tour Guide, the software program provided by the Company.",
                      },
                      {
                        term: "Company",
                        definition:
                          '(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Panchagarh Tour Guide.',
                      },
                      {
                        term: "Cookies",
                        definition:
                          "are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.",
                      },
                      { term: "Country", definition: "refers to: Bangladesh" },
                      {
                        term: "Device",
                        definition:
                          "means any device that can access the Service such as a computer, a cellphone or a digital tablet.",
                      },
                      {
                        term: "Personal Data",
                        definition: "is any information that relates to an identified or identifiable individual.",
                      },
                      { term: "Service", definition: "refers to the Application or the Website or both." },
                      {
                        term: "Service Provider",
                        definition:
                          "means any natural or legal person who processes the data on behalf of the Company.",
                      },
                      {
                        term: "Usage Data",
                        definition:
                          "refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).",
                      },
                      {
                        term: "Website",
                        definition:
                          "refers to Panchagarh Tour Guide",
                      },
                      { term: "You", definition: "means the individual accessing or using the Service." },
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Badge variant="outline" className="self-start font-semibold">
                            {item.term}
                          </Badge>
                          <p className="text-gray-700 text-sm leading-relaxed flex-1">{item.definition}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card id="data-collection" className="mb-8 shadow-none p-2 md:p-4 ">
              <CardHeader className=" p-2 lg:p-4">
                <CardTitle className="flex items-center gap-3  text-base lg:text-xl">
                  <Database className="h-6 w-6 text-green-600" />
                  Collecting and Using Your Personal Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-2 lg:p-4">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Types of Data Collected</h3>

                  <div className="space-y-6">
                    <div className="bg-blue-50 p-3 lg:p-6 rounded-lg border border-blue-200">
                      <h4 className="text-lg font-semibold mb-3 text-blue-800">Personal Data</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        While using our Service, we may ask you to provide us with certain personally identifiable
                        information that can be used to contact or identify you. Personally identifiable information may
                        include, but is not limited to:
                      </p>
                      <Badge variant="secondary">Usage Data</Badge>
                    </div>

                    <div className="bg-green-50 p-3 lg:p-6 rounded-lg border border-green-200">
                      <h4 className="text-lg font-semibold mb-3 text-green-800">Usage Data</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Usage Data is collected automatically when using the Service. It may include information such as
                        your Device's IP address, browser type, browser version, the pages of our Service that you
                        visit, the time and date of your visit, the time spent on those pages, unique device
                        identifiers, and other diagnostic data.
                      </p>
                    </div>

                    <div className="bg-purple-50 p-3 lg:p-6 rounded-lg border border-purple-200">
                      <h4 className="text-lg font-semibold mb-3 text-purple-800">Tracking Technologies and Cookies</h4>
                      <p className="text-gray-700 leading-relaxed">
                        We use Cookies and similar tracking technologies to track the activity on our Service and store
                        certain information. Tracking technologies include beacons, tags, and scripts.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card id="data-usage" className="mb-8 shadow-none p-2 md:p-4 ">
              <CardHeader className=" p-2 lg:p-4">
                <CardTitle className="flex items-center gap-3  text-base lg:text-xl">
                  <Users className="h-6 w-6 text-purple-600" />
                  Use of Your Personal Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {[
                    {
                      title: "Service Provision",
                      description:
                        "To provide and maintain our Service, including to monitor the usage of our Service.",
                    },
                    {
                      title: "Account Management",
                      description: "To manage your registration as a user of the Service.",
                    },
                    {
                      title: "Contract Performance",
                      description:
                        "To fulfill the purchase contract for the products, items, or services you have purchased.",
                    },
                    { title: "Communication", description: "For communication via email, phone, or SMS." },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <ChevronRight className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card id="data-retention" className="mb-8 shadow-none p-2 md:p-4 ">
              <CardHeader className=" p-2 lg:p-4">
                <CardTitle className="flex items-center gap-3  text-base lg:text-xl">
                  <Lock className="h-6 w-6 text-orange-600" />
                  Retention of Your Personal Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  The Company will retain your Personal Data only for as long as is necessary for the purposes set out
                  in this Privacy Policy. We will retain Usage Data for internal analysis purposes.
                </p>
              </CardContent>
            </Card>

            {/* Data Transfer */}
            <Card id="data-transfer" className="mb-8 shadow-none p-2 md:p-4 ">
              <CardHeader className=" p-2 lg:p-4">
                <CardTitle className="flex items-center gap-3  text-base lg:text-xl">
                  <Globe className="h-6 w-6 text-blue-600" />
                  Transfer of Your Personal Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Your information, including Personal Data, may be transferred to computers located outside of your
                  jurisdiction. By agreeing to this Privacy Policy, you consent to such transfers.
                </p>
              </CardContent>
            </Card>

            {/* Security */}
            <Card id="security" className="mb-8 shadow-none p-2 md:p-4 ">
              <CardHeader className=" p-2 lg:p-4">
                <CardTitle className="flex items-center gap-3  text-base lg:text-xl">
                  <Shield className="h-6 w-6 text-red-600" />
                  Security of Your Personal Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-red-50 p-3 lg:p-6 rounded-lg border border-red-200">
                  <p className="text-gray-700 leading-relaxed">
                    The security of your Personal Data is important to us, but remember that no method of transmission
                    over the Internet, or method of electronic storage is 100% secure.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card id="children" className="mb-8 shadow-none p-2 md:p-4 ">
              <CardHeader className=" p-2 lg:p-4">
                <CardTitle className="flex items-center gap-3  text-base lg:text-xl">
                  <Users className="h-6 w-6 text-pink-600" />
                  Children's Privacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Our Service does not address anyone under the age of 13. We do not knowingly collect personally
                  identifiable information from anyone under the age of 13.
                </p>
              </CardContent>
            </Card>

            {/* External Links */}
            <Card id="links" className="mb-8 shadow-none p-2 md:p-4 ">
              <CardHeader className=" p-2 lg:p-4">
                <CardTitle className="flex items-center gap-3  text-base lg:text-xl">
                  <Globe className="h-6 w-6 text-teal-600" />
                  Links to Other Websites
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Our Service may contain links to other websites that are not operated by us. We have no control over
                  and assume no responsibility for the content, privacy policies, or practices of any third-party sites.
                </p>
              </CardContent>
            </Card>

            {/* Policy Changes */}
            <Card id="changes" className="mb-8 shadow-none p-2 md:p-4 ">
              <CardHeader className=" p-2 lg:p-4">
                <CardTitle className="flex items-center gap-3  text-base lg:text-xl">
                  <Calendar className="h-6 w-6 text-indigo-600" />
                  Changes to this Privacy Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We may update our Privacy Policy from time to time. You will be notified of any changes by posting the
                  new Privacy Policy on this page.
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card id="contact" className="mb-8 shadow-none p-2 md:p-4 ">
              <CardHeader className=" p-2 lg:p-4">
                <CardTitle className="flex items-center gap-3  text-base lg:text-xl">
                  <Mail className="h-6 w-6 text-green-600" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-green-50 p-3 lg:p-6 rounded-lg border border-green-200">
                  <p className="text-gray-700 leading-relaxed">
                    If you have any questions about this Privacy Policy, you can contact us at{" "}
                    <Link
                      href="/contact-us"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800 font-semibold underline"
                    >
                      our contact page
                    </Link>
                    .
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Back to Top Button */}
        <Button onClick={scrollToTop} className="fixed bottom-8 right-8 rounded-full p-3 shadow-none" size="icon">
          <ArrowUp className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export default PrivacyPolicy

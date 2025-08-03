"use client"

import type React from "react"
import { useState } from "react"
import {
  Send,
  MessageSquare,
  Headphones,
} from "lucide-react"

export default function ContactPage() {
  // State for form fields
  const [helpDeskForm, setHelpDeskForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })

  const [feedbackForm, setFeedbackForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })

  // Active tab state
  const [activeTab, setActiveTab] = useState<"helpdesk" | "feedback">("helpdesk")

  // Collapsible sections for mobile
  const [expandedSection, setExpandedSection] = useState<string | null>("emergency")

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null)
    } else {
      setExpandedSection(section)
    }
  }

  // Handle form input changes
  const handleHelpDeskChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setHelpDeskForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleFeedbackChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFeedbackForm((prev) => ({ ...prev, [name]: value }))
  }

  // Handle form submissions
  const handleHelpDeskSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    console.log("Help Desk Form Submitted:", helpDeskForm)
    // Reset form
    setHelpDeskForm({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    })
    // Show success message
    alert("আপনার অনুরোধ সফলভাবে জমা হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।")
  }

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    console.log("Feedback Form Submitted:", feedbackForm)
    // Reset form
    setFeedbackForm({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    })
    // Show success message
    alert("আপনার মতামত সফলভাবে জমা হয়েছে। আপনার মূল্যবান মতামতের জন্য ধন্যবাদ।")
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Page Header */}
        <div className="text-center mb-6 md:mb-10">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">যোগাযোগ করুন</h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            আমাদের সাথে যোগাযোগ করতে নিচের যেকোনো মাধ্যম ব্যবহার করুন। আমরা আপনার প্রশ্ন বা মতামতের জন্য অপেক্ষা করছি।
          </p>

          {/* Privacy Policies menu link */}
          <div className="mt-4">
            <a
              href="/privacy-policies"
              className="text-emerald-600 hover:underline font-medium text-sm md:text-base"
            >
              Privacy Policies
            </a>
          </div>
        </div>

        <div className="mb-6">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab("helpdesk")}
                className={`flex-1 py-3 px-4 text-center font-medium text-sm md:text-base ${
                  activeTab === "helpdesk"
                    ? "text-emerald-600 border-b-2 border-emerald-600"
                    : "text-gray-600 hover:text-emerald-600"
                }`}
              >
                <Headphones className="h-4 w-4 md:h-5 md:w-5 inline-block mr-1 md:mr-2" />
                হেল্পডেস্ক
              </button>
              <button
                onClick={() => setActiveTab("feedback")}
                className={`flex-1 py-3 px-4 text-center font-medium text-sm md:text-base ${
                  activeTab === "feedback"
                    ? "text-emerald-600 border-b-2 border-emerald-600"
                    : "text-gray-600 hover:text-emerald-600"
                }`}
              >
                <MessageSquare className="h-4 w-4 md:h-5 md:w-5 inline-block mr-1 md:mr-2" />
                মতামত
              </button>
            </div>

            {/* Help Desk Form */}
            {activeTab === "helpdesk" && (
              <div className="p-4 md:p-6">
                <form onSubmit={handleHelpDeskSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="helpdesk-name" className="block text-sm font-medium text-gray-700 mb-1">
                        নাম <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="helpdesk-name"
                        name="name"
                        placeholder="আপনার নাম"
                        className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        value={helpDeskForm.name}
                        onChange={handleHelpDeskChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="helpdesk-phone" className="block text-sm font-medium text-gray-700 mb-1">
                        ফোন <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="helpdesk-phone"
                        name="phone"
                        placeholder="আপনার ফোন নম্বর"
                        className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        value={helpDeskForm.phone}
                        onChange={handleHelpDeskChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="helpdesk-email" className="block text-sm font-medium text-gray-700 mb-1">
                        ইমেইল <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="helpdesk-email"
                        name="email"
                        placeholder="আপনার ইমেইল ঠিকানা"
                        className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        value={helpDeskForm.email}
                        onChange={handleHelpDeskChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="helpdesk-subject" className="block text-sm font-medium text-gray-700 mb-1">
                        বিষয় <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="helpdesk-subject"
                        name="subject"
                        placeholder="আপনার প্রশ্নের বিষয়"
                        className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        value={helpDeskForm.subject}
                        onChange={handleHelpDeskChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="helpdesk-message" className="block text-sm font-medium text-gray-700 mb-1">
                        বার্তা <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="helpdesk-message"
                        name="message"
                        rows={4}
                        placeholder="আপনার প্রশ্ন বা সমস্যা বিস্তারিত লিখুন"
                        className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        value={helpDeskForm.message}
                        onChange={handleHelpDeskChange}
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 md:py-3 px-4 rounded-lg transition-colors flex items-center justify-center text-sm md:text-base"
                    >
                      <Send className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                      প্রেরণ করুন
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Feedback Form */}
            {activeTab === "feedback" && (
              <div className="p-4 md:p-6">
                <form onSubmit={handleFeedbackSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="feedback-name" className="block text-sm font-medium text-gray-700 mb-1">
                        নাম <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="feedback-name"
                        name="name"
                        placeholder="আপনার নাম"
                        className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        value={feedbackForm.name}
                        onChange={handleFeedbackChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="feedback-phone" className="block text-sm font-medium text-gray-700 mb-1">
                        ফোন <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="feedback-phone"
                        name="phone"
                        placeholder="আপনার ফোন নম্বর"
                        className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        value={feedbackForm.phone}
                        onChange={handleFeedbackChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="feedback-email" className="block text-sm font-medium text-gray-700 mb-1">
                        ইমেইল <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="feedback-email"
                        name="email"
                        placeholder="আপনার ইমেইল ঠিকানা"
                        className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        value={feedbackForm.email}
                        onChange={handleFeedbackChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="feedback-subject" className="block text-sm font-medium text-gray-700 mb-1">
                        বিষয় <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="feedback-subject"
                        name="subject"
                        placeholder="আপনার মতামতের বিষয়"
                        className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        value={feedbackForm.subject}
                        onChange={handleFeedbackChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="feedback-message" className="block text-sm font-medium text-gray-700 mb-1">
                        মতামত <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="feedback-message"
                        name="message"
                        rows={4}
                        placeholder="আপনার মতামত বিস্তারিত লিখুন"
                        className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        value={feedbackForm.message}
                        onChange={handleFeedbackChange}
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 md:py-3 px-4 rounded-lg transition-colors flex items-center justify-center text-sm md:text-base"
                    >
                      <Send className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                      প্রেরণ করুন
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

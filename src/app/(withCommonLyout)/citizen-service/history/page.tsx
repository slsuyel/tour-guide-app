import Image from "next/image"

import { ChevronRight, MapPin, Building, Users, Mountain, Apple, Computer } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import TouristAttractions from "@/components/Pages/HomePage/tourist-attractions"

export default function HistoryOfDis() {
    return (
        <div>

            <section id="overview" className="w-full py-5 md:py-8 lg:py-16">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">পঞ্চগড় পরিচিতি</div>
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">পঞ্চগড় জেলা সম্পর্কে</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                ১৯৮৪ সালের ১লা ফেব্রুয়ারী তেঁতুলিয়া, পঞ্চগড়, বোদা, দেবীগঞ্জ ও আটোয়ারী উপজেলা নিয়ে পঞ্চগড় জেলা গঠন করা হয়। রাজনগড়,
                                মিরগড়, ভিতরগড়, দেবেনগড় ও হোসেনগড় নামের পাঁচটি গড়ের সমন্বয়ে গঠিত পঞ্চগড় জেলার তিনদিকেই ১৮৩ মাইল বেষ্টিত
                                বাংলাদেশ-ভারতীয় সীমান্ত অঞ্চল।
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                        <Card className=" p-2 md:p-4 shadow-sm  rounded-md">
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <Users className="h-8 w-8 text-emerald-600" />
                                <CardTitle className="text-xl">জনসংখ্যা</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>পঞ্চগড়ে মোট জনসংখ্যা ১১ লাখ ৭৯ হাজার ৮৪৩ জন।পুরুষ ৪৯ দশমিক ৯২ এবং নারী ৫০ দশমিক ৮ শতাংশ। প্রতি বর্গ কিলোমিটারে ৭৮৯ জনের বসবাস,স্বাক্ষরতার হার ৭৩ দশমিক ৬৬ শতাংশ, বিদ্যুৎ সুবিধা পাচ্ছে ৯৮ দশমিক ৯৭ শতাংশ, জনসংখ্যার বার্ষিক গড় বৃদ্ধি হার ১ দশমিক ৫৮ যা ১৯৯১ সালে ছিল ২ দশমিক ১০ শতাংশ। (জনশুমারি ও গৃহগণনা ২০২২ রিপোর্ট )</p>
                            </CardContent>
                        </Card>
                        <Card className=" p-2 md:p-4 shadow-sm  rounded-md">
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <MapPin className="h-8 w-8 text-emerald-600" />
                                <CardTitle className="text-xl">আয়তন</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>জেলার মোট আয়তন ১৪০৪.৬২ বর্গ কি:মি:</p>
                            </CardContent>
                        </Card>
                        <Card className=" p-2 md:p-4 shadow-sm  rounded-md">
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <Building className="h-8 w-8 text-emerald-600" />
                                <CardTitle className="text-xl">উপজেলা</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>তেঁতুলিয়া, পঞ্চগড়, বোদা, দেবীগঞ্জ ও আটোয়ারী</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section id="history" className="w-full py-5 md:py-8 lg:py-16 bg-slate-50">
              <TouristAttractions/>
            </section>

            <section id="liberation-war" className="w-full py-5 md:py-8 lg:py-16">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">মুক্তিযুদ্ধে পঞ্চগড়</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                তিন দিকে সীমান্ত পরিবেষ্টিত ও ভৌগোলিক অবস্থানের দিক থেকে গুরুত্বপূর্ণ বাংলাদেশের উত্তরতম জেলা পঞ্চগড় অঞ্চলে ১৯৭১ সালে
                                মুক্তিযুদ্ধের পুরোটা সময়জুড়ে সংঘটিত হয় ব্যাপক গেরিলা ও সম্মুখ যুদ্ধ।
                            </p>
                        </div>
                    </div>

                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
                        <Card className="flex flex-col justify-between">
                            <div>
                                <CardHeader>
                                    <CardTitle>৬ নং সেক্টর</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        ৬ নং সেক্টরের অন্তর্গত ৬-এ সাব-সেক্টর হিসেবে পঞ্চগড় অঞ্চলের মুক্তাঞ্চলের পরিধি ও বিস্তৃতি ছিল বাংলাদেশের অন্যান্য
                                        মুক্তাঞ্চলের চেয়ে বেশী।
                                    </p>
                                </CardContent>
                            </div>
                            <CardFooter>
                                <p className="text-sm text-gray-500">পাক বাহিনীর কাছ থেকে এ জেলা সম্পূর্ণরূপে মুক্ত হয় ২৯ নভেম্বর, ১৯৭১।</p>
                            </CardFooter>
                        </Card>

                        <Card className="flex flex-col justify-between">
                            <div>
                                <CardHeader>
                                    <CardTitle>মুক্তিযোদ্ধা</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>বর্তমানে পঞ্চগড়ে মোট মুক্তিযোদ্ধার সংখ্যা ২২০০ জন, তন্মোধ্যে ১৬৪৪ জন নিয়মিত মুক্তিযোদ্ধা ভাতা পান।</p>
                                </CardContent>
                            </div>
                            <CardFooter>
                                <p className="text-sm text-gray-500">প্রতি ৩ মাস অন্তর ১৬৪৪ জন মুক্তিযোদ্ধা ২০০০/- করে মুক্তিযোদ্ধা ভাতা পান।</p>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>

            <section id="agriculture" className="w-full py-5 md:py-8 lg:py-16 bg-emerald-50">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">পঞ্চগড়ের চা চাষ ও কৃষি</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                কৃষি হচ্ছে পঞ্চগড় জেলার অধিবাসীদের জীবিকার প্রধান উৎস। এ জেলার উর্বর জমিতে প্রচুর পরিমাণ ধান ও গম উৎপাদিত হয়।
                            </p>
                        </div>
                    </div>

                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
                        <Card className="overflow-hidden shadow-sm p-2 md:p-3">
                           
                            <CardHeader>
                                <CardTitle>চা চাষ</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    পঞ্চগড় জেলায় ২,৭৯৪.৫৮ একর জমিতে উৎকৃষ্ট মানের চা উৎপন্ন হয়। ২০০০ সালে এ জেলায় চায়ের চাষ শুরু হয়। বর্তমানে ০৯ টি
                                    এস্টেটসহ ৩২৭টি প্লটে চা চাষ করা হচ্ছে। এ জেলায় মোট পাঁচটি চা ফ্যাক্টরী চালু রয়েছে।
                                </p>
                            </CardContent>
                            <CardFooter>
                                <p className="text-sm text-gray-500">
                                    পঞ্চগড়ের অর্গানিক চা ইউরোপ-আমেরিকাসহ মধ্যপ্রাচ্যের বিভিন্ন দেশে রপ্তানি হয়ে থাকে।
                                </p>
                            </CardFooter>
                        </Card>

                        <Card className="overflow-hidden shadow-sm p-2 md:p-3">
                           
                            <CardHeader>
                                <CardTitle>কৃষি উৎপাদন</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    ২০১১-২০১২ অর্থ বছরে এ জেলায় ৪,৩৪,১৯০ মেঃ টন খাদ্যশস্য উৎপাদিত হয়। জেলার মোট খাদ্যশস্যের চাহিদা হচ্ছে ১,৬৪,৩২৮ মেঃ
                                    টন। জাতীয় খাদ্য ভান্ডারে এ জেলা থেকে উলেস্নখযোগ্য পরিমাণ খাদ্য শস্য প্রতিবছর যুক্ত হচ্ছে।
                                </p>
                            </CardContent>
                            <CardFooter>
                                <p className="text-sm text-gray-500">
                                    ধান ও গম ছাড়াও পঞ্চগড় জেলায় প্রচুর ভুট্টা চাষ হয়। গত অর্থ বছরে এ জেলায় ৯৪,৯০০ মেঃ টন ভুট্টা উৎপন্ন হয়।
                                </p>
                            </CardFooter>
                        </Card>

                        <Card className="overflow-hidden md:col-span-2">
                            <CardHeader>
                                <CardTitle>ফল চাষ</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                    <div className="flex items-center space-x-4">
                                        <Apple className="h-10 w-10 text-emerald-600" />
                                        <div>
                                            <h3 className="font-medium">কমলালেবু</h3>
                                            <p className="text-sm text-gray-500">প্রায় ২০০ হেক্টর জমিতে কমলালেবুর বাগান রয়েছে।</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <Apple className="h-10 w-10 text-emerald-600" />
                                        <div>
                                            <h3 className="font-medium">প্যাশন ফল</h3>
                                            <p className="text-sm text-gray-500">
                                                দেবীগঞ্জ উপজেলায় ব্যক্তিগত উদ্যোগে প্রায় ১ একর জমিতে বিদেশী ফল প্যাশন ফলের(ট্যাংক) চাষ হচ্ছে।
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <Apple className="h-10 w-10 text-emerald-600" />
                                        <div>
                                            <h3 className="font-medium">মাল্টা</h3>
                                            <p className="text-sm text-gray-500">এ জেলার প্রায় ১০/১৫ একর জমিতে মাল্টা চাষ হচেছ।</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section id="social" className="w-full py-5 md:py-8 lg:py-16">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">পঞ্চগড়ে সামাজিক নিরাপত্তা বেষ্টনী</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                পঞ্চগড়ে সামাজিক নিরাত্তা নিশ্চিত করার জন্য গড়ে উঠেছে বিভিন্ন ধরনের সামাজিক নিরাপত্তা বেষ্টনী।
                            </p>
                        </div>
                    </div>

                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
                        <Card className=" p-2 md:p-4 shadow-sm  rounded-md">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-lg">মুক্তিযোদ্ধা সম্মানী ভাতা</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold">১৬৪৪ জন</p>
                                <p className="text-sm text-gray-500">প্রতি ৩ মাস অন্তর ২০০০/- টাকা করে</p>
                            </CardContent>
                        </Card>

                        <Card className=" p-2 md:p-4 shadow-sm  rounded-md">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-lg">বয়স্ক ভাতা</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold">১৮,৭৬৭ জন</p>
                                <p className="text-sm text-gray-500">প্রতিমাসে ৩০০/- টাকা করে</p>
                            </CardContent>
                        </Card>

                        <Card className=" p-2 md:p-4 shadow-sm  rounded-md">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-lg">বিধবা ভাতা</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold">১০,৫৬৫ জন</p>
                                <p className="text-sm text-gray-500">প্রতি মাসে ৩০০/- টাকা করে</p>
                            </CardContent>
                        </Card>

                        <Card className=" p-2 md:p-4 shadow-sm  rounded-md">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-lg">প্রতিবন্ধী ভাতা</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold">১,৯৭৫ জন</p>
                                <p className="text-sm text-gray-500">প্রতিমাসে ৩০০/- টাকা করে</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section id="bangla-bandha" className="w-full py-5 md:py-8 lg:py-16 bg-slate-50">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">বাংলাবান্ধা স্থল বন্দর</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                বাংলাদেশের সর্বউত্তরের উপজেলা তেঁতুলিয়া। এই উপজেলার বাংলাবান্ধা ইউনিয়নে রয়েছে বাংলাবান্ধা স্থলবন্দর।
                            </p>
                        </div>
                    </div>

                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
                        <div>
                           
                        </div>

                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">বন্দর পরিচিতি</h3>
                                <p className="text-gray-500">
                                    মহানন্দা নদীর তীর ও ভারতের সীমান্ত সংলগ্ন প্রায় ১০ একর জমিতে ১৯৯৭ সালে বাংলাবান্ধা স্থলবন্দর প্রতিষ্ঠিত হয়। এ বন্দরের
                                    মাধ্যমে ভারত ও নেপালের সাথে আমদানি-রপ্তানি কার্যক্রম চলমান রয়েছে।
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">আন্তর্জাতিক সংযোগ</h3>
                                <p className="text-gray-500">
                                    এটি বাংলাদেশের একমাত্র স্থলবন্দর যার মাধ্যমে ০৩টি দেশের সাথে (ভারত, নেপাল, ভুটান) সুদৃঢ় যোগাযোগ গড়ে উঠার সম্ভাবনা রয়েছে।
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">আমদানি-রপ্তানি</h3>
                                <p className="text-gray-500">
                                    এ বন্দরের মাধ্যমে বাংলাদেশ থেকে নেপালে ব্যাটারী, সীসা, পাট, ফলের রস, ওয়েস্ট কটন, কাপড়, কাঠ ও প্লাস্টিকের আসবাবপত্র
                                    রপ্তানি করা হয়। একই সাথে ভারত থেকে প্রতিদিন গড়ে প্রায় ১,০০০ মেঃ টন পাথর এবং নেপাল থেকে গড়ে প্রতিদিন ১০০ মেঃ টন
                                    ডাল আমদানি করা হয়।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="stone" className="w-full py-5 md:py-8 lg:py-16">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">পাথর উত্তোলন</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                পাথর উত্তোলন পঞ্চগড় জেলাবাসীর জীবিকার একটি উল্লেখযোগ্য উৎস।
                            </p>
                        </div>
                    </div>

                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
                        <Card className="overflow-hidden shadow-sm p-2 md:p-3">
                           
                            <CardHeader>
                                <CardTitle>পাথর মহাল</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    পঞ্চগড় জেলার ০৮ টি নদীর মোট ১৯ টি পাথর মহাল থেকে পাথর উত্তোলন করা হয়। এর মধ্যে পঞ্চগড় সদর ও তেঁতুলিয়া উপজেলায় ০৮
                                    টি করে, বোদা উপজেলায় ০২টি এবং দেবীগঞ্জ উপজেলায় ০১টি পাথর মহাল অবস্থিত।
                                </p>
                            </CardContent>
                            <CardFooter>
                                <p className="text-sm text-gray-500">এসব পাথর মহালে প্রায় ২০,০০০ শ্রমিক কর্মরত আছেন।</p>
                            </CardFooter>
                        </Card>

                        <div className="flex flex-col justify-center space-y-6">
                            <div className="flex items-center space-x-4">
                                <Mountain className="h-12 w-12 text-slate-800" />
                                <div>
                                    <h3 className="text-xl font-bold">১৯টি</h3>
                                    <p className="text-gray-500">পাথর মহাল</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <Users className="h-12 w-12 text-slate-800" />
                                <div>
                                    <h3 className="text-xl font-bold">২০,০০০+</h3>
                                    <p className="text-gray-500">কর্মরত শ্রমিক</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <MapPin className="h-12 w-12 text-slate-800" />
                                <div>
                                    <h3 className="text-xl font-bold">৪টি</h3>
                                    <p className="text-gray-500">উপজেলায় বিস্তৃত</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="mid-day-meal" className="w-full py-5 md:py-8 lg:py-16 bg-amber-50">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">মিড ডে মিল</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                পঞ্চগড় জেলার ৫টি উপজেলার ১০টি প্রাথমিক বিদ্যালয়ে জেলা প্রশাসনের উদ্যোগে প্রাথমিকভাবে মিড-ডে মিল কর্মসূচি বাস্তবায়িত হচ্ছে।
                            </p>
                        </div>
                    </div>

                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">উদ্দেশ্য</h3>
                                <ul className="ml-6 list-disc space-y-2 text-gray-500">
                                    <li>প্রাথমিক বিদ্যালয়ের শিক্ষার্থীদের ঝরে পড়া রোধ</li>
                                    <li>শিখন কার্যক্রম সফল করা</li>
                                    <li>শিশুদের পুষ্টি চাহিদা মেটানো</li>
                                    <li>তাদেরকে বিদ্যালয়মুখী করা</li>
                                </ul>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">সহায়তা</h3>
                                <p className="text-gray-500">
                                    এ কর্মসূচির আওতায় প্রাথমিক বিদ্যালয়ের প্রত্যেক শিক্ষার্থী প্রতিমাসে ০৩ কেজি চাল ও ২৫০ গ্রাম ডাল সরবরাহ করে।
                                </p>
                            </div>
                        </div>

                       
                    </div>
                </div>
            </section>

            <section id="digital" className="w-full py-5 md:py-8 lg:py-16">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">পঞ্চগড় জেলায় ডিজিটাল কার্যক্রম</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                পঞ্চগড় জেলার ৪৩টি ইউনিয়ন তথ্য সেবা কেন্দ্র থেকে সাধারণ জনগণকে এখন কম্পিউটার ও ইন্টারনেট সম্পর্কিত সকল সেবা প্রদান করা
                                হচ্ছে।
                            </p>
                        </div>
                    </div>

                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
                        <Card className=" p-2 md:p-4 shadow-sm  rounded-md">
                            <CardHeader>
                                <CardTitle>ইউনিয়ন তথ্য সেবা কেন্দ্র</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4">
                                        <Computer className="h-10 w-10 text-blue-600" />
                                        <div>
                                            <h3 className="font-medium">৪৩টি</h3>
                                            <p className="text-sm text-gray-500">ইউনিয়ন তথ্য সেবা কেন্দ্র</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <Users className="h-10 w-10 text-blue-600" />
                                        <div>
                                            <h3 className="font-medium">৮৬ জন</h3>
                                            <p className="text-sm text-gray-500">উদ্যোক্তার কর্মসংস্থান</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <Users className="h-10 w-10 text-blue-600" />
                                        <div>
                                            <h3 className="font-medium">২০,০০০+</h3>
                                            <p className="text-sm text-gray-500">মাসিক সেবাগ্রহীতা</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className=" p-2 md:p-4 shadow-sm  rounded-md">
                            <CardHeader>
                                <CardTitle>প্রদত্ত সেবাসমূহ</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                    <li className="flex items-center space-x-2">
                                        <ChevronRight className="h-4 w-4 text-blue-600" />
                                        <span>অন-লাইনে জন্ম ও মৃত্যু নিবন্ধন</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <ChevronRight className="h-4 w-4 text-blue-600" />
                                        <span>চাকুরীর দরখাস্ত</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <ChevronRight className="h-4 w-4 text-blue-600" />
                                        <span>স্বল্প মূল্যে ছবি তোলা</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <ChevronRight className="h-4 w-4 text-blue-600" />
                                        <span>অর্থ আদান-প্রদান</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <ChevronRight className="h-4 w-4 text-blue-600" />
                                        <span>ফটোকপি, কম্পিউটার কম্পোজ</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <ChevronRight className="h-4 w-4 text-blue-600" />
                                        <span>ভিডিও প্রদর্শন, স্ক্যানিং</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <ChevronRight className="h-4 w-4 text-blue-600" />
                                        <span>পরীক্ষার ফলাফল</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <ChevronRight className="h-4 w-4 text-blue-600" />
                                        <span>ভর্তির আবেদন</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <ChevronRight className="h-4 w-4 text-blue-600" />
                                        <span>ই-পুর্জি, ই-টেন্ডারিং</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <ChevronRight className="h-4 w-4 text-blue-600" />
                                        <span>ই-মেইল</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="md:col-span-2">
                            <CardHeader>
                                <CardTitle>ডিজিটাল অগ্রগতি</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                                        <p className="text-3xl font-bold">৯,৫৩,৫২৫</p>
                                        <p className="text-center text-sm">অন-লাইনে জন্ম নিবন্ধন সম্পন্ন</p>
                                    </div>

                                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                                        <p className="text-3xl font-bold">৭৫০+</p>
                                        <p className="text-center text-sm">মাসিক কম্পিউটার প্রশিক্ষণার্থী</p>
                                    </div>

                                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                                        <p className="text-3xl font-bold">৩২টি</p>
                                        <p className="text-center text-sm">আধুনিক কম্পিউটার ল্যাব স্থাপন</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section id="scouting" className="w-full py-5 md:py-8 lg:py-16 bg-slate-50">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">স্কাউটিং কার্যক্রমে পঞ্চগড়</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                পঞ্চগড় রোভার স্কাউটে বেসিক কোর্স সম্পন্নকারী লিডারের সংখ্যা কাব শাখায়-৬৫৫ জন, স্কাউটে-৩৯৮ জন এবং উড ব্যাজার লিডারের সংখ্যা
                                কাব শাখায় ২৫ জন ও স্কাউটে শাখায়-২২ জন।
                            </p>
                        </div>
                    </div>

                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
                      
                        <div className="flex flex-col justify-center space-y-6">
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">উল্লেখযোগ্য কার্যক্রম</h3>
                                <ul className="ml-6 list-disc space-y-2 text-gray-500">
                                    <li>পঞ্চগড় সদর ও দেবীগঞ্জে ২টি ইউনিট লিডার ওরিয়েন্টেশন কোর্স</li>
                                    <li>দেবীগঞ্জে ২টি গ্রুপ সভাপতি ওরিয়েন্টেশন কোর্স</li>
                                    <li>জগদলে জেলা স্কাউট সমাবেশ ও জেলা কাব ক্যাম্পুরী</li>
                                    <li>আটোয়ারীতে কাব ইউনিট লিডার বেসিক কোর্স</li>
                                    <li>তেঁতুলিয়ায় জাতীয় এয়ার ইন্টারনেট জাম্বুরী</li>
                                </ul>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">অর্জন</h3>
                                <p className="text-gray-500">
                                    দিনাজপুরে আঞ্চলিক কাব স্কাউট প্রতিভা অন্বেষণ প্রতিযোগিতায় ৮টি বিয়য়ের মধ্যে ৪টি বিষয়ে প্রথম স্থান ও ৩টি বিষয়ে দ্বিতীয়
                                    স্থান অর্জন করে।
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">প্রশিক্ষণ কেন্দ্র</h3>
                                <p className="text-gray-500">
                                    পঞ্চগড় জেলা প্রশাসকের ঐকামিত্মক প্রচেষ্টায় পঞ্চগড়ের দেবীগঞ্জ উপজেলায় স্কাউট প্রশিক্ষণ কেন্দ্র নির্মাণের জন্য ডিসেম্বর
                                    ২০১২তে বাংলাদেশ সরকার কর্তৃক ১৫.৩৭ একর জমি বাংলাদেশ স্কাউটসকে দীর্ঘ মেয়াদী বন্দোবস্ত দেয়া হয়েছে।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

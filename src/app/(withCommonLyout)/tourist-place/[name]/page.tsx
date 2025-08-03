"use client"
import EcoParkSection from '@/components/Pages/HomePage/eco-park-section';
import TouristPlaceDetails from '@/components/Pages/Others/PlaceDetails';
import { useGetPlaceByNameQuery } from '@/components/Redux/RTK/placeApi';
import { useParams } from 'next/navigation';
import React from 'react';

interface TTouristPlace {
  id: number;
  category_id: string;
  name: string;
  location: string;
  description: string;
  short_description: string | null;
  history: string;
  architecture: string;
  how_to_go: string;
  where_to_stay: string;
  ticket_price: string;
  opening_hours: string;
  best_time_to_visit: string;
  special_features: string | null;
  image_url: string;
  main_attractions: string | null;
  purpose_and_significance: string | null;
  created_at: string; // ISO datetime
  updated_at: string; // ISO datetime
  gallery: (string | null)[];
  map_link: string;
}

const SinglePlace = () => {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name as string);
  const { data, isLoading, isError } = useGetPlaceByNameQuery(decodedName);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-[58vh]">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
        <p className="mt-4 text-lg font-medium text-gray-600">{decodedName} লোড হচ্ছে ...</p>
      </div>
    );
  }


  const place: any | undefined = data?.data;

if (place?.length === 0) {
  return (
    <div className="flex flex-col items-center justify-center md: lg:h-[58vh]">
      <p className="text-xl text-red-500 font-semibold">{decodedName} পাওয়া যায়নি।</p>
      <p className="text-gray-600 mt-2">অনুগ্রহ করে সঠিক তথ্য দিন অথবা পরে আবার চেষ্টা করুন।</p>
    </div>
  );
}



  return (
    <div className=' container mx-auto'>
      <TouristPlaceDetails touristPlace={place} />
    </div>
  );
};

export default SinglePlace;

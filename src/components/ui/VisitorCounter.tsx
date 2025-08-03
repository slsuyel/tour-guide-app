"use client";

import { useEffect, useState } from "react";

type CountApiResponse = {
  value: number;
};

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);
  const namespace = "panchagarh-tourguide";
  const key = "homepage-visitors";

  useEffect(() => {
    const fetchCount = async () => {
      try {
        // CountAPI increment & get URL
        const res = await fetch(
          `https://api.countapi.xyz/hit/${namespace}/${key}`
        );
        if (!res.ok) throw new Error("Failed to fetch count");
        const data: CountApiResponse = await res.json();
        setCount(data.value);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCount();
  }, []);

  return (
    <div className="p-4 bg-blue-100 rounded-md text-center max-w-xs mx-auto">
      <h2 className="text-xl font-semibold mb-2">Visitor Count</h2>
      {count === null ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <p className="text-3xl font-bold text-blue-700">{count}</p>
      )}
    </div>
  );
};

export default VisitorCounter;

"use client";
import React, { useState } from "react";
import SlicerCard from "@/components/slicer-card";
import { mandiWebData } from "./data";

export default function Page() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < mandiWebData.length - 1) {
      setIndex(index + 1);
    }
  };

  const handleBack = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <main className="space-y-4 bg-gray-100 p-8 rounded-lg shadow-md">
      <SlicerCard
        title={mandiWebData[index].title}
        desc={mandiWebData[index].description}
        image={mandiWebData[index].image}
      />

      <div className="flex space-x-4 mt-8 justify-center">
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <button href="#" onClick={handleBack}>
            Back
          </button>
        </div>
        <div className="w-16 h-16 bg-primary flex items-center justify-center text-white font-bold rounded-full shadow-lg mt-8">
          <button href="#" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </main>
  );
}

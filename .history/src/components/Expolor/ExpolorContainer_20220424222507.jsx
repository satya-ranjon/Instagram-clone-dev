import React from "react";
import Gallery from "react-photo-gallery";

export default function ExpolorContainer() {
  return (
    <div className=" mt-[8rem]">
      <div className="grid grid-cols-4 gap-5">
        <div className="h-ful w-full bg-red-200"></div>
        <div className="h-ful w-full bg-red-200"></div>
        <div className="h-ful w-full bg-red-200"></div>
        <div className="h-ful w-full bg-red-200"></div>
        <div className="h-full w-full bg-red-200 col-span-2 row-span-2"></div>
        <div className="h-full w-full bg-red-200"></div>
        <div className="h-ful w-full bg-red-200"></div>
        <div className="h-ful w-full bg-red-200"></div>
        <div className="h-ful w-full bg-red-200"></div>
        <div className="h-ful w-full bg-red-200"></div>
        <div className="h-ful w-full bg-red-200"></div>
        <div className="h-ful w-full bg-red-200"></div>
      </div>
    </div>
  );
}

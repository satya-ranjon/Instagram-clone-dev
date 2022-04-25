import React from "react";
import Gallery from "react-photo-gallery";

export default function ExpolorContainer() {
  return (
    <div className=" mt-[8rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 px-5 sm:px-20">
        <div className="h-[12rem] w-full bg-red-200"></div>
        <div className="h-[12rem] w-full bg-red-200"></div>
        <div className="h-[12rem] w-full bg-red-200"></div>
        <div className="h-[12rem] w-full bg-red-200"></div>
        <div className="h-[20rem] md:h-full w-full bg-red-200 sm:col-span-2 row-span-2"></div>
        <div className="h-[12rem] w-full bg-red-200"></div>
        <div className="h-[12rem] w-full bg-red-200"></div>
        <div className="h-[12rem] w-full bg-red-200"></div>
        <div className="h-[12rem] w-full bg-red-200"></div>
        <div className="h-[12rem] w-full bg-red-200"></div>
        <div className="h-[12rem] w-full bg-red-200"></div>
      </div>
    </div>
  );
}

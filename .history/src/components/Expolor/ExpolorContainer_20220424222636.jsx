import React from "react";
import Gallery from "react-photo-gallery";

export default function ExpolorContainer() {
  return (
    <div className=" mt-[8rem]">
      <div className="grid lg:grid-cols-6 gap-4 px-20">
        <div className="h-[10rem] w-full bg-red-200"></div>
        <div className="h-[10rem] w-full bg-red-200"></div>
        <div className="h-[10rem] w-full bg-red-200"></div>
        <div className="h-[10rem] w-full bg-red-200"></div>
        <div className="h-full w-full bg-red-200 col-span-2 row-span-2"></div>
        <div className="h-full w-full bg-red-200"></div>
        <div className="h-[10rem] w-full bg-red-200"></div>
        <div className="h-[10rem] w-full bg-red-200"></div>
        <div className="h-[10rem] w-full bg-red-200"></div>
        <div className="h-[10rem] w-full bg-red-200"></div>
        <div className="h-[10rem] w-full bg-red-200"></div>
        <div className="h-[10rem] w-full bg-red-200"></div>
      </div>
    </div>
  );
}

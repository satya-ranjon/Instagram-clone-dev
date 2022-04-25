import React from "react";
import Gallery from "react-photo-gallery";

export default function ExpolorContainer() {
  return (
    <div className=" mt-[8rem]">
      <div className="grid grid-cols-4 gap-5">
        <div className="h-[10rem] w-full bg-red-200"></div>
        <div className="h-[10rem] w-full bg-red-200"></div>
        <div className="h-[10rem] w-full bg-red-200"></div>
        <div className="h-[10rem] w-full bg-red-200"></div>
        <div className="h-[20rem] w-full bg-red-200 grid-cols-2 col-span-2"></div>
        <div className="h-[10rem] w-full bg-red-200"></div>
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

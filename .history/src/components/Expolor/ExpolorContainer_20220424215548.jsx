import React from "react";
import Gallery from "react-photo-gallery";

export default function ExpolorContainer() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-5">
        <div className="h-[20rem] w-full bg-red-50"></div>
        <div className="h-[20rem] w-full bg-red-50"></div>
        <div className="h-[20rem] w-full bg-red-50"></div>
        <div className="h-[20rem] w-full bg-red-50"></div>
        <div className="h-[20rem] w-full bg-red-50 col-span-2"></div>
        <div className="h-[20rem] w-full bg-red-50"></div>
      </div>
    </div>
  );
}

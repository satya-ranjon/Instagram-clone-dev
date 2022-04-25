import React from "react";
import { BiArrowBack } from "react-icons/bi";

export default function ProfileContainer() {
  return (
    <div className="flex ">
      <div className="w-[40rem] h-screen bg-slate-50">
        <div className="flex justify-between px-3 p-2 text-neutral-500">
          <BiArrowBack className=" text-3xl" />
          <div className="flex space-x-3">b</div>
        </div>
      </div>
      <div className="w-full h-screen bg-slate-200"></div>
    </div>
  );
}

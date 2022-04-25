import React from "react";
import { BiArrowBack } from "react-icons/bi";

export default function ProfileContainer() {
  return (
    <div className="flex ">
      <div className="w-96 h-screen bg-slate-50">
        <div className="flex justify-between">
          <BiArrowBack />
          <div className="flex space-x-3"></div>
        </div>
      </div>
      <div className="w-full h-screen bg-slate-200"></div>
    </div>
  );
}
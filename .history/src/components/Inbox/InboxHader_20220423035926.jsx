import React from "react";
import { BsInstagram } from "react-icons/bs";
import MesseagBoxHader from "./MesseagBoxHader";

export default function InboxHader() {
  return (
    <div className=" fixed top-0 h-20 bg-white w-full z-10 flex">
      <div className="w-96 h-full justify-center flex space-x-8 text-neutral-600 font-semibold">
        <BsInstagram className="text-4xl my-auto cursor-pointer " />
        <div className=" my-auto">
          <p className=" text-xl">Satya Ranjon </p>
          <p className="text-[12px]">0 friends</p>
        </div>
      </div>
      <div className="w-full h-full border-l-2">
        <MesseagBoxHader />
      </div>
    </div>
  );
}

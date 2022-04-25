import React from "react";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import MesseagBoxHader from "./MesseagBoxHader";

export default function InboxHader() {
  return (
    <div className="fixed lg:px-20 xl:px-52 top-0 h-20 flex bg-white w-full z-10 ">
      <div className="w-[5rem] sm:w-96 h-full justify-between flex text-neutral-600 font-semibold ">
        <Link className="text-4xl my-auto cursor-pointer pl-2 " to="/">
          <BsInstagram />
        </Link>

        <div className=" my-auto hidden sm:block pr-2">
          <p className=" text-xl">Satya Ranjon </p>
          <p className="text-[12px]">0 friends</p>
        </div>
      </div>
      <div className="w-full h-full bg-neutral-50 border-l-2">
        <MesseagBoxHader />
      </div>
    </div>
  );
}

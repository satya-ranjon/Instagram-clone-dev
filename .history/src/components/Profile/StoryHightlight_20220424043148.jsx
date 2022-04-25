import React from "react";
import StoreBar from "../StoreBar";
import { MdOutlineSort } from "react-icons/md";

export default function StoryHightlight() {
  return (
    <div>
      <div className="flex justify-between w-full mt-10">
        <p className="text-xl font-semibold my-5 text-neutral-600">
          Story Hightlight
        </p>
        <p className="button__btn font-semibold text-[11px] flex justify-between space-x-3 ">
          <p>SORT BY </p>
          <MdOutlineSort className=" text-sm my-auto" />
        </p>
      </div>
      <StoreBar />
    </div>
  );
}

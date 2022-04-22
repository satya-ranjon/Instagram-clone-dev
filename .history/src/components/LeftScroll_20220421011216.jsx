import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function LeftScroll() {
  return (
    <div
      className={` ${
        isScroll ? "block" : "hidden"
      } absolute bg-[#ebe6e670] z-10 w-10 cursor-pointer left-3 bottom-8 rounded-xl h-10`}
      onClick={() => scrollOnClick("left")}
    >
      <BiChevronLeft className="my-1 text-gray-900 text-3xl" />
    </div>
  );
}

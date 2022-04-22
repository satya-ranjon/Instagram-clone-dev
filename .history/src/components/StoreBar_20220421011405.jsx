import React, { useRef, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { IoMdAddCircle } from "react-icons/io";
import Store from "./Store";
import { LeftScroll } from "./LeftRightScroll";

export default function StoreBar() {
  const [isScroll, setIsScroll] = useState(false);

  const scrollRef = useRef();
  const scrollOnClick = (side) => {
    setIsScroll(true);
    side === "right"
      ? (scrollRef.current.scrollLeft += 200)
      : (scrollRef.current.scrollLeft -= 300);
    scrollRef.current.scrollLeft < 199 ? setIsScroll(false) : setIsScroll(true);
  };
  return (
    <div className="relative mt-[7.9rem] mx-10 sm:mx-32 lg:mx-72">
      <LeftScroll isScroll={isScroll} scrollOnClick={scrollOnClick} />
      <div
        ref={scrollRef}
        className=" flex space-x-9 overflow-hidden  scroll-smooth overflow-x-scroll  relative "
        id="category"
      >
        <div className="">
          <div className=" border-2 cursor-pointer  rounded-full relative p-1 my-auto border-gray-400 ">
            <Avatar
              alt="Travis Howard"
              src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
              sx={{ width: 56, height: 56 }}
            />
            <IoMdAddCircle className="text-xl text-blue-500 absolute -right-2 -bottom-2 cursor-pointer " />
          </div>
          <p className="text-sm text-center font-semibold text-gray-500 ">
            Your Story
          </p>
        </div>

        <Store />
        <Store />
        <Store />
        <Store />
        <Store />
        <Store />
        <Store />
        <Store />
        <Store />
        <Store />
        <Store />
        <Store />
        <Store />
        <Store />
        <Store />
        <Store />
        <Store />
      </div>
      <div
        className=" absolute bg-[#ebe6e6c2] w-10 cursor-pointer right-3 bottom-8 rounded-xl h-10"
        onClick={() => scrollOnClick("right")}
      >
        <BiChevronRight className="my-1 text-gray-900 text-3xl" />
      </div>
    </div>
  );
}

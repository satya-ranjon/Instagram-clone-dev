import React, { useRef, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { IoMdAddCircle } from "react-icons/io";
import Store from "./Store";
import { LeftScroll, RightScroll } from "./LeftRightScroll";
import AddStory from "./AddStory";

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
        <AddStory />
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
      <RightScroll scrollOnClick={scrollOnClick} />
    </div>
  );
}

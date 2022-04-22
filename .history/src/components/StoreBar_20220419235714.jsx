import React, { useRef, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { IoMdAddCircle } from "react-icons/io";

export default function StoreBar() {
  const [isScroll, setIsScroll] = useState(false);

  const scrollRef = useRef();
  const scrollOnClick = (side) => {
    setIsScroll(true);
    side === "right"
      ? (scrollRef.current.scrollLeft += 200)
      : (scrollRef.current.scrollLeft -= 200);
    scrollRef.current.scrollLeft < 199 ? setIsScroll(false) : setIsScroll(true);
  };
  return (
    <div className="relative mx-72">
      <div
        ref={scrollRef}
        className=" flex space-x-9 overflow-hidden h-16 overflow-x-scroll hide_scrollbar relative "
      >
        <div className=" border-2 cursor-pointer  rounded-full relative p-1 my-auto border-gray-400 ">
          <Avatar
            alt="Travis Howard"
            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
          />
          <IoMdAddCircle className="text-xl text-blue-500 absolute -right-2 -bottom-2 cursor-pointer " />
        </div>

        <div className=" border-2 cursor-pointer rounded-full p-1 my-auto border-[rgb(176,81,81)] ">
          <Avatar
            alt="Travis Howard"
            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
          />
        </div>
        <div className=" border-2 cursor-pointer rounded-full p-1 my-auto border-[rgb(176,81,81)] ">
          <Avatar alt="Travis Howard" src="" />
        </div>
        <div className=" border-2 cursor-pointer rounded-full p-1 my-auto border-[rgb(176,81,81)] ">
          <Avatar
            alt="Travis Howard"
            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
          />
        </div>
        <div className=" border-2 cursor-pointer rounded-full p-1 my-auto border-[rgb(176,81,81)] ">
          <Avatar
            alt="Travis Howard"
            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
          />
        </div>
        <div className=" border-2 cursor-pointer rounded-full p-1 my-auto border-[rgb(176,81,81)] ">
          <Avatar
            alt="Travis Howard"
            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
          />
        </div>
        <div className=" border-2 cursor-pointer rounded-full p-1 my-auto border-[rgb(176,81,81)] ">
          <Avatar
            alt="Travis Howard"
            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
          />
        </div>
        <div className=" border-2 cursor-pointer rounded-full p-1 my-auto border-[rgb(176,81,81)] ">
          <Avatar
            alt="Travis Howard"
            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
          />
        </div>
        <div className=" border-2 cursor-pointer rounded-full p-1 my-auto border-[rgb(176,81,81)] ">
          <Avatar
            alt="Travis Howard"
            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
          />
        </div>
        <div className=" border-2 cursor-pointer rounded-full p-1 my-auto border-[rgb(176,81,81)] ">
          <Avatar
            alt="Travis Howard"
            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
          />
        </div>
        <div className=" border-2 cursor-pointer rounded-full p-1 my-auto border-[rgb(176,81,81)] ">
          <Avatar
            alt="Travis Howard"
            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
          />
        </div>
        <div className=" border-2 cursor-pointer rounded-full p-1 my-auto border-[rgb(176,81,81)] ">
          <Avatar
            alt="Travis Howard"
            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
          />
        </div>
        <div className=" border-2 cursor-pointer rounded-full p-1 my-auto border-[rgb(176,81,81)] ">
          <Avatar
            alt="Travis Howard"
            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
          />
        </div>
        <div className=" border-2 cursor-pointer rounded-full p-1 my-auto border-[rgb(176,81,81)] ">
          <Avatar
            alt="Travis Howard"
            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
          />
        </div>
        <div className=" border-2 cursor-pointer rounded-full p-1 my-auto border-[rgb(176,81,81)] ">
          <Avatar
            alt="Travis Howard"
            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
          />
        </div>
        <div className=" border-2 cursor-pointer rounded-full p-1 my-auto border-[rgb(176,81,81)] ">
          <Avatar
            alt="Travis Howard"
            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
          />
        </div>
        <div className=" border-2 cursor-pointer rounded-full p-1 my-auto border-[rgb(176,81,81)] ">
          <Avatar
            alt="Travis Howard"
            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
          />
        </div>
        <div className=" border-2 cursor-pointer rounded-full p-1 my-auto border-[rgb(176,81,81)] ">
          <Avatar
            alt="Travis Howard"
            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
          />
        </div>
        <div className=" border-2 cursor-pointer rounded-full p-1 my-auto border-[rgb(176,81,81)] ">
          <Avatar
            alt="Travis Howard"
            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
          />
        </div>
        <div className=" border-2 cursor-pointer rounded-full p-1 my-auto border-[rgb(176,81,81)] ">
          <Avatar
            alt="Travis Howard"
            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
          />
        </div>
        <div className=" border-2 cursor-pointer rounded-full p-1 my-auto border-[rgb(176,81,81)] ">
          <Avatar
            alt="Travis Howard"
            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
          />
        </div>
        <div className=" border-2 cursor-pointer rounded-full p-1 my-auto border-[rgb(176,81,81)] ">
          <Avatar
            alt="Travis Howard"
            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
          />
        </div>
        <div className=" border-2 cursor-pointer rounded-full p-1 my-auto border-[rgb(176,81,81)] ">
          <Avatar
            alt="Travis Howard"
            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
          />
        </div>
      </div>
      <div
        className=" absolute bg-red-100 cursor-pointer right-0 bottom-0  h-full"
        onClick={() => scrollOnClick("right")}
      >
        <BiChevronRight className="my-4 text-3xl" />
      </div>
    </div>
  );
}

import React, { useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { IoMdAddCircle } from "react-icons/io";

export default function StoreBar() {
  const scrollRef = useRef();
  return (
    <div
      className="flex items-center w-full h-10 overflow-y-scroll overFlowHiden hide_scrollbar relative"
      id="category"
    >
      <div
        className={` ${
          isScroll ? "flex" : "hidden"
        }  absolute left-0 w-20  justify-start items-center bg-gradient-to-r from-gray-50 cursor-pointer `}
        onClick={() => scrollOnClick("left")}
      >
        <BiChevronLeft className="text-red-400" fontSize={30} />
      </div>

      <div
        ref={scrollRef}
        className="mx-72 flex justify-between hide_scrollbar  space-x-8 overflow-y-hidden  scroll-0 hide_scrollbar scroll-smooth duration-150 ease-in-out "
      >
        <div className=" border-2 cursor-pointer rounded-full relative p-1 my-auto border-gray-400 ">
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
        className="absolute right-0 w-20 sm:flex hidden justify-end items-center bg-gradient-to-l from-gray-50 cursor-pointer"
        onClick={() => scrollOnClick("right")}
      >
        <BiChevronRight fontSize={30} />
      </div>
    </div>
  );
}

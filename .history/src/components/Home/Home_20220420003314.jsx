import { Avatar } from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-4 mx-52 my-10">
      <div className=" ">
        <div className=" bg-red-300 w-full h-[34rem]"></div>
        <div className="p-3 flex space-x-4">
          <div className=" w-fit border-2 cursor-pointer rounded-full p-1 my-auto border-[rgb(176,81,81)] ">
            <Avatar
              alt="Travis Howard"
              src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
            />
          </div>
          <div className="">
            <p className="text-md font-semibold">Khokon</p>
            <p>3 hor ago</p>
          </div>
        </div>
      </div>
      <div className=" w-full h-[34rem] bg-green-200">one</div>
    </div>
  );
}

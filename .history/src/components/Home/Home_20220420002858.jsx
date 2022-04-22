import { Avatar } from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-4 mx-52 my-10">
      <div className=" bg-red-300">
        <div className=" w-full h-[34rem]"></div>
        <div className="">
          <Avatar
            alt="Travis Howard"
            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
            sx={{ width: 56, height: 56 }}
          />
        </div>
      </div>
      <div className=" w-full h-[34rem] bg-green-200">one</div>
    </div>
  );
}
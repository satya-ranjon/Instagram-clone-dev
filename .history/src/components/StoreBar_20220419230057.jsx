import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { IoMdAddCircle } from "react-icons/io";

export default function StoreBar() {
  return (
    <Stack spacing={5} direction="row">
      <div className=" border-2 rounded-full p-1 my-auto border-gray-400 ">
        <Avatar
          alt="Travis Howard"
          src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
        />
        <IoMdAddCircle className="text-lg bg-blue-100" />
      </div>

      <div className=" border-2 rounded-full p-1 my-auto border-[rgb(176,81,81)] ">
        <Avatar
          alt="Travis Howard"
          src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
        />
      </div>
    </Stack>
  );
}

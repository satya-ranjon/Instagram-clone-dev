import React from "react";
import Logo from "../Assets/Logo";
import TopMenu from "./TopMenu";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { FiSend } from "react-icons/fi";

export default function Hader() {
  return (
    <div className="flex fixed 2sm:static bottom-0 w-full z-10 bg-white  justify-center 2sm:justify-between p-10 text-[#3a3637]">
      <div className="hidden sm:block">
        <Logo />
      </div>

      <TopMenu />
      <div className="2sm:block hidden">
        <Stack direction="row" spacing={3}>
          <FiSend className="text-3xl my-auto cursor-pointer" />
          <Avatar
            className=" cursor-pointer"
            alt="Cindy Baker"
            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
          />
        </Stack>
      </div>
    </div>
  );
}

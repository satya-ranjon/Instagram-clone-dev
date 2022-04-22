import React from "react";
import { BsInstagram } from "react-icons/bs";
import Instagram from "./image/instagram.png";
import Stack from "@mui/material/Stack";

export default function Logo() {
  return (
    <Stack direction="row" spacing={2} className=" cursor-pointer">
      <BsInstagram className="text-3xl my-auto" />
      <img src={Instagram} alt="" className="my-auto w-28 h-8 py-0" />
    </Stack>
  );
}

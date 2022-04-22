import React from "react";
import { BsInstagram } from "react-icons/bs";
import Instagram from "./image/instagram.png";
import Stack from "@mui/material/Stack";

export default function Logo() {
  return (
    <Stack direction="row" spacing={2}>
      <BsInstagram className="text-3xl" />
      <img src={Instagram} alt="" className="" />
    </Stack>
  );
}

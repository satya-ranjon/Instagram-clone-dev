import React from "react";
import Stack from "@mui/material/Stack";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineExplore, MdFavoriteBorder } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

export default function TopMenu() {
  return (
    <Stack direction="row" className="text-3xl my-auto" spacing={6}>
      <AiFillHome className=" cursor-pointer" />
      <FiSearch className=" cursor-pointer" />
      <MdOutlineExplore className=" cursor-pointer text-red-500" />
      <MdFavoriteBorder className=" cursor-pointer" />
    </Stack>
  );
}

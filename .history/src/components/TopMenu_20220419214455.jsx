import React from "react";
import Stack from "@mui/material/Stack";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

export default function TopMenu() {
  return (
    <Stack direction="row" className="text-2xl" spacing={3}>
      <AiFillHome />
      <FiSearch />
      <MdOutlineExplore className="bg-black" />
    </Stack>
  );
}

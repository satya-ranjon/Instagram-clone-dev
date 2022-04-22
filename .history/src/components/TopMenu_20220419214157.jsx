import React from "react";
import Stack from "@mui/material/Stack";
import { AiFillHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

export default function TopMenu() {
  return (
    <Stack direction="row" className="text-2xl" spacing={3}>
      <AiFillHome />
      <FiSearch />
      <p>k</p>
      <p>k</p>
    </Stack>
  );
}

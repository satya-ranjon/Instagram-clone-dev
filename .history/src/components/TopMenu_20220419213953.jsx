import React from "react";
import Stack from "@mui/material/Stack";
import { AiFillHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

export default function TopMenu() {
  return (
    <Stack direction="row" spacing={3}>
      <AiFillHome />
      <BsSearch />
      <p>k</p>
      <p>k</p>
    </Stack>
  );
}

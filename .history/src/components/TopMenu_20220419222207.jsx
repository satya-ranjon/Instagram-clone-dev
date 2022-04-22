import React from "react";
import Stack from "@mui/material/Stack";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineExplore, MdExplore, MdFavoriteBorder } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TopMenu() {
  return (
    <Stack direction="row" className="text-3xl my-auto" spacing={6}>
      <AiFillHome />
      <FiSearch />
      <MdOutlineExplore />
      <MdFavoriteBorder />
      <FontAwesomeIcon icon="fa-solid fa-check-square" />
    </Stack>
  );
}

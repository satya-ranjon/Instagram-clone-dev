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
      <FontAwesomeIcon icon="fa-brands fa-twitter" />
      <FontAwesomeIcon icon="fa-brands fa-font-awesome" />

      <FontAwesomeIcon icon="fa-regular fa-mug-hot" />
    </Stack>
  );
}

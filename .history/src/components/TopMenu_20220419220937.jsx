import React from "react";
import Stack from "@mui/material/Stack";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import ExploreIcon from "@mui/icons-material/Explore";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function TopMenu() {
  return (
    <Stack direction="row" className="text-2xl" spacing={2}>
      <HomeIcon />
      <FiSearch />
      <MdOutlineExplore className="" />
      <ExploreIcon />
    </Stack>
  );
}

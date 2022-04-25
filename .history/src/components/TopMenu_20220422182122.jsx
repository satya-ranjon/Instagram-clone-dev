import React from "react";
import Stack from "@mui/material/Stack";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineExplore, MdFavoriteBorder } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function TopMenu({ setOpenSideBar }) {
  return (
    <Stack direction="row" className="text-3xl my-auto" spacing={6}>
      <AiFillHome className=" cursor-pointer" />
      <Link to="search">
        <FiSearch
          className=" cursor-pointer"
          onClick={() => setOpenSideBar((prv) => !prv)}
        />
      </Link>
      <MdOutlineExplore className=" cursor-pointer" />
      <MdFavoriteBorder className=" cursor-pointer" />
    </Stack>
  );
}

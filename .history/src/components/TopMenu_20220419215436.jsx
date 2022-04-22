import React from "react";
import Stack from "@mui/material/Stack";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function TopMenu() {
  return (
    <Stack direction="row" className="text-2xl" spacing={3}>
      <AiFillHome />
      <FiSearch />
      <MdOutlineExplore className="" />
      <FontAwesomeIcon icon={["fab", "faCoffee"]} />
    </Stack>
  );
}

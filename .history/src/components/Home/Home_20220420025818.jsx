import { Avatar } from "@mui/material";
import React from "react";
import { BiLike } from "react-icons/bi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import PostList from "./PostList";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-4 mx-52 my-10 font-semibold">
      <PostList />
    </div>
  );
}

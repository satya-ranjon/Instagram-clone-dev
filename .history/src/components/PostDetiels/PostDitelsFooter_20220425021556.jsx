import * as React from "react";
import { GrFavorite } from "react-icons/gr";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BsBookmarks } from "react-icons/bs";
import Comment from "./Comment";

export default function PostDitelsFooter() {
  return (
    <div className=" p-3 text-neutral-600">
      <div>
        <div className="flex justify-between text-xl">
          <div className="flex space-x-4 ">
            <GrFavorite className=" cursor-pointer" />
            <FaRegComment className=" cursor-pointer" />
            <FiSend className=" cursor-pointer" />
          </div>
          <BsBookmarks className=" cursor-pointer text-2xl" />
        </div>
        <p className=" font-semibold text-sm py-3">1521 likes</p>
      </div>
      <Comment />
    </div>
  );
}

import { Avatar } from "@mui/material";
import React from "react";
import { BiLike } from "react-icons/bi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";

export default function PostList({ imgdesign }) {
  return (
    <div className=" my-4">
      <img
        className={imgdesign}
        src="https://images.pexels.com/photos/11780920/pexels-photo-11780920.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt=""
      />
      <div className="flex justify-between p-3 pb-2 border-b-2 border-gray-300 ">
        <p>25k likes</p>
        <p>25k Comments</p>
      </div>
      <div className="p-3 flex justify-between ">
        <div className="flex space-x-4">
          <div className=" w-fit border-2 cursor-pointer rounded-full p-1 my-auto border-[rgb(176,81,81)] ">
            <Avatar
              alt="Travis Howard"
              sx={{ width: 30, height: 30 }}
              src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=971&q=80"
            />
          </div>
          <div className={imgdesign === "img__two" && "sm:hidden md:block" || imgdesign === }>
            <p className="text-md cursor-pointer ">Khokon</p>
            <p className="text-sm  text-gray-400">3 hor ago</p>
          </div>
        </div>
        {/* // icon section  */}
        <div className="flex space-x-4 my-auto">
          <BiLike className="text-2xl my-auto cursor-pointer" />
          <FaRegComment className="text-2xl my-auto cursor-pointer" />
          <MdOutlineFavoriteBorder className="text-2xl my-auto cursor-pointer" />
          <FiMoreHorizontal className="text-2xl my-auto cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

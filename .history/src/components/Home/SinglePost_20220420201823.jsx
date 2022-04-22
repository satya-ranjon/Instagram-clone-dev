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
        src="https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?t=st=1650458298~exp=1650458898~hmac=bde660f1d17231fe9f9016669b057ceb0b008930b7679cba94ec51614df2d20c&w=1380"
        alt=""
      />
      <div className="flex justify-between p-3 pb-2 border-b-2 border-gray-300 block xl:hidden">
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
          <div className="hidden  xl:block">
            <p className="text-md cursor-pointer ">Khokon</p>
            <p className="text-sm  text-gray-400">3 hor ago</p>
          </div>
        </div>
        {/* // icon section  */}
        <div className="flex space-x-4 my-auto">
          <p>25 likes</p>
          <BiLike className="text-2xl my-auto cursor-pointer" />
          <FaRegComment className="text-2xl my-auto cursor-pointer" />
          <MdOutlineFavoriteBorder className="text-2xl my-auto cursor-pointer" />
          <FiMoreHorizontal className="text-2xl my-auto cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

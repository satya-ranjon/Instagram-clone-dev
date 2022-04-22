import { Avatar } from "@mui/material";
import React from "react";
import { BiLike } from "react-icons/bi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-4 mx-52 my-10 font-semibold">
      <div className=" ">
        <img
          className=" bg-red-300 w-full h-[34rem]"
          src="https://img.freepik.com/free-photo/positive-self-confident-man-keeps-arms-folded-looks-away-with-satisfied-expression-listens-good-news-wears-spectaces-casual-turtleneck-isolated-beige-background-blank-space-promo_273609-60459.jpg?t=st=1650392962~exp=1650393562~hmac=05916e90d36636b662f68b6fb1dc23d96f41a5a594f71bf676ae7ae8973f80a6&w=1380"
          alt=""
        />
        <div className="p-3 flex justify-between ">
          <div className="flex space-x-4">
            <div className=" w-fit border-2 cursor-pointer rounded-full p-1 my-auto border-[rgb(176,81,81)] ">
              <Avatar
                alt="Travis Howard"
                src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=971&q=80"
              />
            </div>
            <div className="">
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
      <div className=" ">
        <img
          className=" bg-blue-300 w-full h-[34rem]"
          src="https://images.unsplash.com/photo-1630568667468-fe2a669d8861?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <div className="p-3 flex justify-between ">
          <div className="flex space-x-4">
            <div className=" w-fit border-2 cursor-pointer rounded-full p-1 my-auto border-[rgb(176,81,81)] ">
              <Avatar
                alt="Travis Howard"
                src="https://img.freepik.com/free-photo/photo-pretty-asian-woman-looks-dreamily-aside-recalls-pleasant-memories-eats-tasty-summer-dessert-holds-big-cone-ice-cream-dressed-casual-t-shirt-models_273609-51403.jpg?w=1380"
              />
            </div>
            <div className="">
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
    </div>
  );
}

import { Avatar } from "@mui/material";
import React from "react";
import SendMesseage from "./SendMesseage";
import LeftIcon from "../../Assets/leftIcon";

export default function MesseageBox() {
  return (
    <div className=" h-screen w-full bg-neutral-50 relative">
      <div className=" w-full h-full py-20 px-20">
        {/* reciver  */}
        <div className="flex w-full justify-start">
          <div className="flex space-x-2">
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              className=" cursor-pointer z-20"
            />
            <div className="flex">
              <LeftIcon />
              <p className="bg-neutral-500 p-4 w-fit max-w-sm text-white relative rounded-3xl rounded-tl-none ">
                hello Lorem ipsum dolor sit amet consectetur adipisicing elit.
                😀
              </p>
            </div>
          </div>
        </div>
        {/* sender  */}
        <div className="flex w-full my-5 justify-end">
          <div className="flex space-x-2">
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              className=" cursor-pointer z-20"
            />
            <div className="flex">
              <LeftIcon />
              <p className="bg-neutral-500 p-4 w-fit max-w-sm text-white relative rounded-3xl rounded-tl-none ">
                hello Lorem ipsum dolor sit amet consectetur adipisicing elit.
                😀
              </p>
            </div>
          </div>
        </div>
      </div>

      <SendMesseage />
    </div>
  );
}

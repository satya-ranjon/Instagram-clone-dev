import React from "react";
import { Avatar } from "@mui/material";

export default function ProfileInfo() {
  return (
    <>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 96, height: 96 }}
      />
      <div className=" font-semibold ">
        <p className=" text-xl">Amy Yane</p>
        <p className=" text-[12px] text-neutral-400">Dhaka BN</p>
      </div>
      <div className=" flex justify-between  w-full">
        <div className="button__btn">Follow</div>
        <div className="button__btn">Messeage</div>
        <a href="mailto:khokon@example.com" className="button__btn">
          Email
        </a>
      </div>
      <div className="flex justify-between w-full font-semibold ">
        <div className="">
          <div>0</div>
          <div className="text-neutral-400">Post</div>
        </div>
        <div className="">
          <div>0</div>
          <div className="text-neutral-400">Follower</div>
        </div>
        <div className="">
          <div>0</div>
          <div className="text-neutral-400">Following</div>
        </div>
      </div>
      <div className=" text-left">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est non
        placeat neque 😍😍🥖
      </div>
    </>
  );
}

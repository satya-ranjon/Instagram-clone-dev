import React from "react";
import { Avatar } from "@mui/material";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useAuth } from "../../Context/AuthContext";

export default function ProfileInfo() {
  const { currentUser } = useAuth();
  return (
    <>
      <div className="rounded-full overflow-hidden relative">
        <Avatar
          alt={currentUser.displayName}
          src={currentUser.photoURL}
          sx={{ width: 96, height: 96 }}
        />
        <div className=" absolute top-0 left-0  h-full w-full bg-[#0000003a] z-10">
          <AiOutlineCloudUpload className="z-10 text-red-400 text-2xl" />
        </div>
      </div>

      <div className=" font-semibold ">
        <div className=" text-xl">{currentUser.displayName}</div>
        <div className=" text-[12px] text-neutral-400">Dhaka BN</div>
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

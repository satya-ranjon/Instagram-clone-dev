import React from "react";

export default function ProfileInfo() {
  return (
    <div>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 66, height: 66 }}
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
          <p>0</p>
          <p className="text-neutral-400">Post</p>
        </div>
        <div className="">
          <p>0</p>
          <p className="text-neutral-400">Follower</p>
        </div>
        <div className="">
          <p>0</p>
          <p className="text-neutral-400">Following</p>
        </div>
      </div>
      <p className=" text-left">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est non
        placeat neque 😍😍🥖
      </p>
    </div>
  );
}

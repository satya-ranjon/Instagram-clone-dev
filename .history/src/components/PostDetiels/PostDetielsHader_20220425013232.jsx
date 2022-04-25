import React from "react";

export default function PostDetielsHader() {
  return (
    <div className=" flex justify-between p-3">
      <div className="flex space-x-3">
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className="cursor-pointer"
        />
        <div className=" ">
          <p className=" font-semibold text-md cursor-pointer">Anyme Davil</p>
          <p className=" text-[11px] text-neutral-400 ">i am a csc enginnere</p>
        </div>
      </div>
      <FiMoreVertical className=" my-auto text-2xl" />
    </div>
  );
}

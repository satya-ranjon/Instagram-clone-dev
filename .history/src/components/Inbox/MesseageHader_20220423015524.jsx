import React from "react";

export default function MesseageHader() {
  return (
    <div className=" flex justify-between p-4">
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        className=" cursor-pointer"
      />
      <BiInfoCircle className=" text-neutral-400 text-3xl cursor-pointer transition-all duration-300 hover:text-neutral-600" />
    </div>
  );
}

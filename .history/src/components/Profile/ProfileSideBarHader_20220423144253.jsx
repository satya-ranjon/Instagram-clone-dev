import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function ProfileSideBarHader() {
  const [settingOpen, setSettingOpen] = useState(false);
  return (
    <div className="flex justify-between px-3 p-2 text-neutral-500 relative">
      <BiArrowBack className=" cursor-pointer text-3xl" />
      <div className="flex space-x-3">
        <div className="button__btn">Edit Profile</div>
        <FiMoreVertical
          className="cursor-pointer text-3xl"
          onMouseOver={() => setSettingOpen((prv) => !prv)}
          onClick={() => setSettingOpen((prv) => !prv)}
        />
      </div>
      <div
        className={`absolute right-10 bg-neutral-600 text-neutral-100 flex flex-col font-semibold text-md transition-all duration-300 ${
          settingOpen ? "top-2" : "top-[-999%]"
        }`}
      >
        <Link
          to="/"
          className="py-1 cursor-pointer hover:bg-neutral-500 px-5 transition-all duration-300"
        >
          Setting
        </Link>
        <Link
          to="/"
          className="py-1 cursor-pointer hover:bg-neutral-500 px-5 transition-all duration-300"
        >
          Logout
        </Link>
      </div>
    </div>
  );
}

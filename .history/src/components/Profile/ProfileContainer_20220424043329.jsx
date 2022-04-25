import React from "react";
import StoreBar from "../StoreBar";
import ProfileSideBar from "./ProfileSideBar";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineSort } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import PhotoFeed from "./PhotoFeed";
import StoryHightlight from "./StoryHightlight";
import ProfileHader from "./ProfileHader";

export default function ProfileContainer() {
  return (
    <div className="flex ">
      <div className="w-[40rem] h-screen  hidden sm:block">
        <ProfileSideBar />
      </div>

      <div className="w-full h-screen">
        <div className="flex justify-center w-full ">
          <div className="w-full px-10 sm:px-0 sm:w-[18rem] md:w-[25rem] lg:w-[38rem] xl:w-[50rem] 2xl:w-[60rem]">
            <ProfileHader />
            <StoryHightlight />
            <PhotoFeed />
          </div>
        </div>
      </div>
    </div>
  );
}

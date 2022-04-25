import React from "react";
import { MdOutlineSort } from "react-icons/md";
import MyPost from "./MyPost";

export default function PhotoFeed() {
  return (
    <>
      <div className="flex justify-between w-full mt-10">
        <p className="text-xl font-semibold my-5 text-neutral-600">
          Photo Feed
        </p>
        <p className="button__btn font-semibold text-[11px] flex justify-between space-x-3 ">
          <p>SORT BY </p>
          <MdOutlineSort className=" text-sm my-auto" />
        </p>
      </div>

      <div className="photo__feed scrollbar-thumb-neutral-400 scrollbar-thin sm:my-10">
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
        <MyPost />
      </div>
    </>
  );
}

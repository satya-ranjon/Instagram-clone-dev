import React from "react";

export default function PostDitelsFooter() {
  return (
    <div className=" p-3 text-neutral-600">
      <div>
        <div className="flex justify-between text-xl">
          <div className="flex space-x-4 ">
            <GrFavorite className=" cursor-pointer" />
            <FaRegComment className=" cursor-pointer" />
            <FiSend className=" cursor-pointer" />
          </div>
          <BsBookmarks className=" cursor-pointer text-2xl" />
        </div>
        <p className=" font-semibold text-sm py-3">1521 likes</p>
      </div>
      <Comment />
    </div>
  );
}

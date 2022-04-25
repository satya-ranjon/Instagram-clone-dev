import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
export default function Comment() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex space-x-2">
          <BsEmojiSmile className=" my-auto text-xl cursor-pointer" />
          <input
            className=" outline-none p-1"
            type="text"
            placeholder=" Add comment .."
          />
        </div>
        <p className=" font-semibold text-md text-blue-500 cursor-pointer">
          Post
        </p>
      </div>
    </div>
  );
}

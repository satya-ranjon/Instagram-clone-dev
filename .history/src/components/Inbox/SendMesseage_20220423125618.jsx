import React from "react";
import { FiSend } from "react-icons/fi";
export default function SendMesseage() {
  return (
    <div className=" absolute w-full px-5 sm:px-20 h-20 p-5 bg-white bottom-0 left-0 right-0 flex justify-between">
      <input
        type="text"
        className=" w-full p-2 outline-none text-md font-semibold "
        placeholder=" Type message"
      />
      <FiSend className="text-2xl my-auto cursor-pointer hover:text-neutral-600 transition-all duration-300 text-neutral-400" />
    </div>
  );
}

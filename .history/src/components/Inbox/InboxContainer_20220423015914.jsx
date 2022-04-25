import React from "react";
import MesseageBox from "./MesseageBox";

export default function InboxContainer() {
  return (
    <div>
      <div className=" flex justify-between">
        <div className=" h-screen w-96 lg:w-[50rem]  bg-red-50">
          <div className=" w-full p-2">
            <input type="text" className=" " />
          </div>
        </div>
        <MesseageBox />
      </div>
    </div>
  );
}

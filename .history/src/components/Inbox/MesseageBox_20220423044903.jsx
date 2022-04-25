import React from "react";
import SendMesseage from "./SendMesseage";

export default function MesseageBox() {
  return (
    <div className=" h-screen w-full bg-neutral-50 relative">
      <div className=" w-full h-full py-20 px-20">
        <div className="">
          <div className="bg-neutral-500 max-w-md text-white"> hello 😀</div>
        </div>
      </div>

      <SendMesseage />
    </div>
  );
}
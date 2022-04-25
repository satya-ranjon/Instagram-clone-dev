import React from "react";
import SendMesseage from "./SendMesseage";

export default function MesseageBox() {
  return (
    <div className=" h-screen w-full bg-neutral-50 relative">
      <div className=" w-full h-full py-20 px-20">
        <div className="">
          <p className="bg-neutral-500 max-w-10 text-white"> hello 😀</p>
        </div>
      </div>

      <SendMesseage />
    </div>
  );
}

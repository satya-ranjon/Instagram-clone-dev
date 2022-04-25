import React from "react";
import SendMesseage from "./SendMesseage";

export default function MesseageBox() {
  return (
    <div className=" h-screen w-full bg-neutral-50 relative">
      <div className=" w-full h-full py-20 px-20">
        <div className=" flex w-full justify-start">
          <div className="flex space-x-2"></div>
          <p className="bg-neutral-500 w-fit max-w-sm text-white">
            hello Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolores nobis, sapiente sed, autem at reprehenderit eum quaerat
            optio ex laboriosam aspernatur provident fugit eos, doloribus quis
            tempore accusantium tempora ipsam. 😀
          </p>
        </div>
      </div>

      <SendMesseage />
    </div>
  );
}

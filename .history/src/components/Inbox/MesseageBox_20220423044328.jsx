import React from "react";
import SendMesseage from "./SendMesseage";

export default function MesseageBox() {
  return (
    <div className=" h-screen w-full bg-neutral-50 relative">
      <div className=" w-full h-full py-36 px-20">
        <p> hello 😀</p>
      </div>

      <SendMesseage />
    </div>
  );
}
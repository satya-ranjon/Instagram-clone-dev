import React from "react";
import SendMesseage from "./SendMesseage";

export default function MesseageBox() {
  return (
    <div className=" h-screen w-full bg-neutral-50 relative">
      <div className="">
        <p> hello 😀</p>
      </div>

      <SendMesseage />
    </div>
  );
}

import React from "react";
import Messeages from "./Messeages";
import SendMesseage from "./SendMesseage";

export default function MesseageBox() {
  return (
    <div className=" h-screen overflow-hidden w-full bg-neutral-100 relative">
      <Messeages />
      <SendMesseage />
    </div>
  );
}

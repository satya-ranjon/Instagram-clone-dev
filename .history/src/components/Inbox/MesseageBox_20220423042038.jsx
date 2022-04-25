import React from "react";
import MesseageHader from "./MesseagBoxHader";

export default function MesseageBox() {
  return (
    <div className=" h-screen w-full bg-neutral-50 relative">
      <div className=" absolute w-full h-20 bg-white bottom-0 left-0 right-0">
        <input type="text" className=" w-full p-2" />
      </div>
    </div>
  );
}

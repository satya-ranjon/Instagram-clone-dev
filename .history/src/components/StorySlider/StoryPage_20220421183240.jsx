import React from "react";
import Instgram from "../../Assets/image/instagram.png";
export default function StoryPage() {
  return (
    <div className="bg-[#1a1a1a] h-screen w-full ">
      <div className=" absolute top-5 left-5 ">
        <img src={Instgram} alt="" />
      </div>
    </div>
  );
}

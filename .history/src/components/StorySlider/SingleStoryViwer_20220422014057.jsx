import React from "react";

export default function SingleStoryViwer() {
  return (
    <div className="border-2 overflow-hidden rounded-md p-2 w-96 h-[580px]">
      <div className="">
        <img
          className="w-96 z-0 h-fit"
          src="https://images.pexels.com/photos/11161043/pexels-photo-11161043.jpeg?cs=srgb&dl=pexels-merve-%C5%9Fahin-11161043.jpg&fm=jpg"
          alt=""
        />
        <div className="w-full h-screen bg-[#00000059] absolute top-0 left-0"></div>
      </div>
    </div>
  );
}

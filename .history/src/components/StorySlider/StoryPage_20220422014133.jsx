import React from "react";
import Instgram from "../../Assets/image/instragm1.png";
import { AiOutlineClose } from "react-icons/ai";
import SingleStoryViwer from "./SingleStoryViwer";

export default function StoryPage() {
  return (
    <div className="bg-[#1a1a1a] h-screen w-full ">
      <div className=" absolute top-5 left-5 ">
        <img src={Instgram} alt="" />
      </div>
      <div className="absolute cursor-pointer top-7 right-10 text-4xl text-white">
        <AiOutlineClose />
      </div>
      <div className="fixed w-full h-[600px] bg-[#ff00001c] top-[20%] ">
        <div className="flex justify-center">
          <SingleStoryViwer />
        </div>
      </div>
    </div>
  );
}

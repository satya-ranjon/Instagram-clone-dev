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
          <div className="border-2 fixed top-0 translate-y-[10%]  overflow-hidden rounded-md p-2 w-[400px] h-[780px]">
            <div className="">
              <img
                className=" h-full"
                src="https://images.pexels.com/photos/11161043/pexels-photo-11161043.jpeg?cs=srgb&dl=pexels-merve-%C5%9Fahin-11161043.jpg&fm=jpg"
                alt=""
              />
            </div>
          </div>
          <div className="border-2 fixed top-0 left-0  overflow-hidden rounded-md p-2 w-[300px] h-[480px] translate-x-[2%] translate-y-60">
            <div className="">
              <img
                className=" h-full"
                src="https://images.pexels.com/photos/11161043/pexels-photo-11161043.jpeg?cs=srgb&dl=pexels-merve-%C5%9Fahin-11161043.jpg&fm=jpg"
                alt=""
              />
            </div>
          </div>
          <div className="border-2 fixed top-0 left-0  overflow-hidden rounded-md p-2 w-[300px] h-[480px] translate-x-[20rem] translate-y-60">
            <div className="">
              <img
                className=" h-full"
                src="https://images.pexels.com/photos/11161043/pexels-photo-11161043.jpeg?cs=srgb&dl=pexels-merve-%C5%9Fahin-11161043.jpg&fm=jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

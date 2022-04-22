import React from "react";
import Instgram from "../../Assets/image/instragm1.png";
export default function StoryPage() {
  return (
    <div className="bg-[#1a1a1a] h-screen w-full ">
      <div className=" z-10 absolute top-5 left-5 ">
        <img src={Instgram} alt="" />
      </div>
      <div className=""></div>
      <div className="fixed w-full h-[600px] top-[20%] ">
        <div className="flex justify-center">
          <div className="border-2 rounded-md p-2 w-96 h-[580px]">
            <div className="my-40">
              <img
                className=""
                src="https://img.freepik.com/free-photo/bearded-youngman-looks-excited-delighted-gladden-amazed-pointing-with-index-finger-aside_295783-1430.jpg?t=st=1650543640~exp=1650544240~hmac=abbbf450f32148664757a8eed42005737faec2f4a99781149420ec4a4d5c5049&w=996"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

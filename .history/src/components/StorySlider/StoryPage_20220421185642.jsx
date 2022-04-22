import React from "react";
import Instgram from "../../Assets/image/instragm1.png";
export default function StoryPage() {
  return (
    <div className="bg-[#1a1a1a] h-screen w-full ">
      <div className=" z-10 absolute top-5 left-5 ">
        <img src={Instgram} alt="" />
        <div className="  flex justify-center">
          <div className="  p-5 w-96 ">
            <div className="">
              <img
                className="h-full w-full"
                src="https://img.freepik.com/free-photo/portrait-man-woman-with-white-grapes_23-2149384035.jpg?w=996"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

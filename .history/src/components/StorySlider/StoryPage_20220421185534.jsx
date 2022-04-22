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
                src="https://img.freepik.com/free-photo/portrait-young-man-surrounded-by-hands-with-green-fruit-broccoli_23-2149384046.jpg?t=st=1650543640~exp=1650544240~hmac=83bcd703fa203d146e5211543770abab1b8d095ab1914b0fc9e948b2d395974c&w=740"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

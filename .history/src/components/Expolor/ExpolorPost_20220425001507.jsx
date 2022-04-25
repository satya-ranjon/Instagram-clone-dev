import React from "react";
import { FaComment } from "react-icons/fa";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ExpolorPost() {
  return (
    <div className=" w-full h-full relative cursor-pointer">
      <img
        className=" w-full h-full "
        src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?t=st=1650823253~exp=1650823853~hmac=ab0bf38bb0472341ad245adfe3310eb6de8850b06b6b2b000bbddb5dea241bc0&w=900"
        alt=""
      />
      <div className=" w-full h-full absolute top-0 left-0 bg-[#00000041] z-10 text-white ">
        <div className="">
          <div className="">
            <FaComment className="" />
          </div>
        </div>
        <FavoriteIcon className="" />
      </div>
    </div>
  );
}

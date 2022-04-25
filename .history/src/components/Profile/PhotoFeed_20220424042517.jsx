import React from "react";
import { IoIosPhotos } from "react-icons/io";
import StoreBar from "../StoreBar";
import ProfileSideBar from "./ProfileSideBar";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineSort } from "react-icons/md";
import { BiSearch } from "react-icons/bi";

export default function PhotoFeed() {
  return (
    <>
      <div className="flex justify-between w-full mt-10">
        <p className="text-xl font-semibold my-5 text-neutral-600">
          Photo Feed
        </p>
        <p className="button__btn font-semibold text-[11px] flex justify-between space-x-3 ">
          <p>SORT BY </p>
          <MdOutlineSort className=" text-sm my-auto" />
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-[26rem] h-fit overflow-y-scroll scrollbar-thumb-neutral-400 scrollbar-thin ">
        <div className=" h-32 bg-red-50 rounded-md overflow-hidden relative">
          <img
            className=" h-full w-full "
            src="https://img.freepik.com/free-photo/portrait-beautiful-smiling-girl-black-dress_171337-11486.jpg?t=st=1650723658~exp=1650724258~hmac=cd70ac9e6038b5baad425089e92c779347fb2536aa94764c4cb9173cd49260ea&w=740"
            alt=""
          />
          <IoIosPhotos className=" absolute top-1 right-3 text-white" />
        </div>
        <div className=" h-32 bg-red-50 rounded-md overflow-hidden relative">
          <img
            className=" h-full w-full "
            src="https://img.freepik.com/free-photo/portrait-beautiful-smiling-girl-black-dress_171337-11486.jpg?t=st=1650723658~exp=1650724258~hmac=cd70ac9e6038b5baad425089e92c779347fb2536aa94764c4cb9173cd49260ea&w=740"
            alt=""
          />
          <IoIosPhotos className=" absolute top-1 right-3 text-white" />
        </div>
        <div className=" h-32 bg-red-50 rounded-md overflow-hidden relative">
          <img
            className=" h-full w-full "
            src="https://img.freepik.com/free-photo/portrait-beautiful-smiling-girl-black-dress_171337-11486.jpg?t=st=1650723658~exp=1650724258~hmac=cd70ac9e6038b5baad425089e92c779347fb2536aa94764c4cb9173cd49260ea&w=740"
            alt=""
          />
          <IoIosPhotos className=" absolute top-1 right-3 text-white" />
        </div>
        <div className=" h-32 bg-red-50 rounded-md overflow-hidden relative">
          <img
            className=" h-full w-full "
            src="https://img.freepik.com/free-photo/portrait-beautiful-smiling-girl-black-dress_171337-11486.jpg?t=st=1650723658~exp=1650724258~hmac=cd70ac9e6038b5baad425089e92c779347fb2536aa94764c4cb9173cd49260ea&w=740"
            alt=""
          />
          <IoIosPhotos className=" absolute top-1 right-3 text-white" />
        </div>
        <div className=" h-32 bg-red-50 rounded-md overflow-hidden relative">
          <img
            className=" h-full w-full "
            src="https://img.freepik.com/free-photo/portrait-beautiful-smiling-girl-black-dress_171337-11486.jpg?t=st=1650723658~exp=1650724258~hmac=cd70ac9e6038b5baad425089e92c779347fb2536aa94764c4cb9173cd49260ea&w=740"
            alt=""
          />
          <IoIosPhotos className=" absolute top-1 right-3 text-white" />
        </div>
        <div className=" h-32 bg-red-50 rounded-md overflow-hidden relative">
          <img
            className=" h-full w-full "
            src="https://img.freepik.com/free-photo/portrait-beautiful-smiling-girl-black-dress_171337-11486.jpg?t=st=1650723658~exp=1650724258~hmac=cd70ac9e6038b5baad425089e92c779347fb2536aa94764c4cb9173cd49260ea&w=740"
            alt=""
          />
          <IoIosPhotos className=" absolute top-1 right-3 text-white" />
        </div>
        <div className=" h-32 bg-red-50 rounded-md overflow-hidden relative">
          <img
            className=" h-full w-full "
            src="https://img.freepik.com/free-photo/portrait-beautiful-smiling-girl-black-dress_171337-11486.jpg?t=st=1650723658~exp=1650724258~hmac=cd70ac9e6038b5baad425089e92c779347fb2536aa94764c4cb9173cd49260ea&w=740"
            alt=""
          />
          <IoIosPhotos className=" absolute top-1 right-3 text-white" />
        </div>
        <div className=" h-32 bg-red-50 rounded-md overflow-hidden relative">
          <img
            className=" h-full w-full "
            src="https://img.freepik.com/free-photo/portrait-beautiful-smiling-girl-black-dress_171337-11486.jpg?t=st=1650723658~exp=1650724258~hmac=cd70ac9e6038b5baad425089e92c779347fb2536aa94764c4cb9173cd49260ea&w=740"
            alt=""
          />
          <IoIosPhotos className=" absolute top-1 right-3 text-white" />
        </div>
        <div className=" h-32 bg-red-50 rounded-md overflow-hidden relative">
          <img
            className=" h-full w-full "
            src="https://img.freepik.com/free-photo/portrait-beautiful-smiling-girl-black-dress_171337-11486.jpg?t=st=1650723658~exp=1650724258~hmac=cd70ac9e6038b5baad425089e92c779347fb2536aa94764c4cb9173cd49260ea&w=740"
            alt=""
          />
          <IoIosPhotos className=" absolute top-1 right-3 text-white" />
        </div>
        <div className=" h-32 bg-red-50 rounded-md overflow-hidden relative">
          <img
            className=" h-full w-full "
            src="https://img.freepik.com/free-photo/portrait-beautiful-smiling-girl-black-dress_171337-11486.jpg?t=st=1650723658~exp=1650724258~hmac=cd70ac9e6038b5baad425089e92c779347fb2536aa94764c4cb9173cd49260ea&w=740"
            alt=""
          />
          <IoIosPhotos className=" absolute top-1 right-3 text-white" />
        </div>
        <div className=" h-32 bg-red-50 rounded-md overflow-hidden relative">
          <img
            className=" h-full w-full "
            src="https://img.freepik.com/free-photo/portrait-beautiful-smiling-girl-black-dress_171337-11486.jpg?t=st=1650723658~exp=1650724258~hmac=cd70ac9e6038b5baad425089e92c779347fb2536aa94764c4cb9173cd49260ea&w=740"
            alt=""
          />
          <IoIosPhotos className=" absolute top-1 right-3 text-white" />
        </div>
        <div className=" h-32 bg-red-50 rounded-md overflow-hidden relative">
          <img
            className=" h-full w-full "
            src="https://img.freepik.com/free-photo/portrait-beautiful-smiling-girl-black-dress_171337-11486.jpg?t=st=1650723658~exp=1650724258~hmac=cd70ac9e6038b5baad425089e92c779347fb2536aa94764c4cb9173cd49260ea&w=740"
            alt=""
          />
          <IoIosPhotos className=" absolute top-1 right-3 text-white" />
        </div>
        <div className=" h-32 bg-red-50 rounded-md overflow-hidden relative">
          <img
            className=" h-full w-full "
            src="https://img.freepik.com/free-photo/portrait-beautiful-smiling-girl-black-dress_171337-11486.jpg?t=st=1650723658~exp=1650724258~hmac=cd70ac9e6038b5baad425089e92c779347fb2536aa94764c4cb9173cd49260ea&w=740"
            alt=""
          />
          <IoIosPhotos className=" absolute top-1 right-3 text-white" />
        </div>
        <div className=" h-32 bg-red-50 rounded-md overflow-hidden relative">
          <img
            className=" h-full w-full "
            src="https://img.freepik.com/free-photo/portrait-beautiful-smiling-girl-black-dress_171337-11486.jpg?t=st=1650723658~exp=1650724258~hmac=cd70ac9e6038b5baad425089e92c779347fb2536aa94764c4cb9173cd49260ea&w=740"
            alt=""
          />
          <IoIosPhotos className=" absolute top-1 right-3 text-white" />
        </div>
        <div className=" h-32 bg-red-50 rounded-md overflow-hidden relative">
          <img
            className=" h-full w-full "
            src="https://img.freepik.com/free-photo/portrait-beautiful-smiling-girl-black-dress_171337-11486.jpg?t=st=1650723658~exp=1650724258~hmac=cd70ac9e6038b5baad425089e92c779347fb2536aa94764c4cb9173cd49260ea&w=740"
            alt=""
          />
          <IoIosPhotos className=" absolute top-1 right-3 text-white" />
        </div>
      </div>
    </>
  );
}

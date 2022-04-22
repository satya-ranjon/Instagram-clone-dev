import React from "react";
import { BsInstagram } from "react-icons/bs";
import Instagram from "./image/instagram.png";

export default function Logo() {
  return (
    <div className="flex space-x-2">
      <BsInstagram className="my-auto text-2xl" />
      <img src={Instagram} alt="" className="my-auto text-2xl" />
    </div>
  );
}

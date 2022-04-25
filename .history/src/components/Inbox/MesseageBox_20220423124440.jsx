import { Avatar } from "@mui/material";
import React from "react";
import SendMesseage from "./SendMesseage";
import ReciverIcon from "../../Assets/ReciverIcon";
import SenderIcon from "../../Assets/SenderIcon";

export default function MesseageBox() {
  return (
    <div className=" h-screen w-full bg-neutral-100 relative">
      <SendMesseage />
    </div>
  );
}

import React from "react";
import Logo from "../Assets/Logo";
import TopMenu from "./TopMenu";
import Avatar from "@mui/material/Avatar";

export default function Hader() {
  return (
    <div className="flex justify-between p-10">
      <Logo />
      <TopMenu />
      <div className="flex">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </div>
    </div>
  );
}

import React from "react";
import Logo from "../Assets/Logo";
import TopMenu from "./TopMenu";

export default function Hader() {
  return (
    <div className="flex justify-between p-10">
      <Logo />
      <TopMenu />
    </div>
  );
}

import React from "react";
import Logo from "../Assets/Logo";
import TopMenu from "./TopMenu";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { FiSend } from "react-icons/fi";

export default function Hader() {
  return (
    <div className="flex justify-between p-10">
      <Logo />
      <TopMenu />
      <Stack direction="row" spacing={3}>
        <FiSend className="text-3xl" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </Stack>
    </div>
  );
}

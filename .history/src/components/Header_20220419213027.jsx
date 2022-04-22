import React from "react";
import Logo from "../Assets/Logo";
import TopMenu from "./TopMenu";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function Hader() {
  return (
    <div className="flex justify-between p-10">
      <Logo />
      <TopMenu />
      <Stack direction="row" spacing={3}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </Stack>
    </div>
  );
}

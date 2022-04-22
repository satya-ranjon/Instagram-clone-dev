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
        <FiSend className="text-3xl my-auto" />
        <Avatar
          alt="Cindy Baker"
          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1650382539~exp=1650383139~hmac=a09c4df5570c772851b8861331d8df1bdced543cb69368e048a7648e6b6f6315&w=900"
        />
      </Stack>
    </div>
  );
}

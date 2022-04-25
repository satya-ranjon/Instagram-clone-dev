import { TextField } from "@mui/material";
import React from "react";

export default function SearchUsers() {
  return (
    <div className="">
      <TextField
        className=" w-full p-4 "
        id="standard-basic"
        label="Search Users"
        variant="standard"
      />
    </div>
  );
}

import { TextField } from "@mui/material";
import React from "react";

export default function SearchUsers() {
  return (
    <div className="px-4">
      <TextField
        className=" w-full "
        id="standard-basic"
        label="Search Users"
        variant="standard"
      />
    </div>
  );
}

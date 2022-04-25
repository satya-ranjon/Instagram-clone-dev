import { TextField } from "@mui/material";
import React from "react";
import MesseageBox from "./MesseageBox";

export default function InboxContainer() {
  return (
    <div>
      <div className=" flex justify-between">
        <div className=" h-screen w-96 lg:w-[50rem]">
          <div className=" w-full p-2">
            {/* <input
              type="text"
              className=" border-2 border-neutral-400 w-full p-2 rounded-md outline-none text-neutral-500 font-semibold text-xl "
              placeholder="Search User ..... /"
            /> */}
            <TextField
              className=" w-full"
              id="standard-basic"
              label="Standard"
              variant="standard"
              focused="false"
            />
          </div>
        </div>
        <MesseageBox />
      </div>
    </div>
  );
}

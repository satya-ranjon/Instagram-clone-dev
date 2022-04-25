import { TextField } from "@mui/material";
import React from "react";

export default function Login() {
  return (
    <div className=" w-full h-screen">
      <div className="login__box">
        <div className="">
          <form>
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <br />
            <TextField id="filled-basic" label="Filled" variant="filled" />
          </form>
        </div>
      </div>
    </div>
  );
}

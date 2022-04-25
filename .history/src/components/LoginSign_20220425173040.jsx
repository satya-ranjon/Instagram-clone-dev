import { Button, TextField } from "@mui/material";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import facebook from "../Assets/image/facebook.png";
import { useLocation } from "react-router-dom";
export default function LoginSign() {
  const { pathname } = useLocation();
  return (
    <div className=" w-full h-screen">
      <div className="login__box">
        <div className=" space-y-5">
          <form className=" space-y-3">
            {pathname === "/login" && (
              <TextField
                className="w-full"
                id="filled-basic"
                label="Username *"
                variant="filled"
              />
            )}
            <br />
            <TextField
              className="w-full"
              id="filled-basic"
              label="Email *"
              variant="filled"
            />
            <br />
            <TextField
              className="w-full"
              id="filled-basic"
              label="Password *"
              variant="filled"
            />
            <br />
            <Button className="w-full" variant="outlined">
              Login
            </Button>
          </form>
          <div className="flex justify-between space-x-2 text-gray-400">
            <div className="w-full h-[1px] bg-gray-300 my-auto"></div>
            <div className="">Or</div>
            <div className="w-full h-[1px] bg-gray-300 my-auto"></div>
          </div>
          <Button variant="text" className=" w-full flex space-x-2">
            <FcGoogle className=" text-2xl" />
            <p className="">Google</p>
          </Button>
          <Button variant="text" className=" w-full flex space-x-2">
            <img src={facebook} alt="" />
            <p className=" ">Facebook</p>
          </Button>
        </div>
        <div className="w-ful">
          <p></p>
        </div>
      </div>
    </div>
  );
}

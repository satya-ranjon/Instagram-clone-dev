import { Button, TextField } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import { FcGoogle } from "react-icons/fc";
import facebook from "../Assets/image/facebook.png";
import { useParams, useLocation } from "react-router-dom";
export default function Login() {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className=" w-full h-screen">
      <div className="login__box">
        <div className=" space-y-5">
          <form className=" space-y-3">
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
      </div>
    </div>
  );
}

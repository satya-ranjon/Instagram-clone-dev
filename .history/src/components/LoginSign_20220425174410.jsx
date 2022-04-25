import { Button, TextField } from "@mui/material";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import facebook from "../Assets/image/facebook.png";
import { Link, useLocation } from "react-router-dom";

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
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

export default function LoginSign() {
  const { pathname } = useLocation();
  const [values, setValues] =
    React.useState <
    State >
    {
      amount: "",
      password: "",
      weight: "",
      weightRange: "",
      showPassword: false,
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className=" w-full h-screen">
      <div className="login__box">
        <div className=" space-y-5">
          <form className=" space-y-3">
            {pathname === "/login" || (
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
            <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <br />
            <Button className="w-full" variant="outlined">
              {pathname === "/login" ? "Login" : " Sign Up"}
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
        <div className="w-ful text-sm p-2 mt-4">
          <p>
            {pathname === "/login" ? " Don't " : " Already"} have an account?
            <Link
              to={`${pathname === "/login" ? "/signup" : "/login"}`}
              className=" text-blue-500 font-semibold cursor-pointer"
            >
              {pathname === "/login" ? " Sign Up" : " Login"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

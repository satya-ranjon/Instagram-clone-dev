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

export default function Login() {
  return (
    <div className=" w-full h-screen">
      <div className="login__box">
        <div className=" space-y-5">
          <form className=" space-y-3">
            <TextField id="filled-basic" label="Email *" variant="filled" />
            <br />
            <TextField id="filled-basic" label="Password *" variant="filled" />
            <br />
            <Button className="w-full" variant="outlined">
              Login
            </Button>
          </form>
          <Button variant="text" className=" w-full flex space-x-5">
            <FcGoogle />
            Google
          </Button>
        </div>
      </div>
    </div>
  );
}
import { TextField } from "@mui/material";
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
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Login() {
  return (
    <div className=" w-full h-screen">
      <div className="login__box">
        <div className="">
          <form className=" space-y-3">
            <TextField id="filled-basic" label="Email *" variant="filled" />
            <br />
            <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
              <TextField htmlFor="standard-adornment-password">
                Password
              </TextField>
              <Input
                id="standard-adornment-password"
                type={true ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility">
                      {true ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </form>
        </div>
      </div>
    </div>
  );
}

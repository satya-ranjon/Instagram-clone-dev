import { TextField } from "@mui/material";
import React from "react";

export default function Login() {
  return (
    <div className=" w-full h-screen">
      <div className="login__box">
        <div className="">
          <form className=" space-y-3">
            <TextField id="filled-basic" label="Email *" variant="filled" />
            <br />
            <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
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

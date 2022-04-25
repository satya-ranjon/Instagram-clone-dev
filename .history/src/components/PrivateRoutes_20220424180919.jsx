import React from "react";
import { Outlet } from "react-router-dom";
import Hader from "./Header";

export default function PrivateRoutes() {
  return (
    <>
      <Hader />
      <Outlet />
    </>
  );
}

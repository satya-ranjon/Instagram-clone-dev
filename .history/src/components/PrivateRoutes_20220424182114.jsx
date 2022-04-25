import React from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import Hader from "./Header";

export default function PrivateRoutes() {
  const path = useLocation();
  console.log(path);
  return (
    <>
      {path === "profile" && <Hader />}
      <Outlet />
    </>
  );
}

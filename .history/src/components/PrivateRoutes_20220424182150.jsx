import React from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import Hader from "./Header";

export default function PrivateRoutes() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      {pathname === "profile" && <Hader />}
      <Outlet />
    </>
  );
}

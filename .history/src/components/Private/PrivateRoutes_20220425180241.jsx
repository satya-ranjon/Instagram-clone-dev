import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import Hader from "../Header";

export default function PrivateRoutes() {
  const { pathname } = useLocation();
  const authuser = true;

  return authuser ? (
    <>
      {(pathname === "/" && <Hader />) ||
        (pathname === "/expolor" && <Hader />)}
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
}
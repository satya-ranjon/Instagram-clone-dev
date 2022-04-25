import React from "react";
import { Outlet, useLocation, useNavigate, Navigate } from "react-router-dom";
import Hader from "./Header";

export default function PrivateRoutes() {
  const { pathname } = useLocation();
  const authuser = false;
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

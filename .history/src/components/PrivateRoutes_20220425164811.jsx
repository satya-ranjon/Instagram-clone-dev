import React from "react";
import { Outlet, useParams, useLocation, useNavigate } from "react-router-dom";
import Hader from "./Header";

export default function PrivateRoutes() {
  const { pathname } = useLocation();
  const { navigate } = useNavigate();
  const authuser = true;  
  return  authuser ? (
    <>
      {(pathname === "/" && <Hader />) ||
        (pathname === "/expolor" && <Hader />)}
      <Outlet />
    </>
  ) : ()
}

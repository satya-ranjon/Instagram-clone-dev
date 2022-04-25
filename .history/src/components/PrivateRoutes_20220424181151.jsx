import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Hader from "./Header";

export default function PrivateRoutes() {
  const path = useParams();
  return (
    <>
      {path !== "expolor" || "" <Hader />}
      <Outlet />
    </>
  );
}

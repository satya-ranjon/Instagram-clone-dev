import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Hader from "./Header";

export default function PrivateRoutes() {
  const x = useParams();
  console.log(x);
  return (
    <>
      <Hader />
      <Outlet />
    </>
  );
}

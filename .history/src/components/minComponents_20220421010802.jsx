import React from "react";
import Hader from "./Header";
import Home from "./Home/Home";
import StoreBar from "./StoreBar";

export default function minComponents() {
  return (
    <>
      <Hader />
      <StoreBar />
      <Home />
    </>
  );
}

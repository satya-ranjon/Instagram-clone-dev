import React from "react";
import Home from "./Home";
import Header from "../Header";
import StoryBar from "../StoreBar";

export default function HomeContainder() {
  return (
    <>
      <Header />
      <div className="">
        <StoryBar />
      </div>
      <Home />
    </>
  );
}

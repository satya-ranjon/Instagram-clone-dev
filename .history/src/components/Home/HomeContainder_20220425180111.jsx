import React from "react";
import Home from "./Home";
import StoryBar from "../StoreBar";

export default function HomeContainder() {
  return (
    <>
      <div className="relative mt-[7.9rem] mx-10 sm:mx-32 lg:mx-72">
        <StoryBar />
      </div>
      <Home />
    </>
  );
}

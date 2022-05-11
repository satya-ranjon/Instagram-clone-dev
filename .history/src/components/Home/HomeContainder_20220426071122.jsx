import React from "react";
import Home from "./Home";
import StoryBar from "../StoreBar";
import { useAuth } from "../../Context/AuthContext";

export default function HomeContainder() {
  const { currentUser } = useAuth();
  console.log(currentUser.providerId);
  return (
    <>
      <div className="relative mt-[7.9rem] mx-10 sm:mx-32 lg:mx-72">
        <StoryBar />
      </div>
      <Home />
    </>
  );
}

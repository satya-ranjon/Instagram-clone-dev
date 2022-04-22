import React from "react";
import RightSideBar from "../RightSideBar";
import PostList from "./PostList";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-4 mx-52 my-10 font-semibold">
      <RightSideBar />
      <PostList />
      <PostList />
      <PostList />
      <PostList />
      <PostList />
    </div>
  );
}

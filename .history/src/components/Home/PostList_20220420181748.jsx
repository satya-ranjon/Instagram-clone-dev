import React from "react";
import SinglePost from "./SinglePost";

export default function PostList({ griddesign }) {
  return (
    <div
      className={`grid ${griddesign} gap-4 mx-22 lg:mx-32 xl:mx-42 2xl:mx-52 my-10 font-semibold`}
    >
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
    </div>
  );
}

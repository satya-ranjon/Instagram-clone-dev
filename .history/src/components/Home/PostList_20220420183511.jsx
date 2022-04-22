import React from "react";
import SinglePost from "./SinglePost";

export default function PostList({ griddesign }) {
  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-3 gap-2 mx-20 lg:mx-32 xl:mx-42 2xl:mx-52 my-10 font-semibold`}
    >
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
    </div>
  );
}

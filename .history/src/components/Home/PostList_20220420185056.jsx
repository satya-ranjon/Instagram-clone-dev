import React from "react";
import SinglePost from "./SinglePost";

export default function PostList({ griddesign }) {
  console.log(griddesign);
  return (
    <div className={griddesign}>
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
    </div>
  );
}

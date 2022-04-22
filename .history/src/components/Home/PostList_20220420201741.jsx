import React from "react";
import SinglePost from "./SinglePost";

export default function PostList({ griddesign, imgdesign }) {
  console.log(griddesign);
  return (
    <div className={griddesign}>
      <SinglePost imgdesign={imgdesign} />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
    </div>
  );
}

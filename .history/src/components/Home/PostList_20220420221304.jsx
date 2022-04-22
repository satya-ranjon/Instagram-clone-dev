import React from "react";
import SinglePost from "./SinglePost";

export default function PostList({ griddesign, imgdesign }) {
  console.log(typeof griddesign);
  return (
    <div>
      <SinglePost imgdesign={imgdesign} />
      <SinglePost imgdesign={imgdesign} />
      <SinglePost imgdesign={imgdesign} />
      <SinglePost imgdesign={imgdesign} />
      <SinglePost imgdesign={imgdesign} />
      <SinglePost imgdesign={imgdesign} />
      <SinglePost imgdesign={imgdesign} />
    </div>
  );
}

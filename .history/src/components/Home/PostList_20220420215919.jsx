import React from "react";
import SinglePost from "./SinglePost";

export default function PostList({ griddesign, imgdesign }) {
  console.log(griddesign);
  return (
    <div className={griddesign.tostring()}>
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

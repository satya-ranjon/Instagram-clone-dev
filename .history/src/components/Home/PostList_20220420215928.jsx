import React from "react";
import SinglePost from "./SinglePost";

export default function PostList({ griddesign, imgdesign }) {
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

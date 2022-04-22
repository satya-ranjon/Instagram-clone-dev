import React from "react";

import PostList from "./PostList";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-4 mx-52 my-10 font-semibold">
      <PostList />
      <PostList />
    </div>
  );
}

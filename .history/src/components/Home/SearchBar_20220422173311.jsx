import { useState } from "react";

export default function TemporaryDrawer() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="">
      <div className=" w-full h-full bg-red-100 absolute ">khokon</div>
    </div>
  );
}

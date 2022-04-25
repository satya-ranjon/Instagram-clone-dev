import { useState } from "react";

export default function TemporaryDrawer() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" w-96 h-96 mx-auto relative">
      <div className=" w-full h-full bg-red-100 absolute ">khokon</div>
    </div>
  );
}

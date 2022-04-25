import { useState } from "react";

export default function TemporaryDrawer() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-96 h-96 bg-red-100 absolute left-[50%] right-[50%]"></div>
  );
}
import { useState } from "react";

export default function TemporaryDrawer() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      {toggle && (
        <div className="">
          <div className="w-full h-96 bg-red-400 absolute z-10">khokon</div>
          <div className=" h-screen w-full bg-[#3634344b] fixed"></div>
        </div>
      )}
    </>
  );
}

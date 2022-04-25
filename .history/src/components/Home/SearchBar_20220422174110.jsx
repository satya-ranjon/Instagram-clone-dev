import { useState } from "react";

export default function TemporaryDrawer() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <button onClick={() => setToggle((prv) => !prv)}>Open</button>
      {toggle && (
        <div className="absolute w-full h-96 bg-red-400">
          <div className="w-full">khokon</div>
          <div className=" h-screen w-full bg-[#3634344b] fixed"></div>
        </div>
      )}
    </>
  );
}

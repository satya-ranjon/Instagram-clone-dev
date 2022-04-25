import { useState } from "react";

export default function TemporaryDrawer() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <button onClick={() => setToggle((prv) => !prv)}>Open</button>
      {toggle && (
        <div className="">
          <div className="absolute w-full h-96 bg-red-400 z-10 top-0">
            khokon
          </div>
          <div className=" h-screen w-full bg-[#3634344b] fixed"></div>
        </div>
      )}
    </>
  );
}

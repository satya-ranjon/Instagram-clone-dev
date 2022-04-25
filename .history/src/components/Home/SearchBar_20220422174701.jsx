import { useState } from "react";

export default function TemporaryDrawer() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <button onClick={() => setToggle((prv) => !prv)}>Open</button>
      <div className="">
        <div
          className={`transition-all duration-300 absolute w-full h-96 bg-red-400 z-10  ${
            toggle ? "top-0" : "top-[-90%] transition-all duration-300 "
          } `}
        >
          khokon
        </div>
        <div
          onClick={() => setToggle((prv) => !prv)}
          className=" transition-all duration-300 h-screen w-full bg-[#3634344b] fixed top-0 "
        ></div>
      </div>
    </>
  );
}

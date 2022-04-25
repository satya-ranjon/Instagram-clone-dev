import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
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
          <div className="p-10">
            <div className="rounded-full overflow-hidden border-2 border-gray-400 flex ">
              <input type="text" className=" outline-none  w-full p-5 " />
              <div className=" text-4xl  ">
                <BiSearchAlt className=" my-auto mx-4" />
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => setToggle((prv) => !prv)}
          className={` transition-all duration-300 h-screen w-full bg-[#3634344b] fixed top-0 ${
            toggle ? "top-0  " : "top-[-200%] "
          } `}
        ></div>
      </div>
    </>
  );
}

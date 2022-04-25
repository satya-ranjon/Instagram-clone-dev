import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export default function SearchBar({ openSearchBar, setOpenSideBar }) {
  return (
    <>
      <div className="">
        <div
          className={`transition-all duration-300 absolute left-0 w-full bg-white z-10  ${
            openSearchBar
              ? "top-0"
              : "top-[-9000%] transition-all duration-300 "
          } `}
        >
          <div className="p-10 sm:px-20 lg:px-52">
            <div className="rounded-full overflow-hidden border-2 border-gray-400 flex bg-slate-400 ">
              <input
                type="text"
                className=" outline-none text-xl w-full p-3 "
              />
              <div className=" cursor-pointer text-4xl">
                <BiSearchAlt className="my-3 mx-5 text-white " />
              </div>
            </div>
            <AiOutlineClose
              className=" absolute right-5 md:right-10 top-14 text-4xl text-gray-400 transition-all duration-500 hover:rotate-180 hover:text-gray-600 cursor-pointer hidden sm:block"
              onClick={() => setOpenSideBar((prv) => !prv)}
            />
          </div>
        </div>
        <div
          onClick={() => setOpenSideBar((prv) => !prv)}
          className={` transition-all duration-300 h-screen w-full bg-[#3634344b] fixed top-0 left-0 ${
            openSearchBar ? "top-0  " : "top-[-200%] "
          } `}
        ></div>
      </div>
    </>
  );
}
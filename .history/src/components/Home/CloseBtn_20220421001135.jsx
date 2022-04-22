import React from "react";

export default function CloseBtn() {
  return (
    <div
      className="absolute right-4 hover:text-neutral-600 top-3 text-4xl text-neutral-300 transition-all duration-200 cursor-pointer"
      onClick={() => setOpen((prv) => !prv)}
    >
      <AiOutlineCloseSquare />
    </div>
  );
}

import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { Avatar } from "@mui/material";
import { FiMoreVertical } from "react-icons/fi";
import PostDetielPost from "./PostDetielPost";

export default function PostDetielsModel() {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      <div className="">
        <Dialog
          open={open}
          maxWidth=" xl"
          onClose={() => setOpen((prv) => !prv)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="post__detiels_model">
            <PostDetielPost />
            <div className="h-full w-full text-neutral-600">
              <div className=" flex justify-between p-3">
                <div className="flex space-x-3">
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    className="cursor-pointer"
                  />
                  <div className=" ">
                    <p className=" font-semibold text-md cursor-pointer">
                      Anyme Davil
                    </p>
                    <p className=" text-[11px] text-neutral-400 ">
                      i am a csc enginnere
                    </p>
                  </div>
                </div>
                <FiMoreVertical className=" my-auto text-2xl" />
              </div>
            </div>
          </div>
        </Dialog>
      </div>

      <button className="" onClick={() => setOpen((prv) => !prv)}>
        open
      </button>
    </>
  );
}

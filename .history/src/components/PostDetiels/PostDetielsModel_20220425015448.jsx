import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { Avatar } from "@mui/material";
import { FiMoreVertical } from "react-icons/fi";
import PostDetielPost from "./PostDetielPost";
import PostDetielsHader from "./PostDetielsHader";
import CommentDetiels from "./CommentDetiels";

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
            <div className="h-full w-full lg:w-[40rem] text-neutral-600 ">
              <PostDetielsHader />
              <CommentDetiels />
              <div className="">
                <div className="flex justify-between">
                  <div className="flex space-x-2"></div>
                </div>
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
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { Avatar } from "@mui/material";
import { GrFavorite } from "react-icons/gr";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BsBookmarks, BsEmojiSmile } from "react-icons/bs";
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
              <div className=" p-3 text-neutral-600">
                <div>
                  <div className="flex justify-between text-xl">
                    <div className="flex space-x-4 ">
                      <GrFavorite className=" cursor-pointer" />
                      <FaRegComment className=" cursor-pointer" />
                      <FiSend className=" cursor-pointer" />
                    </div>
                    <BsBookmarks className=" cursor-pointer text-2xl" />
                  </div>
                  <p className=" font-semibold text-sm py-3">1521 likes</p>
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

import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { Avatar } from "@mui/material";
import { FiMoreVertical } from "react-icons/fi";
import PostDetielPost from "./PostDetielPost";
import PostDetielsHader from "./PostDetielsHader";

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
              <div className="h-[40rem] p-3 lg:h-[35rem] bg-red-100">
                <div className="">
                  <div className="flex space-x-3">
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      className="cursor-pointer"
                    />
                    <div className=" space-x-3">
                      <span className="font-semibold cursor-pointer">
                        Mary jae
                      </span>
                      <span>
                        this is very good😀 very nice good and very good
                      </span>
                    </div>
                  </div>
                  <div className="flex">
                    <p>3 min</p>
                    <p>3 Likes</p>
                    <p>3 Reply</p>
                  </div>
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

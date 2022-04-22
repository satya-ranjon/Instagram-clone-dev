import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import CloseBtn from "./CloseBtn";

export default function NewPost({ open, setOpen }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen((prv) => !prv)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <CloseBtn setOpen={setOpen} />
        <div className="p-4 max-w-[300px]">
          <div className="h-96 text-neutral-500 ">
            <div className=" font-semibold  text-center border-b-2 pb-2">
              Create new post
            </div>
            <div className="w-full flex flex-col my-12 sm:my-20 justify-center space-y-6">
              <MdOutlineAddPhotoAlternate className="text-8xl mx-auto  my-auto" />
              <p className=" text-center text-xl sm:text-3xl font-semibold">
                Drag photos and videos here
              </p>
              <Button
                variant="contained"
                className="m-4"
                size="small"
                color="primary"
              >
                Select from computer
              </Button>
              <img
                src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650478950~exp=1650479550~hmac=dd0038939ad28d77d2bd6608c25432b64a44eed38ce761c5104cc8bc195501df&w=740"
                alt=""
              />
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

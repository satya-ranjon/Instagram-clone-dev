import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
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
        <div className="p-4 max-w-md">
          <div className="h-96 text-neutral-500 ">
            <div className=" font-semibold  text-center border-b-2 pb-2">
              Create new post
            </div>
            <div className="w-full flex flex-col my-20 justify-center space-y-6">
              <MdOutlineAddPhotoAlternate className="text-8xl mx-auto  my-auto" />
              <p className=" text-center text-3xl font-semibold">
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
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

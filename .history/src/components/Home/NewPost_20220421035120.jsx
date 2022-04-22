import * as React from "react";
import Dialog from "@mui/material/Dialog";
import NewPostSectionOne from "./newPostSectionOne";
import NewPostSectionTwo from "./newPostSectionTwo";

export default function NewPost({ open, setOpen }) {
  return (
    <div>
      <Dialog
        open={open}
        maxWidth=" xl"
        onClose={() => setOpen((prv) => !prv)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="p-4 sm:w-[36rem] transition-all duration-300 lg:w-[50rem] sm:h-[30rem] lg:h-[40rem]">
          {/* <NewPostSectionOne setOpen={setOpen} /> */}

          <div className="w-20 h-20">khokon</div>
          <div className="w-96 h-96">
            <NewPostSectionTwo />
          </div>
        </div>
      </Dialog>
    </div>
  );
}

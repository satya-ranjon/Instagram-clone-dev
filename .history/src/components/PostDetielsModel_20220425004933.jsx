import * as React from "react";
import Dialog from "@mui/material/Dialog";

export default function PostDetielsModel() {
  const [open, setOpen] = React.useState(true);
  return (
    <div className="">
      <div className="" onClose={() => setOpen((prv) => !prv)}>
        open
      </div>
      <Dialog
        open={open}
        maxWidth=" xl"
        onClose={() => setOpen((prv) => !prv)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="p-4 sm:w-[36rem] transition-all duration-300 w-[50rem] lg:w-[80rem] sm:h-[30rem] lg:h-[50rem]">
          khookon
        </div>
      </Dialog>
    </div>
  );
}

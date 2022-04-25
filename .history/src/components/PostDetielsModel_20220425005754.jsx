import * as React from "react";
import Dialog from "@mui/material/Dialog";

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
          <div className="p-4 w-full transition-all duration-300 sm:w-[36rem]   lg:w-[60rem] xl:w-[75rem] h-[30rem] sm:h-[30rem] lg:h-[50rem] flex justify-between">
            <div className="h-full w-full bg-red-50"></div>
            <div className="h-full w-96 bg-red-500"></div>
          </div>
        </Dialog>
      </div>

      <button className="" onClick={() => setOpen((prv) => !prv)}>
        open
      </button>
    </>
  );
}

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
          <div className="p-4 w-[36rem] transition-all duration-300 md:w-[50rem] lg:w-[60rem] xl:w-[75rem] sm:h-[30rem] lg:h-[50rem]">
            khookon
          </div>
        </Dialog>
      </div>

      <button className="" onClick={() => setOpen((prv) => !prv)}>
        open
      </button>
    </>
  );
}

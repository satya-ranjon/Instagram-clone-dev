import * as React from "react";
import Dialog from "@mui/material/Dialog";

export default function PostDetielsModel() {
  const [open, setOpen] = React.useState(true);
  return (
    <div>
      <Dialog
        open={open}
        maxWidth=" xl"
        onClose={() => setOpen((prv) => !prv)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="">khookon</div>
      </Dialog>
    </div>
  );
}

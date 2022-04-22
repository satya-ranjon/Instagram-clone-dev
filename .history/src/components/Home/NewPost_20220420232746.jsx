import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function NewPost({ open, setOpen }) {
  return (
    <div>
      <Button variant="outlined" onClick={() => setOpen((prv) => !prv)}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen((prv) => !prv)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className="bg-red-100"
          >
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen((prv) => !prv)}>Disagree</Button>
          <Button onClick={() => setOpen((prv) => !prv)} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

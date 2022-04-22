import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
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
          <div className="h-96">
            <div className=" font-semibold text-gray-600 text-center border-b-2 pb-2">
              Create new post
            </div>
            <AddPhotoAlternateIcon className="mx-auto" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            deserunt minima doloribus minus blanditiis dolor atque consequatur
            vel, incidunt quas officiis praesentium libero nisi maiores, nihil
            debitis hic alias. Ad.
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

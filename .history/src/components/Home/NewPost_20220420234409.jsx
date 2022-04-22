import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

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
            <div className="mx-32">
              <MdOutlineAddPhotoAlternate className="text-8xl" />
            </div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            atque inventore voluptate animi quibusdam voluptates. Nesciunt iusto
            vitae labore illum, sit harum nam molestiae fuga quia asperiores
            dolore reiciendis eius.
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

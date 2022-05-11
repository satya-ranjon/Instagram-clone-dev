import * as React from "react";
import Dialog from "@mui/material/Dialog";

export default function ProfileImgUpLoad({ upimgOpen, setUpimgOpen }) {
  const [fielimg, setFielimg] = React.useState();
  console.log(fielimg);
  return (
    <div>
      <Dialog
        open={upimgOpen}
        maxWidth=" xl"
        onClose={() => setUpimgOpen((prv) => !prv)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="p-4 sm:w-[36rem] transition-all duration-300 lg:w-[50rem] sm:h-[30rem] lg:h-[40rem]">
          <form>
            <input
              type="file"
              name=""
              id=""
              onChange={(e) => setFielimg(e.target.files[0])}
            />
            <img src="file:///C:/Users/khokon/Pictures/1%20(1).png" alt="" />
          </form>
        </div>
      </Dialog>
    </div>
  );
}

import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { Button } from "@mui/material";

export default function ProfileImgUpLoad({ upimgOpen, setUpimgOpen }) {
  const [selectedFile, setSelectedFile] = React.useState();
  const [preview, setPreview] = React.useState();

  React.useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    localStorage.setItem("profile", objectUrl);
  }, [selectedFile]);

  const proImg = localStorage.getItem("profile");
  console.log(proImg);
  return (
    <div>
      <Dialog
        open={upimgOpen}
        maxWidth=" xl"
        onClose={() => setUpimgOpen((prv) => !prv)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="w-[22rem] sm:w-[36rem]  transition-all duration-300 lg:w-[50rem] h-[28rem] sm:h-[30rem] lg:h-[40rem]">
          <form
            className={` w-full top-0  h-[27rem] lg:h-[36rem]  ${
              !preview && "bg__img"
            } `}
          >
            <input
              type="file"
              className="text-transparent w-full h-full opacity-0 "
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
          </form>
          <img
            className=" z-10 w-full sm:h-[26rem] lg:h-[36rem]"
            src={preview}
          />
          <div className=" w-full py-3 px-5 flex justify-center">
            <Button className=" my-auto w-full" variant="outlined">
              Submit
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
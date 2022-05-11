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
        <div className="sm:w-[36rem] transition-all duration-300 lg:w-[50rem] sm:h-[30rem] lg:h-[40rem]   ">
          <form className="absolute w-full sm:h-[27rem] lg:h-[36rem] ">
            <input
              type="file"
              className="text-transparent w-full h-full opacity-0"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
          </form>
          <img className=" w-full sm:h-[26rem] lg:h-[36rem]" src={preview} />
          <div className=" w-full p-4">
            <Button variant="outlined">Outlined</Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

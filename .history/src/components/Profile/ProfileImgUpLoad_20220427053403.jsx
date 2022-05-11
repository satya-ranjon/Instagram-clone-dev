import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { BsCloudUpload } from "react-icons/bs";

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

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };
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
        <div className="sm:w-[36rem] transition-all duration-300 lg:w-[50rem] sm:h-[30rem] lg:h-[40rem]">
          <form className=" absolute top-0 left-0 w-full h-full ">
            <input
              type="file"
              id="aaa"
              className="w-full h-full text-transparent opacity-0"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
          </form>
          <div className=" absolute text-xl text-white text-center w-full my-auto ">
            khokon
          </div>
          {!preview && <img className=" w-full h-full" src={preview} />}
        </div>
      </Dialog>
    </div>
  );
}

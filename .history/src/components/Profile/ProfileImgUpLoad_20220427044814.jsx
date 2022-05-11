import * as React from "react";
import Dialog from "@mui/material/Dialog";

export default function ProfileImgUpLoad({ upimgOpen, setUpimgOpen }) {
  const [fielimg, setFielimg] = React.useState();
  const [selectedFile, setSelectedFile] = React.useState();
  const [preview, setPreview] = React.useState();

  React.useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    // free memory when ever this component is unmounted
    console.log(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };
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
              onChange={(e) => setFielimg(onSelectFile)}
            />
            <img src="" alt="" />
          </form>
        </div>
      </Dialog>
    </div>
  );
}

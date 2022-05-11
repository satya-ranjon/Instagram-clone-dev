import * as React from "react";
import Dialog from "@mui/material/Dialog";

export default function ProfileImgUpLoad({ upimgOpen, setUpimgOpen }) {
  const [fielimg, setFielimg] = React.useState();
  const [selectedFile, setSelectedFile] = React.useState();
  const [preview, setPreview] = React.useState();

  // create a preview as a side effect, whenever selected file is changed
  React.useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    console.log(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

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
            <img src="" alt="" />
          </form>
        </div>
      </Dialog>
    </div>
  );
}

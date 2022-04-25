import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { Avatar } from "@mui/material";

export default function PostDetielsModel() {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      <div className="">
        <Dialog
          open={open}
          maxWidth=" xl"
          onClose={() => setOpen((prv) => !prv)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="w-full transition-all duration-300 sm:w-[36rem]   lg:w-[60rem] xl:w-[75rem] h-[30rem] sm:h-[30rem] lg:h-[50rem] flex justify-between">
            <div className="h-full w-full bg-red-50">
              <img
                className=" h-full w-full"
                src="https://img.freepik.com/free-photo/close-up-happy-redhead-man-face-smiling-with-white-teeth-camera-wearing-glasses-better-sight-t-shirt-standing-pink-background_1258-66709.jpg?w=900&t=st=1650826709~exp=1650827309~hmac=6424eb73e52365828f68a900aea9195547641d6a16569d5c8491b1f11e191f20"
                alt=""
              />
            </div>
            <div className="h-full w-[40rem]">
              <div className=" flex justify-between p-3">
                <div className=" ">
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <p className="text-neutral-600 font-semibold text-md">
                    Anyme Davil
                  </p>
                  <p className=" text-[11px] text-neutral-400 ">
                    i am a csc enginnere
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      </div>

      <button className="" onClick={() => setOpen((prv) => !prv)}>
        open
      </button>
    </>
  );
}

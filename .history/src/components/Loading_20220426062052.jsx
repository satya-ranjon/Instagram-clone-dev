import { Skeleton } from "@mui/material";
import React from "react";

export default function Loading() {
  return (
    <div className=" grid grid-cols-3 gap-3 p-20">
      <div className=" ">
        <Skeleton variant="rectangular" height={300} />
      </div>
      <div className=" ">
        <Skeleton variant="rectangular" height={300} />
      </div>
      <div className=" ">
        <Skeleton variant="rectangular" height={300} />
      </div>
      <div className=" ">
        <Skeleton variant="rectangular" height={300} />
        <div className="flex justify-between mt-3">
          <Skeleton />
          <Skeleton />
        </div>
      </div>
      <div className=" ">
        <Skeleton variant="rectangular" height={300} />
      </div>
      <div className=" ">
        <Skeleton variant="rectangular" height={300} />
      </div>
    </div>
  );
}

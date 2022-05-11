import { Skeleton } from "@mui/material";
import React from "react";

export default function Loading() {
  return (
    <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-20 2xl:px-52 py-10">
      <div className=" space-y-3 my-5 ">
        <Skeleton variant="rectangular" height={300} />
        <div className="flex justify-between ">
          <Skeleton width={80} />
          <Skeleton width={80} />
        </div>
        <Skeleton variant="rectangular" />
      </div>
      <div className=" space-y-3 my-5 ">
        <Skeleton variant="rectangular" height={300} />
        <div className="flex justify-between ">
          <Skeleton width={80} />
          <Skeleton width={80} />
        </div>
        <Skeleton variant="rectangular" />
      </div>
      <div className=" space-y-3 my-5 ">
        <Skeleton variant="rectangular" height={300} />
        <div className="flex justify-between ">
          <Skeleton width={80} />
          <Skeleton width={80} />
        </div>
        <Skeleton variant="rectangular" />
      </div>
      <div className=" space-y-3 my-5 ">
        <Skeleton variant="rectangular" height={300} />
        <div className="flex justify-between ">
          <Skeleton width={80} />
          <Skeleton width={80} />
        </div>
        <Skeleton variant="rectangular" />
      </div>
      <div className=" space-y-3 my-5 ">
        <Skeleton variant="rectangular" height={300} />
        <div className="flex justify-between ">
          <Skeleton width={80} />
          <Skeleton width={80} />
        </div>
        <Skeleton variant="rectangular" />
      </div>
      <div className=" space-y-3 my-5 ">
        <Skeleton variant="rectangular" height={300} />
        <div className="flex justify-between ">
          <Skeleton width={80} />
          <Skeleton width={80} />
        </div>
        <Skeleton variant="rectangular" />
      </div>
    </div>
  );
}

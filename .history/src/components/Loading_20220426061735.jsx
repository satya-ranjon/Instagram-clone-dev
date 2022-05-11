import { Skeleton } from "@mui/material";
import React from "react";

export default function Loading() {
  return (
    <div className=" grid grid-cols-3 gap-3 p-20">
      <div className=" h-96 bg-slate-200">
        <Skeleton variant="rectangular" />
      </div>
      <div className=" h-96 bg-slate-200"></div>
      <div className=" h-96 bg-slate-200"></div>
      <div className=" h-96 bg-slate-200"></div>
      <div className=" h-96 bg-slate-200"></div>
      <div className=" h-96 bg-slate-200"></div>
    </div>
  );
}

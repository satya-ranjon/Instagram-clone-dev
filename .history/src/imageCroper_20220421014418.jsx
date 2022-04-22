import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

export default function imageCroper() {
  return (
    <div>
      <ReactCrop>
        <img
          src="https://as1.ftcdn.net/v2/jpg/02/97/24/38/1000_F_297243815_cdT6BEVggrlFkfHI3qb7OLkcBqRP83Sa.jpg"
          alt=""
        />
      </ReactCrop>
    </div>
  );
}

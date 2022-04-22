import React, { useState } from "react";
import ReactCrop from "react-image-crop";

export default function imageCroper() {
  const [crop, setCrop] = useState < Crop > ();
  return (
    <div>
      <ReactCrop crop={crop} onChange={c => setCrop(c)}>
        <img
          src="https://as1.ftcdn.net/v2/jpg/02/97/24/38/1000_F_297243815_cdT6BEVggrlFkfHI3qb7OLkcBqRP83Sa.jpg"
          alt=""
        />
      </ReactCrop>
    </div>
  );
}

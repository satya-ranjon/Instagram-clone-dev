import { useCallback, useState } from "react";
import Cropper from "react-easy-crop";

export default function ImageCroper() {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  }, []);

  const img =
    "https://images.pexels.com/photos/11741441/pexels-photo-11741441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
  return (
    <div className="">
      <Cropper
        image={img}
        crop={crop}
        zoom={zoom}
        aspect={20 / 15}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
    </div>
  );
}

import { useCallback, useState } from "react";
import Cropper from "react-easy-crop";

export default function ImageCroper() {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  }, []);

  const img =
    "https://images.pexels.com/photos/9811521/pexels-photo-9811521.jpeg?cs=srgb&dl=pexels-cottonbro-9811521.jpg&fm=jpg";
  return (
    <div className="w-20 h-20">
      <Cropper
        image={img}
        crop={crop}
        zoom={zoom}
        aspect={12 / 8}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
    </div>
  );
}

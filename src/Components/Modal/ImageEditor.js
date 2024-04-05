import { useEffect, useRef } from "react";
import Caman from "caman";

const ImageEditor = ({ src }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const image = new Image();
    image.onload = function () {
      const caman = Caman(canvas, image);
      caman.revert(false);
      caman.filterFunction(function () {
        this.removeColor(
          {
            r: 255,
            g: 255,
            b: 255,
          },
          50
        );
      });
      caman.render();
    };
    image.src = src;
  }, [src]);

  return <canvas ref={canvasRef} />;
};

export default ImageEditor;

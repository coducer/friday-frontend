import { useState } from "react";

const BackgroundRemoval = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [processedImage, setProcessedImage] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const removeBackground = () => {
    if (!selectedImage) {
      alert("Please select an image first.");
      return;
    }

    setLoading(true);

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx: any = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        if (data[i] > 200 && data[i + 1] > 200 && data[i + 2] > 200) {
          data[i + 3] = 0;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setProcessedImage(canvas.toDataURL());

      setLoading(false);
    };

    img.src = selectedImage;
  };

  return (
    <div>
      <h1>Background Removal</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={removeBackground}>Remove Background</button>
      {loading && <p>Loading...</p>}
      {selectedImage && <img src={selectedImage} alt="Selected" />}
      {processedImage && <img src={processedImage} alt="Processed" />}
    </div>
  );
};

export default BackgroundRemoval;

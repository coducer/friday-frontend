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

      // Set canvas dimensions to match image dimensions
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the image on the canvas
      ctx.drawImage(img, 0, 0);

      // Get image data from the canvas
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Loop through each pixel in the image
      for (let i = 0; i < data.length; i += 4) {
        // Check if pixel is close to white (adjust threshold as needed)
        if (data[i] > 200 && data[i + 1] > 200 && data[i + 2] > 200) {
          // Make the pixel transparent
          data[i + 3] = 0;
        }
      }

      // Put the modified image data back on the canvas
      ctx.putImageData(imageData, 0, 0);

      // Convert canvas to data URL and set as processed image
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

import { useState } from "react";

function CropingPromptsImages() {
  const [imageSrc, setImageSrc] = useState(null);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      setImageSrc(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {imageSrc && (
        <div>
          <h2>Original Image</h2>
          <img src={imageSrc} alt="Original" width={"182px"} />
          <h2>Cropped Image Parts</h2>
          <div className="image-grid">
            <div
              className="image-part"
              style={{
                backgroundImage: `url(${imageSrc})`,
                backgroundPosition: "0% 0%",
                backgroundSize: "50% 50%",
              }}
            ></div>
            <div
              className="image-part"
              style={{
                backgroundImage: `url(${imageSrc})`,
                backgroundPosition: "50% 0%",
                backgroundSize: "50% 50%",
              }}
            ></div>
            <div
              className="image-part"
              style={{
                backgroundImage: `url(${imageSrc})`,
                backgroundPosition: "0% 50%",
                backgroundSize: "50% 50%",
              }}
            ></div>
            <div
              className="image-part"
              style={{
                backgroundImage: `url(${imageSrc})`,
                backgroundPosition: "50% 50%",
                backgroundSize: "50% 50%",
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CropingPromptsImages;

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
      {/* <div className="picture-divider">
        <div className="picture-section">
          <img
            src={imageSrc || ""}
            alt="First quadrant"
            className="mb-3 ml-2"
          />
        </div>
        <div className="picture-section">
          <img src={imageSrc || ""} alt="Second quadrant" />
        </div>
        <div className="picture-section">
          <img src={imageSrc || ""} alt="Third quadrant" />
        </div>
        <div className="picture-section">
          <img src={imageSrc || ""} alt="Fourth quadrant" />
        </div>
      </div> */}
      {/* <div className="picture-divider">
        <div className="grid-item">
          <img src={imageSrc || ""} alt="First quadrant" width={"90px"} />
        </div>
        <div className="grid-item">
          <img src={imageSrc || ""} alt="Second quadrant" width={"90px"} />
        </div>
        <div className="grid-item">
          <img src={imageSrc || ""} alt="Third quadrant" width={"90px"} />
        </div>
        <div className="grid-item">
          <img src={imageSrc || " "} alt="Fourth quadrant" width={"90px"} />
        </div>
      </div> */}
      <img src={imageSrc || ""} alt="Original" width={"10px"} />

      <PictureDivider imageUrl={imageSrc} rows={2} columns={2} />
      <input type="file" onChange={handleFileChange} />
      {imageSrc && (
        <div>
          <h2>Original Image</h2>
          <img src={imageSrc} alt="Original" width={"92px"} />
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

const PictureDivider = ({ imageUrl, rows, columns }: any) => {
  // Calculate dimensions of each section
  const sectionWidth = 100 / columns;
  const sectionHeight = 100 / rows;

  // Generate CSS styles for each section
  const sectionStyles = {
    width: `${sectionWidth}%`,
    height: `${sectionHeight}%`,
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: `${100 * columns}% ${100 * rows}%`,
  };

  // Generate grid items JSX
  const gridItems = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      gridItems.push(
        <div
          key={`${row}-${col}`}
          className="grid-item"
          style={{
            ...sectionStyles,
            backgroundPosition: `-${col * sectionWidth}% -${
              row * sectionHeight
            }%`,
          }}
        />
      );
    }
  }

  return <div className="picture-divider">{gridItems}</div>;
};

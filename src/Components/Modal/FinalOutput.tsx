import { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";

function FinalOutput() {
  const [imageData, setImageData]: [any, Function] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  useEffect(() => {
    let data = {
      orderId: "",
      final_output: [
        "https://bucket-phot-ai.objectstore.e2enetworks.net/background_generator/output_image/2024-04-24T08:46:36.026Z/8xgfftk_2024-04-24T08:46:36.026Z_output_0.webp",
        "https://bucket-phot-ai.objectstore.e2enetworks.net/background_generator/output_image/2024-04-24T08:46:36.026Z/8xgfftk_2024-04-24T08:46:36.026Z_output_1.webp",
        "https://bucket-phot-ai.objectstore.e2enetworks.net/background_generator/output_image/2024-04-24T08:46:36.026Z/8xgfftk_2024-04-24T08:46:36.026Z_output_2.webp",
        "https://bucket-phot-ai.objectstore.e2enetworks.net/background_generator/output_image/2024-04-24T08:46:36.026Z/8xgfftk_2024-04-24T08:46:36.026Z_output_3.webp",
      ],
    };

    setImageData(data?.final_output);
  }, []);

  const handleImageClick = (imageUrl: any) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div>
        <Row>
          {imageData?.map((el: string, index: number) => {
            return (
              <>
                <Col md={6} key={index} onClick={() => handleImageClick(el)}>
                  <div className="img-veiwer ">
                    <img src={el} alt="imgVeiwer" />
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body>
          <img src={selectedImage} alt="Preview" style={{ maxWidth: "100%" }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FinalOutput;

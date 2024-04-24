import { Button } from "react-bootstrap";
import img2 from "../../assest/00293_00.jpg";

import { useState } from "react";
import { useDashboards } from "../DashboardProvider";
import { useParams } from "react-router-dom";

function Prompts() {
  const context = useDashboards();
  const { orderID } = useParams();
  const [prompts, setPrompts]: [string, Function] = useState("");

  const handleGenerateImage = async () => {
    try {
      let response = await context?.generateImagePrompts(
        { prompt: prompts },
        orderID
      );
      console.log(response, "response");
    } catch (error) {}
  };

  return (
    <div>
      <h6 className=" fw-light">Enter Prompts</h6>
      <textarea onChange={(e) => setPrompts(e?.target?.value)} />
      <div className=" d-flex justify-content-end mt-4">
        <Button className=" btn-primary" onClick={() => handleGenerateImage()}>
          Generate
        </Button>
      </div>
      <div className="sidebar-height ">
        {/* <div className=" border mt-5 pb-3">
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
        </div> */}
        {/* <div className=" mt-5">
          <Row>
            <Col sm={3}>
              <span className="border img-feild">U1</span>
            </Col>
            <Col sm={3}>
              <span className=" border img-feild">U2</span>
            </Col>{" "}
            <Col sm={3}>
              <span className="  border img-feild">U3</span>
            </Col>{" "}
            <Col sm={3}>
              <span className=" border img-feild">U4</span>
            </Col>
          </Row>
        </div> */}
        {/* <div className="my-5 border p-3">
          <Row>
            <Col>
              <div className="imgveiwerdown ">
                <img src={img2} alt="imgVeiwer" />
              </div>
            </Col>
          </Row>
        </div> */}
      </div>

      {/* Modal for image preview */}
      {/* <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body>
          <img src={selectedImage} alt="Preview" style={{ maxWidth: "100%" }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
}

export default Prompts;

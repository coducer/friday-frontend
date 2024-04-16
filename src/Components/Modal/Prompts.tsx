import { Button, Col, Row } from "react-bootstrap";
import img1 from "../../assest/00263_00.jpg";
import img2 from "../../assest/00293_00.jpg";
import img3 from "../../assest/00294_00.jpg";
import img4 from "../../assest/00301_00.jpg";

function Prompts() {
  return (
    <div>
      <h6 className=" fw-light">Enter Prompts</h6>
      <textarea />
      <div className=" d-flex justify-content-end mt-4">
        <Button className=" btn-primary">Generate</Button>
      </div>
      <div className="sidebar-height ">
        <div className=" border mt-5 pb-3">
          <Row>
            <Col md={6}>
              <div className="img-veiwer ">
                <img src={img1} alt="imgVeiwer" />
              </div>
            </Col>
            <Col md={6}>
              {" "}
              <div className="img-veiwer ">
                <img src={img2} alt="imgVeiwer" />
              </div>
            </Col>
            <Col md={6}>
              {" "}
              <div className="img-veiwer ">
                <img src={img3} alt="imgVeiwer" />
              </div>
            </Col>
            <Col md={6}>
              {" "}
              <div className="img-veiwer ">
                <img src={img4} alt="imgVeiwer" />
              </div>
            </Col>
          </Row>
        </div>
        <div className=" mt-5">
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
        </div>
        <div className="my-5 border p-3">
          <Row>
            <Col>
              <div className="imgveiwerdown ">
                <img src={img2} alt="imgVeiwer" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Prompts;

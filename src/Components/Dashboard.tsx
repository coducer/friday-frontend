import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import GenderCategory from "./Category/GenderCategory";
import Category from "./Category/Category";
import Modals from "./Modal/Modals";
import ImageUploader from "./Modal/ImageUploader";
import BackgroundRemoval from "./Modal/BackgroundRemoval";
import { DashboardProvider } from "./DashboardProvider";
import { useState } from "react";

function Dashboard() {
  const [activeModalId, setActiveModalId]: [string, Function] = useState("");

  return (
    <>
      <DashboardProvider>
        <Row className=" h-100">
          <Col md={3} className=" h-100">
            <div className=" border-end h-100 p-4">
              <div className=" pb-3 border-bottom">
                <GenderCategory />
                <Category />
              </div>
              <div className=" pt-4 card-feild pe-2">
                <Modals setActiveModalId={setActiveModalId} />
              </div>
            </div>
          </Col>
          <Col md={9} className=" h-100">
            <ImageUploader activeModalId={activeModalId} />
            {/* <BackgroundRemoval /> */}
          </Col>
        </Row>
      </DashboardProvider>
    </>
  );
}

export default Dashboard;

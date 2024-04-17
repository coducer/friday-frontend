import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import GenderCategory from "./Category/GenderCategory";
import Category from "./Category/Category";
import Modals from "./Modal/Modals";
import ImageUploader from "./Modal/ImageUploader";
import { DashboardProvider, useDashboards } from "./DashboardProvider";
import { useState } from "react";
import Header from "./Header";
import Prompts from "./Modal/Prompts";

function Dashboard() {
  return (
    <>
      <DashboardProvider>
        <Header />
        <DashboardSection />
      </DashboardProvider>
    </>
  );
}

export default Dashboard;

const DashboardSection = () => {
  const context = useDashboards();
  const [activeModalId, setActiveModalId]: [string, Function] = useState("");
  const [selectedModalId, setSelectedModalId] = useState("");

  return (
    <>
      <Row className=" h-100">
        <Col md={3} className=" h-100">
          <div className=" border-end h-100 p-4">
            {context?.activeScection === "0" && (
              <>
                <div className=" pb-3 border-bottom">
                  <GenderCategory />
                  <Category />
                </div>
                <div className=" pt-4 card-feild pe-2">
                  <Modals
                    setActiveModalId={setActiveModalId}
                    setSelectedModalId={setSelectedModalId}
                    selectedModalId={selectedModalId}
                  />
                </div>
              </>
            )}

            {context?.activeScection === "1" && <Prompts />}
          </div>
        </Col>
        {
          <>
            <Col md={9} className=" h-100">
              <ImageUploader
                activeModalId={activeModalId}
                selectedModalId={selectedModalId}
              />

              {/* <div>
                <div className=" d-flex">
                  <div className="spannnn"></div>
                  <div className="spannnn"></div>
                </div>
                <div className=" d-flex">
                  <div className="spannnn"></div>{" "}
                  <div className="spannnn"></div>
                </div>
              </div> */}
              {/* <div className="image-container">
                <div className="image-part"></div>
                <div className="image-part"></div>
                <div className="image-part"></div>
                <div className="image-part"></div>
              </div> */}
            </Col>
          </>
        }
      </Row>
    </>
  );
};

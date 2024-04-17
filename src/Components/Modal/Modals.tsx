import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDashboards } from "../DashboardProvider";
import { IModalResponse } from "../../interfaces/response/IModalResponse";

function Modals({
  setActiveModalId,
  setSelectedModalId,
  selectedModalId,
}: {
  setActiveModalId: Function;
  setSelectedModalId: Function;
  selectedModalId: string;
}) {
  const context = useDashboards();

  const [modals, setModals] = useState([]);

  const getModalDetails = async () => {
    try {
      let response = await context?.handleModals();
      if (response?.status) {
        setModals(response?.response);
      }
    } catch (error) {
      console.error("Error fetching modals:", error);
    }
  };

  useEffect(() => {
    getModalDetails();
  }, []);

  const handleModalClick = (id: string, detail: {}) => {
    setActiveModalId((prevId: any) => (prevId === id ? "" : detail));
    setSelectedModalId((prevId: any) => (prevId === id ? "" : id));
  };

  return (
    <>
      <Row>
        {modals?.map((modal: IModalResponse) => (
          <Col
            lg={6}
            key={modal?.id}
            onClick={() => {
              handleModalClick(modal?.id, modal);
            }}
            className="mb-3"
          >
            <div
              className={`side-bar-card ${
                selectedModalId === modal?.id ? "active" : ""
              }`}
            >
              <img src={modal?.url} height="80px" width="100%" alt="Modal" />
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Modals;

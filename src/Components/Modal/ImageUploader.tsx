import { useEffect, useRef, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useDashboards } from "../DashboardProvider";
import { Button } from "react-bootstrap";
import { MdRestore } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

const ImageUploader = ({
  activeModalId,
  selectedModalId,
}: {
  activeModalId: any;
  selectedModalId: string;
}) => {
  const context = useDashboards();
  const [imageUrl, setImageUrl] = useState("");
  const [loader, setLoader]: [boolean, Function] = useState(false);
  const fileInputRef = useRef(null);
  const [orderId, setOrderId]: [string, Function] = useState("");
  const [orderTryonUrl, setOrderTryonUrl]: [string, Function] = useState("");
  const [intervalId, setIntervalId]: [any, Function] = useState(null);
  const [tryonUrlActivate, setTryonUrlActivate]: [boolean, Function] =
    useState(false);

  const handleImageUpload = async (event: any) => {
    const formData = new FormData();
    formData.set("file", event.target.files[0]);
    formData.set("model", activeModalId?.id);
    formData.set("category", "female");
    formData.set("sub_category", "top");

    try {
      let response = await context?.uploadGarments(formData);

      if (response?.data?.status) {
        setOrderId(response?.data?.data?.id);
        handleGetOrders(response?.data?.data?.id);
      }
    } catch (error) {}
  };

  const handleGetOrders = async (id: string) => {
    setLoader(true);

    try {
      let response = await context?.getOrders(id);

      if (response?.order?.garment_url) {
        setImageUrl(response?.order?.garment_url);
        setLoader(false);
        setTryonUrlActivate(true);
      }
    } catch (error) {}
  };

  function getOrdersInterval(id: string) {
    return function () {
      handleTryonUrl(id);
    };
  }

  const handleTryonUrl = async (id: any) => {
    setLoader(true);
    try {
      let response = await context?.getOrders(id);
      if (response?.order) {
        if (response?.order?.tryon_url !== null) {
          setLoader(false);
          clearInterval(intervalId);
        }
        setImageUrl(response?.order?.tryon_url);
        setTryonUrlActivate(false);
        setOrderTryonUrl(response?.order?.tryon_url);
      }
    } catch (error) {}
  };
  useEffect(() => {
    if (orderTryonUrl === null || orderTryonUrl === " ") {
      const id: any = setInterval(getOrdersInterval(orderId), 5000);
      setIntervalId(id);
      return () => {
        clearTimeout(id);
      };
    }
  }, [orderTryonUrl]);

  useEffect(() => {}, []);

  console.log(loader, "loaderloader", orderTryonUrl);

  return (
    <div className=" h-100 p-4 d-flex justify-content-center align-items-center flex-column">
      <div className=" upload-card d-flex justify-content-center align-items-center">
        <div className=" ">
          {!imageUrl && (
            <>
              {!loader && (
                <>
                  <h6 className=" text-center">
                    <AiOutlineCloudUpload size={40} color="var(--iconColor)" />
                  </h6>

                  <div className=" fw-semibold btn btn-primary  overflow-hidden position-relative">
                    <Button disabled={selectedModalId ? false : true}>
                      Upload File
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        ref={fileInputRef}
                        className="image_uploaded"
                      />
                    </Button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
        {loader ? (
          <div className="loader"></div>
        ) : (
          <>
            {imageUrl && (
              <div className="w-100 h-100">
                <img src={imageUrl} alt="Uploaded" width="100%" height="100%" />
              </div>
            )}
          </>
        )}
      </div>
      {imageUrl && (
        <>
          <div className=" d-flex mt-3">
            {tryonUrlActivate ? (
              <>
                <Button
                  variant="outline-success"
                  disabled={loader}
                  onClick={() => {
                    handleTryonUrl(orderId);
                  }}
                >
                  Submit
                  <span className=" ms-2">
                    <FaArrowRightLong size={20} />
                  </span>
                </Button>
              </>
            ) : (
              <>
                <Button
                  className=" me-3"
                  variant="outline-danger"
                  onClick={() => setImageUrl("")}
                >
                  <span className=" me-2">
                    <MdRestore size={20} />
                  </span>
                  Restore
                </Button>
                <Button
                  variant="outline-success"
                  disabled={loader}
                  onClick={() => context?.setActiveSection("1")}
                >
                  Go to next
                  <span className=" ms-2">
                    <FaArrowRightLong size={20} />
                  </span>
                </Button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageUploader;

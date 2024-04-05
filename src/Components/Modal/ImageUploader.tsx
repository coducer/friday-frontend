import { useEffect, useRef, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useDashboards } from "../DashboardProvider";
import { Button } from "react-bootstrap";
import { MdRestore } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

const ImageUploader = ({ activeModalId }: { activeModalId: any }) => {
  const context = useDashboards();
  const [imageUrl, setImageUrl] = useState("");
  const fileInputRef = useRef(null);
  const [orderId, setOrderId]: [string, Function] = useState("");
  const [orderStatus, setOrderStatus]: [string, Function] = useState("");

  const handleImageUpload = async (event: any) => {
    const formData = new FormData();
    formData.set("file", event.target.files[0]);
    formData.set("model", activeModalId?.id);
    formData.set("category", "female");
    formData.set("sub_category", "top");

    try {
      let response = await context?.uploadGarments(formData);
      console.log(response?.data?.id, response, "adsagdjsagdjh");

      if (response?.status) {
        setOrderId(response?.data?.data?.id);
        handleGetOrders(response?.data?.data?.id);
      }
    } catch (error) {}
  };

  const handleGetOrders = async (id: string) => {
    try {
      let response = await context?.getOrders(id);
      if (response?.order) {
        setOrderStatus(response?.order?.status);
        setImageUrl(response?.order?.garment_url);
      }
      console.log(response?.order?.garment_url, "dsjadgasgdasj");
    } catch (error) {}
  };

  console.log(imageUrl, "imageUrlimageUrlimageUrl");

  // function getOrdersInterval(id: string) {
  //   return function () {
  //     handleGetOrders(id);
  //   };
  // }

  // useEffect(() => {
  //   if (orderStatus === "inprogress") {
  //     setInterval(getOrdersInterval(orderId), 5000);
  //   }
  // }, [orderStatus]);
  return (
    <div className=" h-100 p-4 d-flex justify-content-center align-items-center flex-column">
      <div className=" upload-card d-flex justify-content-center align-items-center">
        <div className=" ">
          {!imageUrl && (
            <>
              <h6 className=" text-center">
                <AiOutlineCloudUpload size={40} color="var(--iconColor)" />
              </h6>
              <div className=" fw-semibold btn btn-primary  overflow-hidden position-relative">
                Upload File
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  ref={fileInputRef}
                  className="image_uploaded"
                />
              </div>
            </>
          )}
        </div>
        {imageUrl && (
          <div className="w-100 h-100">
            <img src={imageUrl} alt="Uploaded" width="100%" height="100%" />
          </div>
        )}
      </div>
      <div className=" d-flex mt-3">
        <Button className=" me-3" variant="outline-danger">
          <span className=" me-2">
            <MdRestore size={20} />
          </span>
          Restore
        </Button>
        <Button variant="outline-success">
          Go to next
          <span className=" ms-2">
            <FaArrowRightLong size={20} />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default ImageUploader;

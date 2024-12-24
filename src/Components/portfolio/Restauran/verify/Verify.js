import { useNavigate, useSearchParams } from "react-router-dom";
import v from "./verify.module.css";
import { useContext, useEffect } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
export const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();
  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    });
    if (response.data.success) {
      navigate("/restaurant/myorders");
    } else {
      navigate("/restaurant");
    }
  };
  useEffect(() => {
    verifyPayment();
  }, []);
  return (
    <div className={v.verify}>
      <div className={v.spinner}></div>
    </div>
  );
};

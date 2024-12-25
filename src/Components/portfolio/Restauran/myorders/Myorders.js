import axios from "axios";
import m from "./myorders.module.css";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { Close } from "@mui/icons-material";
import { toast } from "react-toastify";

const Myorders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setDate] = useState([]);
  const fetchOrders = async () => {
    const respones = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setDate(respones.data.data);
  };
  const handleDelete = async (deleteId) => {
    const response = await axios.post(`${url}/api/order/remove`, {
      id: deleteId,
    });

    await fetchOrders();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };
  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className={m.my_orders}>
      <h2>My Order</h2>
      <br />
      <div className={m.container}>
        {data.map((order, index) => {
          return (
            <div className={m.my_orders_order} key={index}>
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + " ,";
                  }
                })}
              </p>
              <p>${order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p>
                {" "}
                <span>&#x25cf;</span> <b>{order.status}</b>{" "}
              </p>
              <button className={m.track} onClick={fetchOrders}>
                Track Order
              </button>
              <button
                className={m.close}
                onClick={() => handleDelete(order._id)}
              >
                <Close style={{ fontSize: "14px", color: "white" }} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Myorders;

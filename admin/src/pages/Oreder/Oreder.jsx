import o from "./order.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const Oreder = () => {
  const url = "http://localhost:4000";
  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value,
    });
    if (response.data.success) {
      await fetchAllOrders();
    }
  };
  useEffect(() => {
    fetchAllOrders();
  }, []);
  return (
    <div className={`${o.order} ${o.add}`}>
      <h3>Order Page</h3>

      <div className={o.order_list}>
        {orders.map((order, index) => (
          <div key={index}>
            <div className={o.order_item}>
              <div>
                <p className={o.order_item_food}>
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + " x " + item.quantity;
                    } else {
                      return item.name + " x " + item.quantity + " , ";
                    }
                  })}
                </p>
                <p className={o.order_item_name}>
                  {order.address.firstName + " " + order.address.lastName}
                </p>
                <div className={o.order_item_address}>
                  <p>{order.address.street}</p>

                  <p>
                    {order.address.city +
                      " " +
                      order.address.state +
                      " " +
                      order.address.zipcode}
                  </p>
                  <p className={o.order_item_phone}>{order.address.phone}</p>
                </div>
              </div>
              <p>Items: {order.items.length}</p>
              <p>${order.amount}.00</p>
              <select
                onChange={(event) => statusHandler(event, order._id)}
                value={order.status}
              >
                <option value="Food Processing">Food Processing</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Oreder;

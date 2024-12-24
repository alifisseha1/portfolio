import { useContext } from "react";
import order from "./orders.module.css";
import { ShopContext } from "../../context/ShopContext";
import Title from "../../components/Title/Title";
import { color } from "framer-motion";
import { toast } from "react-toastify";
function OrdersE() {
  const { product, currency, cartOrder, setCartItems, navigate } =
    useContext(ShopContext);

  return (
    <div className={order.container}>
      <div>
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {cartOrder.map((items, index) => {
          let prod = product.find((item) => item._id === items._id);

          return (
            <div key={index} className={order.box}>
              <div className={order.imagesP}>
                <div>
                  <img
                    src={prod.image[0]}
                    alt=""
                    width={"50px"}
                    height={"50px"}
                  />
                </div>
                <div>
                  <p style={{ color: "black" }}>{prod.name}</p>
                  <div className={order.text}>
                    <p>
                      {currency}
                      {prod.price}
                    </p>
                    <p>
                      Quantity:
                      {items.quantity}
                    </p>
                    <p>Size: {items.size}</p>
                  </div>
                  <p className={order.dates}>
                    Date: <span>12/17/2024</span>{" "}
                  </p>
                </div>
              </div>

              <div>
                <p></p>
                <p>Ready to ship</p>
              </div>
              <div>
                <button
                  onClick={() => {
                    toast.success("Already Shipped Out");
                    navigate("/ecommerce");
                    setCartItems({});
                  }}
                  className={order.button}
                >
                  Track Order
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OrdersE;

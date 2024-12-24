import { useContext } from "react";
import sc from "./cartres.module.css";
import { StoreContext } from "../context/StoreContext";
import { Close } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
const CartRes = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
    getTotalCart,
    url,
  } = useContext(StoreContext);

  return (
    <div className={sc.cart}>
      <div className={sc.cart_items}>
        <div className={sc.cart_items_title}>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, i) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={i}>
                <div className={`${sc.cart_items_title} ${sc.cart_items_item}`}>
                  <img src={url + "/images/" + item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    className={sc.close}
                    onClick={() => removeFromCart(item._id)}
                  >
                    {" "}
                    <Close style={{ fontSize: "17px" }} />{" "}
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className={sc.cart_bottom}>
        <div className={sc.cart_total}>
          <h2>Cart Totals</h2>
          <div>
            <div className={sc.cart_total_details}>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className={sc.cart_total_details}>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 5}</p>
            </div>
            <hr />
            <div className={sc.cart_total_details}>
              <p>Total</p>
              <p>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}
              </p>
            </div>
          </div>
          {/* <Link to="/restaurant/placeOrder">
            <button>proceed to checkout</button>
          </Link> */}
          <button onClick={() => navigate("/restaurant/placeOrder")}>
            proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartRes;

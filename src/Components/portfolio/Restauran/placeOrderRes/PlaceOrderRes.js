import { useContext, useState, useEffect } from "react";
import s from "./placeorderres.module.css";
import axios from "axios";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
export default function PlaceOrderRes() {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderDate = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 5,
    };
    let respones = await axios.post(url + "/api/order/place", orderDate, {
      headers: { token },
    });

    if (respones.data.success) {
      const { session_url } = respones.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/restaurant/cart");
    } else if (getTotalCartAmount() === 0) {
      navigate("/restaurant/cart");
    }
  }, [token]);
  return (
    <div className={s.d}>
      <form className={s.place_order} onSubmit={placeOrder}>
        <div className={s.place_order_left}>
          <p className={s.title}>Delivery Information</p>
          <div className={s.multi_filds}>
            <input
              required
              onChange={onChangeHandler}
              value={data.firstName}
              name="firstName"
              type="text"
              placeholder="First name"
            />
            <input
              required
              name="lastName"
              onChange={onChangeHandler}
              value={data.lastName}
              type="text"
              placeholder="Last name"
            />
          </div>
          <input
            required
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Email address"
          />
          <input
            required
            name="street"
            onChange={onChangeHandler}
            value={data.street}
            type="text"
            placeholder="Street"
          />
          <div className={s.multi_filds}>
            <input
              required
              name="city"
              onChange={onChangeHandler}
              value={data.city}
              type="text"
              placeholder="City"
            />
            <input
              required
              name="state"
              onChange={onChangeHandler}
              value={data.state}
              type="text"
              placeholder="State"
            />
          </div>
          <div className={s.multi_filds}>
            <input
              required
              name="zipcode"
              onChange={onChangeHandler}
              value={data.zipcode}
              type="text"
              placeholder="Zip code"
            />
            <input
              required
              name="country"
              onChange={onChangeHandler}
              value={data.country}
              type="text"
              placeholder="Country"
            />
          </div>
          <input
            required
            name="phone"
            onChange={onChangeHandler}
            value={data.phone}
            type="text"
            placeholder="Phone"
          />
        </div>
        <div className={s.place_order_right}>
          <div className={s.place_oreder_right_list}>
            <div className={`${s.cart_total} ${s.cart_place_order}`}>
              <h2>Cart Totals</h2>
              <div>
                <div className={s.cart_total_details}>
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className={s.cart_total_details}>
                  <p>Delivery Fee</p>
                  <p>${getTotalCartAmount() === 0 ? 0 : 5}</p>
                </div>
                <hr />
                <div className={s.cart_total_details}>
                  <p>Total</p>
                  <p>
                    ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}
                  </p>
                </div>
              </div>
              {/* <Link to="/restaurant/placeOrder">
            <button>proceed to checkout</button>
          </Link> */}
              <button type="submit">proceed to payment</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

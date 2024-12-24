import { useContext } from "react";
import ct from "./cartTotal.module.css";
import { ShopContext } from "../../context/ShopContext";
import Title from "../Title/Title";
function CartTotal() {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className={ct.wraper}>
      <div>
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>
      <div>
        <div>
          <div className={ct.total}>
            <p>Subtotal</p>
            <p>
              {currency} {getCartAmount()}.00
            </p>
          </div>
          <hr />
          <div className={ct.total}>
            <p>Shiping Fee</p>
            <p>
              {currency} {delivery_fee}.00
            </p>
          </div>
          <hr />
          <div className={ct.total}>
            <b>Total</b>
            <b>
              {currency}{" "}
              {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;

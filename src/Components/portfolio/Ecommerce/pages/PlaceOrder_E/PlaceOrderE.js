import { useContext, useState } from "react";
import CartTotal from "../../components/CartTotal/CartTotal";
import Title from "../../components/Title/Title";
import po from "./placeOrder.module.css";
import { ShopContext } from "../../context/ShopContext";

function PlaceOrderE() {
  const [active, setActive] = useState("cash");
  const { navigate } = useContext(ShopContext);
  return (
    <div className={po.wraper}>
      <div className={po.leftSide}>
        <div>
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className={po.nameList}>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className={po.emailList}>
          <input type="text" placeholder="Street" />
          <div className={po.nameList}>
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <div className={po.nameList}>
            <input type="number" placeholder="Zipcode" />
            <input type="text" placeholder="Phone Number" />
          </div>
          <div className={po.nameList}>
            <input type="email" placeholder="Email" />
          </div>
        </div>
      </div>
      <div className={po.rightSide}>
        <div className={po.cartTotal}>
          <CartTotal />
        </div>
        <div>
          <div className={po.method}>
            <span style={{ color: "gray" }}>PAYMENT</span>
            <span className={po.meth}>METHOD</span>
          </div>
          <div className={po.paymentMethode}>
            <div className={po.payment} onClick={() => setActive("dot")}>
              <span
                className={`${po.active} ${active == "dot" ? po.bg : ""}`}
              ></span>
              <h4 style={{ color: "blue" }}>Stripe</h4>
            </div>
            <div className={po.payment} onClick={() => setActive("pal")}>
              <span
                className={`${po.active} ${active == "pal" ? po.bg : ""}`}
              ></span>
              <h4>
                <span style={{ color: "darkblue" }}>Pay</span>
                <span style={{ color: "skyblue" }}>Pal</span>{" "}
              </h4>
            </div>
            <div onClick={() => setActive("cash")} className={po.payment}>
              <span
                className={`${po.active} ${active == "cash" ? po.bg : ""}`}
              ></span>
              <h4 style={{ color: "darkgreen" }}>CASH</h4>
            </div>
          </div>
        </div>
        <div className={po.placeOrder}>
          <button onClick={() => navigate("/ecommerce/orderE")}>
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrderE;

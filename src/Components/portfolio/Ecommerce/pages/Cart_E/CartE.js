import { useContext, useEffect, useState } from "react";
import cart from "./cart.module.css";
import { ShopContext } from "../../context/ShopContext";
import Title from "../../components/Title/Title";
import { DeleteOutline } from "@mui/icons-material";
import CartTotal from "../../components/CartTotal/CartTotal";
import { Link } from "react-router-dom";

function CartE() {
  const { product, currency, cartItems, updateQuantity, setCartOrder } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);
  useEffect(() => {
    setCartOrder(cartData);
  }, [cartData]);

  return (
    <div className={cart.wraper}>
      <div>
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        <hr className={cart.hr} />
        {cartData.map((item, index) => {
          const productData = product.find((p) => p._id === item._id);
          return (
            <div key={index} className={cart.cartList}>
              <div>
                <img
                  src={productData.image[0]}
                  alt=""
                  width={"50px"}
                  height={"50px"}
                />
              </div>
              <div className={cart.nameList}>
                <p>{productData.name}</p>
                <div>
                  <span style={{ fontWeight: "700" }}>
                    {currency}
                    {productData.price}
                  </span>
                  <span className={cart.size}>{item.size}</span>
                </div>
              </div>

              <div className={cart.input}>
                <input
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === 0
                      ? null
                      : updateQuantity(
                          item._id,
                          item.size,
                          Number(e.target.value)
                        )
                  }
                  type="number"
                  min={1}
                  value={item.quantity}
                />
              </div>
              <div
                className={cart.delete}
                onClick={() => {
                  return updateQuantity(item._id, item.size, 0);
                }}
              >
                <DeleteOutline />
              </div>
            </div>
          );
        })}
      </div>
      <div className={cart.total}>
        <div className={cart.box}>
          <CartTotal />
          <div className={cart.buttonP}>
            <Link to={"/ecommerce/placeOrderE"}>
              <button>PROCEED TO CHECKOUT</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartE;

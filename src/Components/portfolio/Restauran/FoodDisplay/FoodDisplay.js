import { useContext, useState } from "react";
import s from "./foodDisplay.module.css";
import { StoreContext } from "../context/StoreContext";
import { Close } from "@mui/icons-material";
import { ShoppingBasket } from "@mui/icons-material";
function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);

  return (
    <div className={s.food_display} id={s.food_display}>
      <h2>Top Dishes</h2>
      <br />
      <div className={s.food_display_list}>
        {food_list.map((item, i) => {
          if (category === "ALL" || category === item.category) {
            return (
              <FoodItem
                key={i}
                id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;

function FoodItem({ id, name, price, description, image }) {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);
  const [show, setShow] = useState(false);
  function HandleShow() {
    setShow(!show);
  }

  return (
    <div>
      {show && (
        <div className={s.food_description}>
          <div className={s.food_description_box}>
            <div className={s.img}>
              <img
                src={url + "/images/" + image}
                alt=""
                width={"150px"}
                height={"100px"}
              />
              <p className={s.img_text}>{name}</p>
              <p className={s.img_price}>${price}</p>
            </div>

            <div className={s.food_description_des}>
              <p>{description}</p>
            </div>
            <button onClick={HandleShow} className={s.food_description_but}>
              <Close />
            </button>
          </div>
          <div className={s.food_add}>
            <span
              className={s.add_left}
              onClick={() => {
                if (!cartItems[id]) {
                  return;
                }
                return removeFromCart(id);
              }}
            >
              -
            </span>
            <div className={s.add_count_box}>
              <span className={s.add_count}>{cartItems[id]}</span>
              <ShoppingBasket />
            </div>
            <span className={s.add_right} onClick={() => addToCart(id)}>
              +
            </span>
          </div>
        </div>
      )}
      <div className={s.food_item} onClick={HandleShow}>
        <div className={s.food_item_img_container}>
          <img
            src={url + "/images/" + image}
            alt="name"
            className={s.food_item_image}
          />
        </div>
        <div className={s.food_item_info}>
          <div className={s.food_item_name_rating}>
            <p className={s.food_item_name}>{name}</p>
          </div>
          {/* <p className={s.food_item_description}>{description}</p> */}
          <p className={s.food_item_price}>${price}</p>
          {cartItems[id] > 0 && (
            <div className={s.food_basket}>
              <ShoppingBasket />
              <span>{cartItems[id]}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

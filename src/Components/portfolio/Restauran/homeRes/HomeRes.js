import s from "./homeres.module.css";
import { menu_list } from "../../../../assets/RestaurantPicture/assets";
import { useState } from "react";
import FoodDisplay from "../FoodDisplay/FoodDisplay";
const HomeRes = () => {
  const [category, setCategory] = useState("ALL");

  return (
    <div className={s.home} id="menu">
      <div className={s.menu} id={s.menu}>
        <br />
        <button className={s.button} onClick={() => setCategory("ALL")}>
          {" "}
          Explore our menu
        </button>

        <div className={s.menuList}>
          {menu_list.map((img, i) => (
            <div
              className={`${s.menuListItem} ${
                category === img.menu_name ? s.active : ""
              }`}
              key={i}
              onClick={() =>
                setCategory((prev) =>
                  prev === img.menu_name ? "ALL" : img.menu_name
                )
              }
            >
              <img src={img.menu_image} alt={img.menu_name} />
              <p>{img.menu_name}</p>
            </div>
          ))}
        </div>
        <br />
        <br />
        <hr />
      </div>

      <FoodDisplay category={category} />
    </div>
  );
};

export default HomeRes;

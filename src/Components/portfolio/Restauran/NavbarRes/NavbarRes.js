import s from "./navbarres.module.css";
import {
  Home,
  Logout,
  Person,
  ShoppingBag,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import { ShoppingBasket } from "@mui/icons-material";

import { food } from "../../../../assets/RestaurantPicture/assets.js";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext.js";
const NavbarRes = ({ setShowLogin }) => {
  const [menus, setMenu] = useState("home");
  const { getTotalCart, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/restaurant");
  };

  return (
    <div className={s.navbar}>
      <div>
        <img src={food.logo} alt="logo" className={s.logo} />
      </div>
      <ul className={s.navbar_menu}>
        <li>
          {" "}
          <Link to="/restaurant" onClick={() => setMenu("home")}>
            Home
          </Link>
        </li>
        <li>
          {" "}
          <a href="#menu" onClick={() => setMenu("menu")}>
            Menu
          </a>
        </li>
        <li>
          {" "}
          <a href="#contact" onClick={() => setMenu("contact")}>
            Contact
          </a>
        </li>
      </ul>
      <div className={s.navbar_right}>
        <Search />

        <div className={s.navbar_search}>
          <Link to="cart">
            <ShoppingBasket />
          </Link>
          <div className={getTotalCart() === 0 ? `${s.hide}` : `${s.dot}`}>
            {" "}
            {getTotalCart()}{" "}
          </div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className={s.navbar_profile}>
            <Person />
            <ul className={s.nav_profile_dropdown}>
              <li
                className={s.nav_order}
                onClick={() => navigate("/restaurant/myorders")}
              >
                <ShoppingBagOutlined style={{ fontSize: "20px" }} />
                <p>Order</p>
              </li>
              <hr />
              <li className={s.nav_logout} onClick={logout}>
                <Logout style={{ fontSize: "20px" }} />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarRes;

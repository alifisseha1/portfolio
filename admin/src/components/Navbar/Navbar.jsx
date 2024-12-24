import nav from "./navbar.module.css";
import { food } from "../../assets/assets";
import { useState } from "react";

const Navbar = () => {
  return (
    <div className={nav.navbar}>
      <div className={nav.navLogo}>
        <img src={food.logo} alt="logo" className={nav.logo} />
        <span>Admin Panel</span>
      </div>
    </div>
  );
};

export default Navbar;

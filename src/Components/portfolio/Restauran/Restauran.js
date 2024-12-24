import { Link, Outlet } from "react-router-dom";
import s from "./restaurant.module.css";
import { ArrowBack } from "@mui/icons-material";
import NavbarRes from "./NavbarRes/NavbarRes";

import Footer from "./Footer/Footer";
import { useEffect, useState } from "react";
import LoginPopup from "./LoginPopup/LoginPopup";
import StoreContextProvider from "./context/StoreContext";

const Restauran = () => {
  const [showLogin, setShowLogin] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <StoreContextProvider>
      <div className={s.container}>
        {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
        <div className={s.mainNav}>
          <div className={s.home}>
            <Link to={"/"}>
              <ArrowBack />
            </Link>
          </div>
          <div>
            <NavbarRes setShowLogin={setShowLogin} />
          </div>
        </div>
        <div className={s.header}>
          <div className={s.header_text}>
            <h1>Ethiopian cuisine</h1>
            <h3>Oreder your favourite food</h3>
            <Link to="/restaurant">View Menu</Link>
          </div>
        </div>
        <div className={s.allChildern}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </StoreContextProvider>
  );
};

export default Restauran;

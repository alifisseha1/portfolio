import { Outlet } from "react-router-dom";
import NavbarE from "./components/NavbarE/NavbarE";
import e from "./ecommerce.module.css";

import ShopContextProvider from "./context/ShopContext";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
function Ecommerce() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <ShopContextProvider>
      <div className={e.a}>
        <ToastContainer />
        <div>
          <NavbarE />
          <SearchBar />
        </div>
        <div>
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </ShopContextProvider>
  );
}

export default Ecommerce;

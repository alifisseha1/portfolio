import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import home from "./homePage.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const HomePage = () => {
  return (
    <div className={home.container}>
      <div className={home.nav}>
        <ToastContainer />
        <Navbar />
        <hr />
      </div>

      <div className={home.side}>
        <Sidebar />
      </div>
      <div className={home.children}>
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;

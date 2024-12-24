import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import h from "./header.module.css";
import Login from "../Login/Login";
const Header = () => {
  const [showLog, setShowLog] = useState(false);
  return (
    <div className={h.header} id="home">
      {showLog && <Login setShowLog={setShowLog} />}
      <Navbar setShowLog={setShowLog} />
      <div className={h.text}>
        <h1>Explore your dreams home</h1>
        <br />
        <br />
        <div className={h.list}>
          <a href="#projects" className={h.project}>
            Projects
          </a>
          <a href="#contact" className={h.contact}>
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

import n from "./navbar.module.css";
import { assets } from "../../assets/assets";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Navbar = ({ setShowLog }) => {
  return (
    <div>
      <div className={n.navbar}>
        <div className={n.logoImage}>
          <div style={{ textAlign: "center", cursor: "pointer" }}>
            <Link to={"/"}>
              <ArrowBack />
            </Link>
          </div>
          <img src={assets.logo} alt="" />
        </div>
        <ul>
          <a href="#home" className={n.cursor}>
            Home
          </a>
          <a href="#about" className={n.cursor}>
            About
          </a>
          <a href="#projects" className={n.cursor}>
            Projects
          </a>
          <a href="#testimonails" className={n.cursor}>
            Testimonials
          </a>
        </ul>
        <button onClick={() => setShowLog(true)}>Sing up</button>
      </div>
    </div>
  );
};

export default Navbar;

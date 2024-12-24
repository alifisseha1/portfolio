import sf from "./footer.module.css";
import logo from "../../../../assets/RestaurantPicture/logo.png";
import { Facebook, Height, LinkedIn, Twitter } from "@mui/icons-material";
function Footer() {
  return (
    <div className={sf.footer} id="contact">
      <div className={sf.footer_content}>
        <div className={sf.footer_content_left}>
          <img src={logo} alt="Logo" width={"100px"} height={"50px"} />
          <div className={sf.footer_social_icons}>
            <Facebook />
            <Twitter />
            <LinkedIn />
          </div>
        </div>
        <div className={sf.footer_content_center}>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className={sf.footer_content_right}>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>813-995-1524</li>
            <li>amanda@yahoo.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className={sf.footer_copyright}>
        Copyright 2024 <span>&copy;</span> Habesha.com - All Right Reserved.
      </p>
    </div>
  );
}

export default Footer;

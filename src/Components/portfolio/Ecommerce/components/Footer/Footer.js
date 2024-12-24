import footer from "./footer.module.css";
import log from "../../assets/logo.png";
function Footer() {
  return (
    <div className={footer.container}>
      <div className={footer.box}>
        <div className={footer.imgs}>
          <img src={log} alt="" />
          <p>All merchandise is representative of the </p>
          <p>merchandise carried in our stores</p>
        </div>
        <div>
          <p>OUR COMPANY</p>
          <ul className={footer.ul}>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
          </ul>
        </div>
        <div>
          <p>PRIVACY & TERMS</p>
          <ul className={footer.ul}>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </div>
      <div className={footer.allRight}>
        <hr />
        <br />
        <p>2024 All right reserved</p>
      </div>
    </div>
  );
}

export default Footer;

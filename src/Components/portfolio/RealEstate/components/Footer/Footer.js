import f from "./footer.module.css";
import log from "../../assets/logo.jpg";
import { useState } from "react";
function Footer() {
  const [email, setEmail] = useState("");
  console.log(email);

  return (
    <div>
      <div className={f.container}>
        <div>
          <img src={log} alt="" width="40px" />
          <br />
          <br />
          <p className={f.lorem}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
            veniam aperiam, assumenda dolor
          </p>
        </div>
        <div className={f.ancer}>
          <h2>Company</h2>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <h2>Subscribe to our newsletter</h2>
          <br />
          <p className={f.lorem}>The latest news, articles, and resources</p>

          <br />
          <div className={f.email}>
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={() => setEmail("")}>Subscribe</button>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <p>
          Copyright 2024 <span>&copy;</span> Fisseha. All Right Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;

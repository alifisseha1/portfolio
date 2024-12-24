import Title from "../../components/Title/Title";
import a from "./about.module.css";
import logo from "../../assets/women_logo.jpg";
import { useContext } from "react";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

function AboutE() {
  return (
    <div className={a.wraper}>
      <div style={{ textAlign: "center" }}>
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className={a.aboutList}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <p>
            E-Commerce was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. our journey began with a
            simple idea to provide a platform where customers can easily
            discover , explore, and purchase a wide range of products from the
            confort of thir homes
          </p>
          <br />
          <p>
            Since our inception we have worded tirelessly to curate a diverse
            selection of high-qulity products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials. we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <br />
          <b style={{ color: "black" }}>Our Mission</b>
          <br />

          <p>
            Our mission at E-Commerce is the empower customer with choice,
            convenience, and confidence. we are dedicated to providing a
            seamless shopping experience that exceeds expectations.
          </p>
        </div>
      </div>
      <div className={a.choose}>
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className={a.box}>
        <div>
          <b>Quality Assurances</b>
          <br />
          <p>
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div>
          <b>Convenience</b>
          <br />
          <p>
            With our user friendly interface and hassle free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div>
          <b>Exceptional Customer Service</b>
          <br />
          <p>
            Our team of dedicated professinals is here to assist you the way
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
}

export default AboutE;

import Title from "../../components/Title/Title";
import contact from "./contact.module.css";
import cont from "../../assets/contactUs.jpg";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
function ContactE() {
  return (
    <div className={contact.wraper}>
      <div style={{ textAlign: "center" }}>
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className={contact.container}>
        <div>
          <img src={cont} alt="" />
        </div>
        <div className={contact.box}>
          <div>
            <h3 className={contact.customer}>Customer Service</h3>
            <p className={contact.textP}>
              Many of your questions can be answered below, but if you need
              additional help, feel free to contact us.
            </p>
            <br />
          </div>
          <div>
            <h4 className={contact.customer}>Contact Us</h4>
            <p style={{ color: "gray" }}>1-800-000-0000</p>
            <br />
          </div>
          <div>
            <h4 className={contact.customer}>Email Us</h4>
            <p style={{ color: "gray" }}> E-Commerce@store.com </p>
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
}

export default ContactE;

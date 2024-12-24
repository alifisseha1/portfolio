import s from "./contact.module.css";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import logo from "../../assets/let's talk.jpg";
import { useState } from "react";

import { motion } from "motion/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",

    // Add more fields as needed
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform validation here
    // Send the formData to your backend for processing
    console.log("Form Data:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className={s.contact}>
      <div className={s.contactBox}>
        <div className={s.contactMe}>
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 1, ease: "linear" }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            Get in touch
          </motion.h1>
        </div>
        <div className={s.contactSide}>
          <div className={s.contactLeftSide}>
            <div className={s.contactImg}>
              <img src={logo} alt="Let's talk" />
            </div>
            <div className={s.contactText}>
              <p>
                Hey there! 👋 I'm currently open to taking on new React
                projects. Whether you need help with development, enhancements,
                I'm ready to dive in. Feel free to reach out anytime to discuss
                your project needs!
              </p>
            </div>
            <div>
              <div className={s.contactIcons}>
                <EmailIcon />
                <p>alifisseha@yahoo.com</p>
              </div>
              <div className={s.contactIcons}>
                <CallIcon />
                <p>+813-995-1523</p>
              </div>
              <div className={s.contactIcons}>
                <LocationOnIcon />
                Tampa Florida
              </div>
            </div>
          </div>
          <div className={s.contactRightSide}>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>

                <input
                  type="name"
                  id="name"
                  className={s.inp}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="email"
                  id="email"
                  className={s.inp}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <br />
                <textarea
                  id="message"
                  className={s.message}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className={s.buttonSubmit}>
                <button type="submit" className={s.submitButton}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

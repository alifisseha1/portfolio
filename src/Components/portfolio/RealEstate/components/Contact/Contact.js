import { useState } from "react";
import c from "./contact.module.css";
import { toast } from "react-toastify";
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4869dac8-0ed1-4936-990e-e9972475b280");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");

      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);

      toast.error(data.message);
      setResult("");
    }
  };
  return (
    <div id="contact" className={c.container}>
      <div className={c.contactText}>
        <h1>
          Contact <span className={c.contactUs}>With Us</span>{" "}
        </h1>
        <br />
        <p>Ready to make a move ? Les's build your future together</p>
      </div>
      <form className={c.formContainer} onSubmit={onSubmit}>
        <div className={c.textContainer}>
          <div className={c.text}>
            Your Name
            <input type="text" placeholder="Name" required name="name" />
          </div>
          <div className={c.text}>
            Your Email
            <input type="email" placeholder="Email" required name="email" />
          </div>
        </div>
        <div className={c.text}>
          Message
          <textarea
            name="message"
            placeholder="Message"
            required
            rows={"10"}
            className={c.textarea}
          ></textarea>
        </div>
        <div className={c.button}>
          <button type="submit">{result ? result : "Send Message"}</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

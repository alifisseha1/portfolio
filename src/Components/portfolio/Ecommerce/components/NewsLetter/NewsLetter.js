import { useState } from "react";
import nl from "./newsletter.module.css";

function NewsLetter() {
  const [data, setDate] = useState({
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data); // you can send this to data base
    setDate({ email: "" });
  };

  return (
    <div className={nl.box}>
      <h2 className={nl.text1}>Subscribe now & get 30% off</h2>
      <p className={nl.text2}>
        Get the latest on trends, best deals and exclusive offers!
      </p>
      <form className={nl.form} onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={data.email}
          placeholder="Enter Your Email"
          required
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">SUBSCRIBE</button>
      </form>
    </div>
  );
}

export default NewsLetter;

import t from "./testimonails.module.css";
import { testimonialsDate } from "../../assets/assets.js";
import { Star } from "@mui/icons-material";
function Testimonails() {
  return (
    <div id="testimonails" className={t.container}>
      <h1>
        Customer <span className={t.testimonial}>Testimonials</span>{" "}
      </h1>
      <p>Real Stories from those who found home with us</p>
      <div className={t.testimonialContainer}>
        {testimonialsDate.map((testimonial, index) => (
          <div key={index} className={t.testimonialBox}>
            <img src={testimonial.image} alt="" />
            <h2>{testimonial.name}</h2>
            <p>{testimonial.title}</p>
            <br />
            <div>
              {Array.from({ length: testimonial.rating }, (item, index) => (
                <Star style={{ color: "orange" }} />
              ))}
            </div>
            <br />
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonails;

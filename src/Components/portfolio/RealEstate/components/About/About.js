import a from "./about.module.css";
import sideImage from "../../assets/home10.jpg";

function About() {
  return (
    <div className={a.container} id="about">
      <div className={a.text}>
        <h1>
          About <span>Our Brand</span>
        </h1>
        <br />
        <p>Passionate About Properies, Dedicated to </p>
        <p>Your Vision</p>
      </div>
      <div className={a.images}>
        <img src={sideImage} alt="" />
      </div>
      <div className={a.textContainer}>
        <div className={a.years}>
          <div className={a.yearsList}>
            <div>
              <h1>15+</h1>
              <p>Years of Excellence</p>
              <br />
              <br />
            </div>

            <div>
              <h1>17+</h1>
              <p>Projects Completed</p>
            </div>
          </div>
          <div className={a.yearsList}>
            <div>
              <h1>20+</h1>
              <p>Mn.sq.Ft.Delivered</p>
              <br />
            </div>
            <div>
              <h1>24+</h1>
              <p>Ongoing Projects</p>
            </div>
          </div>
        </div>
        <div className={a.testList}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe
            quae quibusdam. Delectus incidunt deserunt, consequatur quia ducimus
            ea. Veritatis vel eos labore iure blanditiis repellendus ipsam
            mollitia optio consequatur.
          </p>
          <button>Learn more</button>
        </div>
      </div>
    </div>
  );
}

export default About;

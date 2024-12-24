import hero from "./hero.module.css";
import womenLogo from "../../assets/women_logo.jpg";
function Hero() {
  return (
    <div className={hero.container}>
      <div className={hero.text}>
        <span>SPRING / SUMMER COLLECTION</span>
        <br />
        <h1>Get up to 30% off</h1>
        <h3>New Arrivals</h3>
        <br />
        <div>
          <button>SHOP NOW</button>
        </div>
      </div>
      <div className={hero.womenLogo}>
        <img src={womenLogo} alt="" />
      </div>
    </div>
  );
}

export default Hero;

import { motion } from "framer-motion";
import logo from "../../assets/fishimg.jpeg";
import s from "./home.module.css";
const Home = () => {
  return (
    <div>
      <div className={s.homePage}>
        <div>
          <motion.div
            whileInView={{ x: 0 }}
            initial={{ x: -300 }}
            transition={{
              type: "spring",
              stiffness: 800,
              damping: 150,
            }}
            className={s.homeLeft}
          >
            <h1>
              Hi, I'm{" "}
              <span style={{ color: " rgb(177, 152, 10)" }}>Fisseha Ali</span>{" "}
            </h1>
            <br />
            <h3>Front-End</h3>
            <h3>React Developer</h3>
          </motion.div>
        </div>
        <div className={s.homeRight}>
          <motion.div
            className={s.homePicture}
            whileInView={{ scale: 1 }}
            initial={{ scale: 0.5 }}
            transition={{ duration: 1 }}
          >
            <img src={logo} alt="fisseha picture" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;

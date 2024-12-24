import s from "./about.module.css";
import logo from "../../assets/fishimg.jpeg";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

const About = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  return (
    <div ref={scope}>
      <div className={s.aboutText}>
        {" "}
        <motion.h1
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          About Me
        </motion.h1>{" "}
      </div>
      <div className={s.aboutList}>
        <motion.div
          className={s.aboutImg}
          whileInView={{ scale: 1 }}
          initial={{ scale: 0.5 }}
          transition={{ duration: 1 }}
        >
          <img src={logo} alt="fisseha ali" className={s.img} />
        </motion.div>
        <div className={s.aboutRight}>
          <div className={s.text}>
            <p>
              I bring several years of expertise as a frontend React developer,
              having contributed significantly to various organizations' success
              and growth throughout my career.
            </p>
            <br />

            <p>
              My passion for frontend development is evident through my
              extensive experience, as well as the enthusiasm and dedication I
              bring to every project. I thrive on delivering impactful solutions
              and contributing to the success of each organization I collaborate
              with.
            </p>
            <br />
          </div>
          <div className={s.progressBox}>
            <div className={s.progressInside}>
              <div className={s.progressList}>
                <div>
                  <h4>HTML</h4>
                </div>
                <div className={s.progressbar}>
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2, ease: "linear" }}
                    className={s.progress}
                  ></motion.div>
                </div>
              </div>
              <div className={s.progressList}>
                <h4>CSS</h4>
                <div className={s.progressbar}>
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2, ease: "linear" }}
                    className={s.progress}
                  ></motion.div>
                </div>
              </div>
              <div className={s.progressList}>
                <h4>JavaScript</h4>
                <div className={s.progressbar}>
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2, ease: "linear" }}
                    className={s.progress}
                  ></motion.div>
                </div>
              </div>
              <div className={s.progressList}>
                <h4>React</h4>
                <div className={s.progressbar}>
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2, ease: "linear" }}
                    className={s.progress}
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

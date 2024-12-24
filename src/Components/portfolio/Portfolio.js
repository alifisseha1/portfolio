import { Link, NavLink } from "react-router-dom";

import realstate from "../../assets/realstate.png";
import ecommerce from "../../assets/E-CommerceScreen.png";
import todolist from "../../assets/todolist.png";
import restaurant from "../../assets/restaurant.png";
import { motion } from "framer-motion";
import pf from "./portfolio.module.css";
const Portfolio = () => {
  return (
    <div className={pf.container}>
      <Link to="restaurant">
        <motion.div
          initial={{ scale: 0.5 }}
          transition={{ duration: 2 }}
          whileInView={{ scale: 1 }}
          className={pf.wraper}
        >
          <h3>Restaurant</h3>
          <img src={restaurant} alt="restaurant" />
        </motion.div>
      </Link>

      <Link to="realstate">
        <motion.div
          initial={{ x: -200 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0 }}
          className={pf.wraper}
        >
          <h3>Realstate</h3>
          <img src={realstate} alt="realstate" />
        </motion.div>
      </Link>

      <Link to="ecommerce">
        <motion.div
          initial={{ x: -400 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0 }}
          className={pf.wraper}
        >
          <h3>E-Commerce</h3>
          <img src={ecommerce} alt="ecommerce" />
        </motion.div>
      </Link>

      <Link to={"toDoList"}>
        <motion.div
          initial={{ x: -500 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0 }}
          className={pf.wraper}
        >
          <h3>To Do List</h3>
          <img src={todolist} alt="todolist" />
        </motion.div>
      </Link>
    </div>
  );
};

export default Portfolio;

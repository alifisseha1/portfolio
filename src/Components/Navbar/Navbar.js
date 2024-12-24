import s from "./navbar.module.css";
import fish from "../../assets/fishimg.jpeg";
import { Link } from "react-scroll";
import { useState } from "react";
const navLinkData = [
  { id: 1, title: "Home", link: "home" },
  { id: 2, title: "About", link: "about" },
  { id: 3, title: "portfolio", link: "portfolio" },
  { id: 4, title: "Contact", link: "contact" },
];
const Navbar = () => {
  const [namefa, setNamefa] = useState(false);
  function handeNameEnter() {
    setNamefa(true);
  }
  function handleNameLeave() {
    setNamefa(false);
  }
  return (
    <div className={s.navbar}>
      <div className={s.logo}>
        <img
          src={fish}
          alt="fisseha img"
          className={s.fish}
          onMouseEnter={handeNameEnter}
          onMouseLeave={handleNameLeave}
        />
        {namefa ? (
          <span className={s.nameList}>Fisseha Ali</span>
        ) : (
          <span>FA</span>
        )}
      </div>
      <div className={s.ulList}>
        <ul className={s.ul}>
          {navLinkData.map(({ id, title, link }) => (
            <li key={id}>
              {" "}
              <Link
                activeClass={s.active}
                to={link}
                spy={true}
                smooth={true}
                duration={500}
              >
                {title}
              </Link>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

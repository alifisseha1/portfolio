import { Link, NavLink } from "react-router-dom";
import navbar from "./navbar.module.css";
import logo from "../../assets/logo.png";
import {
  PersonOutline,
  Search,
  ShoppingBagOutlined,
  Menu,
  ArrowBack,
  Home,
} from "@mui/icons-material";
import { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
function NavbarE() {
  const [visible, setVisible] = useState(false);

  const { setShowSearch, getCartCount, navigate, log, setLog } =
    useContext(ShopContext);

  return (
    <div className={navbar.container}>
      <div className={navbar.homeLink}>
        <ArrowBack
          style={{ color: "green", cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
        <img src={logo} alt="Ecommerce" width={"70px"} />
      </div>
      <ul className={navbar.linkList}>
        <NavLink
          to="/ecommerce"
          className={({ isActive }) =>
            isActive ? `${navbar.active}` : undefined
          }
          end
        >
          HOME
        </NavLink>
        <NavLink
          to="collectionE"
          className={({ isActive }) =>
            isActive ? `${navbar.active}` : undefined
          }
        >
          COLLECTION
        </NavLink>
        <NavLink
          to="aboutE"
          className={({ isActive }) =>
            isActive ? `${navbar.active}` : undefined
          }
        >
          ABOUT
        </NavLink>
        <NavLink
          to="contactE"
          className={({ isActive }) =>
            isActive ? `${navbar.active}` : undefined
          }
        >
          CONTACT
        </NavLink>
      </ul>
      <div className={navbar.search}>
        <div onClick={() => setShowSearch(true)} style={{ cursor: "pointer" }}>
          <Link to="collectionE">
            <Search />
          </Link>
        </div>
        <div className={navbar.dropDownContainer}>
          <PersonOutline />
          <div className={navbar.dropDownList}>
            {log ? (
              <div>
                <p onClick={() => navigate("/ecommerce/orderE")}>Order</p>
                <p onClick={() => setLog(false)}>Logout</p>
              </div>
            ) : (
              <div className={navbar.log}>
                <button
                  onClick={() => {
                    navigate("/ecommerce/loginE");
                  }}
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
        <Link to="cartE" className={navbar.shoppingBag}>
          <ShoppingBagOutlined />
          {getCartCount() > 0 && <span>{getCartCount()}</span>}
        </Link>
        <div className={navbar.menuIcon} onClick={() => setVisible(true)}>
          <Menu />
        </div>
      </div>
      <div
        className={`${navbar.dropDownSmall} ${
          visible ? navbar.show : navbar.hidde
        }`}
      >
        <div onClick={() => setVisible(false)} className={navbar.leftArrow}>
          <ArrowBack />
          <span>Back</span>
        </div>
        <div className={navbar.smallNavlink}>
          <NavLink
            onClick={() => setVisible(false)}
            to={"/ecommerce"}
            className={({ isActive }) =>
              isActive ? `${navbar.active}` : undefined
            }
            end
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to={"collectionE"}
            className={({ isActive }) =>
              isActive ? `${navbar.active}` : undefined
            }
          >
            COLLECTON
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to={"aboutE"}
            className={({ isActive }) =>
              isActive ? `${navbar.active}` : undefined
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to={"contactE"}
            className={({ isActive }) =>
              isActive ? `${navbar.active}` : undefined
            }
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavbarE;

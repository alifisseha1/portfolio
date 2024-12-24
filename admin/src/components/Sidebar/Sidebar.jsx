import { NavLink } from "react-router-dom";
import side from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={side.sidebar}>
      <div className={side.sidebar_option}>
        <NavLink
          to={"add"}
          className={({ isActive }) =>
            isActive ? `${side.active}` : undefined
          }
        >
          Add Items
        </NavLink>
      </div>
      <div className={side.sidebar_option}>
        <NavLink
          to={"list"}
          className={({ isActive }) =>
            isActive ? `${side.active}` : undefined
          }
        >
          List Items
        </NavLink>
      </div>
      <div className={side.sidebar_option}>
        <NavLink
          to={"order"}
          className={({ isActive }) =>
            isActive ? `${side.active}` : undefined
          }
        >
          Order
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;

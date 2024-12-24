import { useContext, useEffect, useState } from "react";
import srh from "./searchBar.module.css";
import { ShopContext } from "../../context/ShopContext";
import { Close, Search } from "@mui/icons-material";
import { useLocation } from "react-router-dom";

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("ecommerce/collectionE")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);
  return showSearch && visible ? (
    <div className={srh.container}>
      <div className={srh.inputBox}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className={srh.input}
        />
        <span>
          <Search />
        </span>
      </div>
      <span
        onClick={() => {
          return setShowSearch(false), setSearch("");
        }}
        className={srh.close}
      >
        <Close />
      </span>
    </div>
  ) : null;
}

export default SearchBar;

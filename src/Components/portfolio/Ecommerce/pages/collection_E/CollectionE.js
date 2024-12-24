import { useContext, useEffect, useState } from "react";
import c from "./collection.module.css";
import { ShopContext } from "../../context/ShopContext";
import Title from "../../components/Title/Title";
import ProductItem from "../../components/ProductItem/ProductItem";

const CollectionE = () => {
  const { product, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      // setCategory((prv) => prv.filter((item) => item !== e.target.value));
      setCategory([...category.filter((item) => item !== e.target.value)]);
    } else {
      setCategory([...category, e.target.value]);
    }
  };
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prv) => prv.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prv) => [...prv, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productCopy = product.slice();

    // for search list
    if (showSearch && search) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productCopy);
  };

  const sortProduct = () => {
    let filterProductCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(filterProductCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(filterProductCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);
  return (
    <div className={c.wraper}>
      <div className={c.container}>
        <div className={c.leftDiv}>
          <p className={c.textFilter}>FILTERS</p>
          <div className={c.categories}>
            <p className={c.cat}>CATEGORIES</p>
            <div className={c.allP}>
              <p>
                <input
                  type="checkbox"
                  name=""
                  value={"Men"}
                  onChange={toggleCategory}
                  className={c.check}
                />
                Men
              </p>
              <p>
                <input
                  type="checkbox"
                  name=""
                  value={"Women"}
                  onChange={toggleCategory}
                  className={c.check}
                />
                Women
              </p>
              <p>
                <input
                  type="checkbox"
                  name=""
                  value={"Kid"}
                  onChange={toggleCategory}
                  className={c.check}
                />
                Kids
              </p>
            </div>
          </div>
          <div className={c.categories}>
            <p className={c.cat}>TYPE</p>
            <div className={c.allP}>
              <p>
                <input
                  type="checkbox"
                  name=""
                  value={"Topwear"}
                  onChange={toggleSubCategory}
                  className={c.check}
                />
                Topwear
              </p>
              <p>
                <input
                  type="checkbox"
                  name=""
                  value={"Bottomwear"}
                  onChange={toggleSubCategory}
                  className={c.check}
                />
                Bottomwear
              </p>
              <p>
                <input
                  type="checkbox"
                  name=""
                  value={"Winterwear"}
                  onChange={toggleSubCategory}
                  className={c.check}
                />
                Winterwear
              </p>
            </div>
          </div>
        </div>
        <div className={c.rightDiv}>
          <div className={c.sort}>
            <div>
              <p>
                {" "}
                ALL <span>COLLECTIONS</span>{" "}
              </p>
            </div>
            <div>
              <select
                className={c.select}
                onChange={(e) => setSortType(e.target.value)}
              >
                <option value="relavent">Sort</option>
                <option value="low-high">Low to High</option>
                <option value="high-low">High to Low</option>
              </select>
            </div>
          </div>
          <div className={c.allImageContainer}>
            {filterProducts.map((items, index) => (
              <ProductItem
                key={index}
                id={items._id}
                image={items.image}
                name={items.name}
                price={items.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionE;

import latest from "./latestCollection.module.css";
import { ShopContext } from "../../context/ShopContext";
import { useContext, useEffect, useState } from "react";
import Title from "../Title/Title";
import ProductItem from "../ProductItem/ProductItem";
function LatestCollection() {
  const { product } = useContext(ShopContext);
  const [latestProduct, setLatestProduct] = useState([]);
  useEffect(() => {
    setLatestProduct(product.slice(0, 10));
  }, []);
  return (
    <div>
      <div style={{ paddingLeft: "20px" }}>
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
      </div>
      {/* rendering product */}
      <div className={latest.container}>
        {latestProduct.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default LatestCollection;

import { useContext, useEffect, useState } from "react";
import bs from "./bestSeller.module.css";
import { ShopContext } from "../../context/ShopContext";
import Title from "../Title/Title";
import ProductItem from "../ProductItem/ProductItem";

function BestSeller() {
  const { product } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  useEffect(() => {
    const filter = product.filter((items) => items.bestseller);
    setBestSeller(filter.slice(0, 5));
  }, []);
  return (
    <div>
      <div style={{ paddingLeft: "20px" }}>
        <Title text1={"BEST"} text2={"SELLERS"} />
      </div>
      <div className={bs.container}>
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default BestSeller;

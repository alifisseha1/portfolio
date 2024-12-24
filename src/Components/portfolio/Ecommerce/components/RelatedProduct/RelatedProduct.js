import { useContext, useEffect, useState } from "react";
import rp from "./relatedProduct.module.css";
import { ShopContext } from "../../context/ShopContext";
import Title from "../Title/Title";
import ProductItem from "../ProductItem/ProductItem";

function RelatedProduct({ category, subCategory }) {
  const { product } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (product.length > 0) {
      let productCopy = product.slice();
      productCopy = productCopy.filter((item) => item.category === category);
      productCopy = productCopy.filter(
        (item) => item.subCategory === subCategory
      );
      setRelated(productCopy.slice(0, 5));
    }
  }, [product]);
  return (
    <div className={rp.container}>
      <div style={{ paddingLeft: "20px" }}>
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div>
        {related.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedProduct;

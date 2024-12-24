import { useContext } from "react";
import pi from "./productItem.module.css";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";

function ProductItem({ id, image, name, price }) {
  const { currency } = useContext(ShopContext);
  return (
    <Link className={pi.wraper} to={`/ecommerce/productE/${id}`}>
      <div className={pi.container}>
        <img src={image[0]} alt="picture" />
      </div>
      <p className={pi.name}>{name}</p>
      <p className={pi.price}>
        {currency}
        {price}
      </p>
    </Link>
  );
}

export default ProductItem;

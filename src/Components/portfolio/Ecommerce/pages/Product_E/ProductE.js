import { Link, useParams } from "react-router-dom";
import prdt from "./product.module.css";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Star } from "@mui/icons-material";
import RelatedProduct from "../../components/RelatedProduct/RelatedProduct";

function ProductE() {
  const { productId } = useParams();
  const { product, currency, addToCart, setCartItems } =
    useContext(ShopContext);
  const [productDate, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState([]);

  function handleSize(val) {
    if (size.includes(val)) {
      setSize([...size.filter((item) => item !== val)]);
    } else {
      setSize([...size, val]);
    }
  }

  const fetchData = async () => {
    const data = product.find((item) => {
      return item._id === productId;
    });
    setProductData(data);
    setImage(data.image[0]);
  };
  useEffect(() => {
    fetchData();
  }, [productId, product]);
  return productDate ? (
    <div>
      <div>
        <div className={prdt.imageContainer}>
          <div className={prdt.listImage}>
            {productDate.image.map((item, index) => (
              <img
                src={item}
                key={index}
                alt=""
                onClick={() => setImage(item)}
              />
            ))}
          </div>
          <div>
            <img src={image} alt="" />
          </div>
          <div style={{ paddingLeft: "10px" }}>
            <h2 style={{ color: "gray" }}>{productDate.name}</h2>
            <div className={prdt.stars}>
              <Star style={{ color: "orange", fontSize: "large" }} />
              <Star style={{ color: "orange", fontSize: "large" }} />
              <Star style={{ color: "orange", fontSize: "large" }} />
              <Star style={{ color: "silver", fontSize: "large" }} />
              <Star style={{ color: "silver", fontSize: "large" }} />
              <span>(99)</span>
            </div>
            <div className={prdt.price}>
              <p>
                {currency}
                {productDate.price}
              </p>
              <p style={{ color: "gray", padding: "5px 0px" }}>
                {productDate.description}
              </p>
            </div>
            <div>
              <p style={{ color: "black", fontWeight: "700" }}>Select Size</p>
              <div>
                {productDate.sizes.map((item, index) => (
                  <button
                    key={index}
                    className={`${prdt.button} ${
                      size.includes(item) ? prdt.buttonSize : ""
                    }`}
                    onClick={() => handleSize(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div>
                <button
                  onClick={() => {
                    return addToCart(productDate._id, size), setSize([]);
                  }}
                  className={prdt.addTocart}
                >
                  ADD TO CART
                </button>
                <Link to={"/ecommerce/collectionE"}>
                  <button className={prdt.allProduct}>ALL PRODUCT</button>
                </Link>
              </div>
            </div>
            <div className={prdt.textDescription}>
              <p>100% Original product</p>
              <p>Cash on delivery is available on this product</p>
              <p>Easy return and exchange policy withing 7 days</p>
            </div>
          </div>
        </div>
        <div className={prdt.bottomContainer}>
          <div className={prdt.description}>
            <b>Description</b>
            <p>Reviews (99)</p>
          </div>
          <div className={prdt.descriptionText}>
            <p>
              E-commerce websites typically display product or services along
              with detailed description, images, prices and any available
              variations. Each product usually its own dedicated page with
              relavan information.
            </p>
          </div>
        </div>
      </div>
      <RelatedProduct
        category={productDate.category}
        subCategory={productDate.subCategory}
      />
    </div>
  ) : null;
}

export default ProductE;

import add from "./add.module.css";
import upload from "../../assets/Upload.jpg";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const Add = () => {
  const url = "https://portfolio-backend-y9tr.onrender.com";
  const [image, setImage] = useState(false);

  const [data, setDate] = useState({
    name: "",
    description: "",
    price: "",
    category: "Appetizers",
  });

  const onChangeHandler = (e) => {
    let { name, value } = e.target;

    if (name === "price") {
      if (value < 0) {
        value = 0;
      }
    }
    setDate({ ...data, [name]: value });
  };
  const onSumitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    const response = await axios.post(`${url}/api/food/add`, formData);

    if (response.data.success) {
      setDate({
        name: "",
        description: "",
        price: "",
        category: "Appetizers",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className={add.add}>
      <form className={add.flex_col} onSubmit={onSumitHandler}>
        <div className={`${add.add_img_upload} ${add.flex_col}`}>
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : upload}
              alt="Upload"
              width={"90px"}
            />
          </label>
          <input
            type="file"
            id="image"
            hidden
            required
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className={`${add.add_product_name} ${add.flex_col}`}>
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            type="text"
            name="name"
            value={data.name}
            placeholder="Type  here"
          />
        </div>
        <div className={`${add.add_product_description} ${add.flex_col}`}>
          <p>Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows={6}
            placeholder="Write content here"
            required
          ></textarea>
        </div>
        <div className={add.add_category_price}>
          <div className={`${add.add_category} ${add.flex_col}`}>
            <p>Product category</p>
            <select
              name="category"
              onChange={onChangeHandler}
              value={data.category}
            >
              <option value="Appetizers">Appetizers</option>
              <option value="Beef">Beef</option>
              <option value="Chicken">Chicken</option>
              <option value="Lamb">Lamb</option>
              <option value="Seafood">Seafood</option>
              <option value="Vegetable">Vegetable</option>
            </select>
          </div>
          <div className={`${add.add_price} ${add.flex_col}`}>
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              type="Number"
              name="price"
              value={data.price}
              placeholder="$0"
            />
          </div>
        </div>
        <button type="submit" className={add.add_btn}>
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;

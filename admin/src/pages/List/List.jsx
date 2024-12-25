import { useEffect, useState } from "react";
import l from "./list.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Close } from "@mui/icons-material";
const List = () => {
  const url = "https://portfolio-backend-y9tr.onrender.com";
  const [list, setList] = useState([]);
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);

    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className={`${l.list} ${l.add} ${l.flex_col}`}>
      <p className={l.all}>All Foods List</p>
      <br />
      <div className={l.list_table}>
        <div className={`${l.list_table_format} ${l.title}`}>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className={l.list_table_format}>
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}.00</p>
              <div
                className={l.close}
                onClick={() => {
                  removeFood(item._id);
                }}
              >
                <Close style={{ fontSize: "17px" }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;

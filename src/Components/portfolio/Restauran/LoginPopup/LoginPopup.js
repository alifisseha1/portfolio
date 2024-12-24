import { useContext, useState } from "react";
import sl from "./loginpopup.module.css";
import { Close } from "@mui/icons-material";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
function LoginPopup({ setShowLogin }) {
  const { url, setToken } = useContext(StoreContext);
  const [currentState, setCurrentState] = useState("Login");
  const [data, setDate] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setDate({ ...data, [name]: value });
  };

  const onLogin = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if (currentState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };
  return (
    <div className={sl.login_popup}>
      <form className={sl.login_popup_container} onSubmit={onLogin}>
        <div className={sl.login_poput_title}>
          <h2>{currentState}</h2>
          <span onClick={() => setShowLogin(false)}>
            {" "}
            <Close />{" "}
          </span>
        </div>
        <div className={sl.login_popup_inputs}>
          {currentState !== "Login" && (
            <input
              type="text"
              placeholder="Your name"
              required
              name="name"
              onChange={onChangeHandler}
              value={data.name}
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            onChange={onChangeHandler}
            value={data.email}
          />
          <input
            type="password"
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            placeholder="Password"
            required
          />
        </div>

        <div className={sl.login_popup_condition}>
          <input type="checkbox" name="" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        <button type="submit">
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        {currentState === "Login" ? (
          <p>
            Create a new account ?{" "}
            <span onClick={() => setCurrentState("Sign Up")}>Click here</span>{" "}
          </p>
        ) : (
          <p>
            Already have an account ?{" "}
            <span onClick={() => setCurrentState("Login")}>Login here</span>{" "}
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;

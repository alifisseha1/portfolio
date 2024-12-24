import { useContext, useState } from "react";
import login from "./login.module.css";
import { toast } from "react-toastify";
import { ShopContext } from "../../context/ShopContext";
function LoginE() {
  const { setLog, navigate } = useContext(ShopContext);
  const [currentState, setCurrentState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleData(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    toast.success("You Logged In");
    setLog(true);
    navigate("/ecommerce");

    console.log(data);
  };
  return (
    <div className={login.container}>
      <form onSubmit={onSubmitHandler} className={login.formFiled}>
        <div className={login.current}>
          <h2>{currentState}</h2>
        </div>
        <div className={login.input}>
          {currentState !== "Login" && (
            <input
              onChange={handleData}
              type="text"
              placeholder="Name"
              required
              name="name"
            />
          )}
          <input
            onChange={handleData}
            type="email"
            placeholder="Email"
            required
            name="email"
          />
          <input
            onChange={handleData}
            type="password"
            placeholder="Password"
            required
            name="password"
          />
        </div>
        <div className={login.pass}>
          <p style={{ color: "gray" }}>Rest Password</p>
          {currentState === "Login" ? (
            <p onClick={() => setCurrentState("Sing Up")}>Create account</p>
          ) : (
            <p onClick={() => setCurrentState("Login")}>Login</p>
          )}
        </div>

        <button type="submit" className={login.submitButton}>
          {currentState === "Login" ? "Sing In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
}

export default LoginE;

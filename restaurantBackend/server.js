import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

import "dotenv/config.js";

//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

//To get the images from uploads folder
app.use("/images", express.static("uploads"));

// api endpoints
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

//http://localhose:4000
app.get("/", (req, res) => {
  res.send("Home Page");
});

//http://localhost:4000/ali
app.get("/ali", (req, res) => {
  res.send("ali");
});

//http://localhost:4000/fisseha/ali
app.get("/fisseha/ali", (req, res) => {
  res.send("fisseha ali");
});

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});

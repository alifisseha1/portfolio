import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./Components/homePage/HomePage";
import ToDoList from "./Components/portfolio/ToDoList/ToDoList";
import Restauran from "./Components/portfolio/Restauran/Restauran";
import HomeRes from "./Components/portfolio/Restauran/homeRes/HomeRes";
import CartRes from "./Components/portfolio/Restauran/cartRes/CartRes";
import Contact from "./Components/portfolio/Restauran/contact/Contact";
import PlaceOrderRes from "./Components/portfolio/Restauran/placeOrderRes/PlaceOrderRes";
import Ecommerce from "./Components/portfolio/Ecommerce/Ecommerce";
import { Verify } from "./Components/portfolio/Restauran/verify/Verify";
import Myorders from "./Components/portfolio/Restauran/myorders/Myorders";
import HomeE from "./Components/portfolio/Ecommerce/pages/Home_E/HomeE";
import AboutE from "./Components/portfolio/Ecommerce/pages/About_E/AboutE";
import CartE from "./Components/portfolio/Ecommerce/pages/Cart_E/CartE";
import CollectionE from "./Components/portfolio/Ecommerce/pages/collection_E/CollectionE";
import ContactE from "./Components/portfolio/Ecommerce/pages/Contact_E/ContactE";
import LoginE from "./Components/portfolio/Ecommerce/pages/Login_E/LoginE";
import OrdersE from "./Components/portfolio/Ecommerce/pages/Oreders_E/OrdersE";
import PlaceOrderE from "./Components/portfolio/Ecommerce/pages/PlaceOrder_E/PlaceOrderE";
import ProductE from "./Components/portfolio/Ecommerce/pages/Product_E/ProductE";

import RealEstate from "./Components/portfolio/RealEstate/RealEstate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "toDoList",
    element: <ToDoList />,
  },
  {
    path: "restaurant",
    element: <Restauran />,
    children: [
      {
        index: true,

        element: <HomeRes />,
      },
      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "cart",
        element: <CartRes />,
      },
      {
        path: "placeOrder",
        element: <PlaceOrderRes />,
      },
      {
        path: "verify",
        element: <Verify />,
      },
      {
        path: "myorders",
        element: <Myorders />,
      },
    ],
  },
  {
    path: "realstate",
    element: <RealEstate />,
  },
  {
    path: "ecommerce",
    element: <Ecommerce />,
    children: [
      {
        index: true,
        element: <HomeE />,
      },
      {
        path: "aboutE",
        element: <AboutE />,
      },
      {
        path: "cartE",
        element: <CartE />,
      },
      {
        path: "collectionE",
        element: <CollectionE />,
      },
      {
        path: "contactE",
        element: <ContactE />,
      },
      {
        path: "loginE",
        element: <LoginE />,
      },
      {
        path: "orderE",
        element: <OrdersE />,
      },
      {
        path: "placeOrderE",
        element: <PlaceOrderE />,
      },
      {
        path: "productE/:productId",
        element: <ProductE />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

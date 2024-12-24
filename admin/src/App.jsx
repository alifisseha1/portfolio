import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Oreder from "./pages/Oreder/Oreder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "add",
        element: <Add />,
      },
      {
        path: "list",
        element: <List />,
      },
      {
        path: "order",
        element: <Oreder />,
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

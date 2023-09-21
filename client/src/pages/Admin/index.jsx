import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Product from "./Products/Product";
import User from "./Users/User";

const Admin = () => {
    
  const Layout = () => {
    return (
    <div className="main"></div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/admin/",
      element: <Home />,
    },
    {
      path: "/admin/product/",
      element: <Product />,
    },
    {
      path: "/admin/user/",
      element: <User />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Admin;

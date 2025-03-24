import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main-layout/MainLayout";
import Home from "../pages/main-layout-pages/home/home/Home";
import Login from "../pages/authentication/login/Login";
import Register from "../pages/authentication/register/Register";
import FoodDetails from "../pages/main-layout-pages/home/FoodDetails/FoodDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/foodDetails",
        element: <FoodDetails/>
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

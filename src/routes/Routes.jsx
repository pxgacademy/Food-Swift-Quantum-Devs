import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main-layout/MainLayout";
import Home from "../pages/main-layout-pages/home/home/Home";
import Login from "../pages/authentication/login/Login";
import Register from "../pages/authentication/register/Register";
import RestaurantList from "../pages/main-layout-pages/restaurant-list/RestaurantList";
import FoodItemList from "../pages/main-layout-pages/food-item-list/foodItemList";
import FoodDetails from "../pages/main-layout-pages/home/FoodDetails/FoodDetails";
import Restaurant_form from "../pages/main-layout-pages/forms/restaurant_form";
import LiveMap from "../components/map/Livemap";


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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/foodDetails",
        element: <FoodDetails></FoodDetails>,
      },
      {
        path: "/restaurant",
        element: <RestaurantList />,
      },
      {
        path: "/foodList",
        element: <FoodItemList />,
      },
      {
        path: "restaurant-form",
        element: <Restaurant_form />,
      },
      {
        path: 'live-map',
        element: <LiveMap/>
      }
    ],
  },
]);

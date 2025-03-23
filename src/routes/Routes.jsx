import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main-layout/MainLayout";
import Home from "../pages/main-layout-pages/home/home/Home";
import Login from "../pages/authentication/login/Login";
import Register from "../pages/authentication/register/Register";
import RestaurantList from "../pages/main-layout-pages/restaurant-list/RestaurantList";
import FoodItemList from "../pages/main-layout-pages/food-item-list/foodItemList";

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
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },     
      {
        path: '/restaurant',
        element: <RestaurantList/>
      },    
      {
        path: '/foodList',
        element: <FoodItemList/>
      }      
    ],
  },

]);




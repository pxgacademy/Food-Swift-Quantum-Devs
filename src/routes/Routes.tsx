import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import MainLayout from "../layouts/main-layout/MainLayout";
import Home from "../pages/main-layout-pages/home/home/Home";
import Register from "../pages/authentication/Register";

// Define the route config array type
const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "leaflet/dist/leaflet.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import MainContext from "./contexts/MainContext";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MainContext>
        <RouterProvider router={router} />
      </MainContext>
    </QueryClientProvider>
  </StrictMode>
);

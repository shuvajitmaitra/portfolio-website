import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster
      position="top-center"
      toastOptions={{
        style: {
          background: "#060606",
          color: "#FAF5F5",
          borderRadius: "14px",
          padding: "10px 14px",
          fontSize: "14px",
          maxWidth: "420px",
        },
      }}
    />
  </React.StrictMode>
);

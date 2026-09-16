import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./MainLayout/Layout";
import Home from "./Pages/Home";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#111827",
          color: "#f8fafc",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "18px",
          boxShadow: "0 18px 45px rgba(0,0,0,0.35)",
          padding: "16px 18px",
          maxWidth: "420px",
        },
      }}
    />
  </React.StrictMode>
);

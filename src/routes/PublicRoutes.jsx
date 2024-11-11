import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../root/Root";
import HomePage from "../pages/homepage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
    ],
  },
]);
export default router;

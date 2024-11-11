import React from "react";
import NavBar from "../pages/shared/NavBar";
import Footer from "../pages/shared/Footer";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

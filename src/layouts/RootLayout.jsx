import React from "react";
import { Outlet } from "react-router";
import Navbar from "../pages/Shared/Header/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-[1920px] mx-auto">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="flex-1">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;

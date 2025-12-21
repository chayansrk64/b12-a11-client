import React from "react";
import { Outlet } from "react-router";
import Logo from "../components/Logo/Logo";
import authImg from '../assets/login-img.png'
import Navbar from "../pages/Shared/Header/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const AuthLayout = () => {
  return (
  <>
    <Navbar></Navbar>
   <div className="max-w-7xl mx-auto  flex flex-col bg-white">
   

  <div className="flex-1 flex ">

    {/* LEFT SIDE – FORM */}
    <div className="flex-1 flex justify-center items-center">
      <div className="w-full max-w-md px-6">
      
        <Outlet />
        
      </div>
    </div>

    {/* RIGHT SIDE – IMAGE */}
    <div className="hidden lg:flex flex-1 justify-center items-center bg-[#fafdf0]">
      <img
        src={authImg}
        alt="auth illustration"
       className="w-full object-cover"
      />
    </div>

  </div>
</div>
<Footer></Footer>
</>

  );
};

export default AuthLayout;
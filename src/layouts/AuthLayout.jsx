import React from "react";
import { Outlet } from "react-router";
import Logo from "../components/Logo/Logo";
import authImg from '../assets/login-img.png'

const AuthLayout = () => {
  return (
   <div className="max-w-7xl mx-auto min-h-screen flex flex-col bg-white">
   <div className="ms-10 ">
    <Logo/>
   </div>

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
       className="w-full h-full object-cover"
      />
    </div>

  </div>
</div>

  );
};

export default AuthLayout;
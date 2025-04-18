"use client";
import React from "react";
// import SideNav from "./_components/SideNav";
import {Header} from "./_components/Header";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-100 h-screen">
      {/* <div className="md:w-64 hidden md:block fixed">
        <SideNav/>
    </div> */}
      <div className="w-full bg-slate-100 h ">
        <Header />

        {children}
      </div>
    </div>
  );
};
export default Layout;

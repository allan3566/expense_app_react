import React from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

function Menu() {
  return (
    <div className="flex w-full flex-col ">
      <h1>Menu</h1>
      <Header />
      <div className="mx-auto flex w-[896px] max-w-[896px] px-4">
        <Sidebar />
      </div>
    </div>
         
    
  );
}

export default Menu;
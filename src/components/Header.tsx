import React from "react";
import { LogIn, Menu } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export function Header() {
  let navigate = useNavigate();

  return (
    <div className="sticky top-0 z-10 flex h-14 w-full items-center border-b border-zinc-200 bg-white px-4">
      
      <div className="flex items-center">
        <button className="mr-2 flex h-10 items-center justify-center rounded-md bg-zinc-100 px-4 text-sm font-medium text-zinc-900"
                onClick={() => navigate("/login")}
>
          登入
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium text-zinc-900">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default Header;
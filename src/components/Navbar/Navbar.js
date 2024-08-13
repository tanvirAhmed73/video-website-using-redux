import React from "react";
import { CiSearch } from "react-icons/ci";
import logoImage from "../../assets/logo.png";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
        <a href="/" className="flex items-center justify-center gap-2">
          <img className="h-10" src={logoImage} alt="Video Website" />
          <p className="font-bold text-md">LearnTube</p>
        </a>
        <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
          {/* search option */}
          <Search />
          <CiSearch size={22} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

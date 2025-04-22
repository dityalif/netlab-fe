import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white flex p-4 text-lg justify-between font-semibold items-center tracking-wider sticky top-0 z-50 shadow-lg">
      <div className="flex items-center ml-8">
        <Link to="/" className="flex items-center">
          <img
            src="/src/assets/NetlabLogo.svg"
            alt="Logo"
            className="h-9 mr-3 transition rounded-full"
          />
          <span className="text-black font-bold text-xl">
            Network Laboratory
          </span>
        </Link>
      </div>
      <ul className="text-white flex mr-8 bg-black p-3 rounded-full shadow-2xl">
        <li className="ml-4 transition duration-200 hover:text-[#B39189] hover:scale-105 cursor-pointer">
          <Link to="/dmj">DMJ</Link>
        </li>
        <li className="ml-5 transition duration-200 hover:text-[#CB5154] hover:scale-105 cursor-pointer">
          <Link to="/os">OS</Link>
        </li>
        <li className="mx-5 transition duration-200 hover:text-[#ADA075] hover:scale-105 cursor-pointer">
          <Link to="/sbd">SBD</Link>
        </li>
      </ul>
    </nav>
  );
}
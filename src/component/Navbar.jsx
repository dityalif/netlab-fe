import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center p-4 px-8 text-lg tracking-wider sticky top-0 z-50 shadow-lg">
      {/* Netlab */}
      <div className="flex items-center transition duration-200 active:scale-95">
        <Link to="/" className="flex items-center">
          <img
            src="/img/NetlabLogo.svg"
            alt="Logo"
            className="h-9 mr-3 transition rounded-full hover"
          />
          <span className="text-black font-bold text-xl transition duration-200 hover:text-gray-500">
            Network Laboratory
          </span>
        </Link>
      </div>

      {/* Praktikum */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex space-x-6 items-center font-semibold">
          <li className="transition duration-200 hover:text-[#B39189] active:scale-90 cursor-pointer">
            <Link to="/dmj">DMJ</Link>
          </li>
          <li className="transition duration-200 hover:text-[#CB5154] active:scale-90 cursor-pointer">
            <Link to="/os">OS</Link>
          </li>
          <li className="transition duration-200 hover:text-[#ADA075] active:scale-90 cursor-pointer">
            <Link to="/sbd">SBD</Link>
          </li>
        </ul>
      </div>

      {/* Credit */}
      <div className="flex items-center space-x-3 ml-auto">
        <img
          src="/img/profile.jpg"
          alt="Profile"
          className="h-9 w-9 rounded-full border border-gray-300"
        />
        <span className="text-black font-semibold">Raditya Alif</span>
      </div>
    </nav>
  );
}
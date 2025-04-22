import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard({ title, name, description, image, hoverColor, link }) {
  return (
    <Link to={link} className="block">
      <div
        className={`bg-white shadow-md rounded-lg overflow-hidden w-80 transform transition-transform duration-300 hover:scale-105 active:scale-95 hover:shadow-2xl ${hoverColor}`}
      >
        <img src={image} alt={title} className="h-40 w-full object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{name}</p>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
}
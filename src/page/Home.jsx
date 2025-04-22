import React, { useState, useEffect } from "react";
import CourseCard from "../component/CourseCard.jsx";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const courses = [
    {
      title: "DMJ",
      name: "Dasar Manajemen Jaringan",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "/img/DMJLogo.svg",
      hoverColor: "hover:shadow-[#B39189]",
      link: "/dmj",
    },
    {
      title: "OS",
      name: "Operating System",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "/img/OSLogo.svg",
      hoverColor: "hover:shadow-[#CB5154]",
      link: "/os",
    },
    {
      title: "SBD",
      name: "Sistem Basis Data",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: "/img/SBDLogo.svg",
      hoverColor: "hover:shadow-[#ADA075]",
      link: "/sbd",
    },
  ];

  return (
    <div
      className={`flex flex-col items-center justify-center flex-1 mt-16 transform transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1 className="text-4xl font-bold text-center mb-16">
        Welcome to Network Laboratory
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            name={course.name}
            description={course.description}
            image={course.image}
            hoverColor={course.hoverColor}
            link={course.link}
          />
        ))}
      </div>
    </div>
  );
}
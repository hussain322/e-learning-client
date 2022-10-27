import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleCourse from "./SingleCourse/SingleCourse";
import "./Courses.css";
import SlideBar from "./SlideBar/SlideBar";

const Courses = () => {
  const courses = useLoaderData();
  // console.log(courses);

  return (
    <div className="courses-container">
      <div className="pl-4 shadow-lg bg-gray-800">
        {courses.map((course) => (
          <SlideBar key={course.id} course={course} />
        ))}
      </div>
      <div className="my-10">
        <blockquote className="text-4xl font-bold italic text-center text-slate-900">
          Courses We
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span className="relative text-white">Offer</span>
          </span>
        </blockquote>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto mt-10">
          {courses.map((course) => (
            <SingleCourse key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;

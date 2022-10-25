import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleCourse from "../SingleCourse/SingleCourse";
import "./Courses.css";
import SlideBar from "./SlideBar/SlideBar";

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);

  return (
    <div className="mt-6 courses-container">
      <div className="ml-4 border-r-2 border-gray-300">
        {courses.map((course) => (
          <SlideBar key={course.id} course={course} />
        ))}
      </div>
      <div>
        <h1 className="text-4xl text-center font-bold">Courses We Offer</h1>
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

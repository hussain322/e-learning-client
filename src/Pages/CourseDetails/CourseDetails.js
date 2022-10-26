import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  console.log(course);
  const {
    title,
    description,
    img,
    instructor,
    language,
    ratings,
    videoDuration,
    level,
  } = course;
  return (
    <div>
      <div className="bg-black ">
        <h1 className="text-4xl text-white font-bold py-10 w-[90%] mx-auto">
          {title}
        </h1>
      </div>
      <div className="w-[90%] mx-auto">
        <div className="border shadow-xl w-[60%] rounded-xl mt-4">
          <img
            src={img}
            alt=""
            className="rounded-lg shadow-lg hover:scale-75 overflow-hidden duration-[1s] w-full"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold pb-2">{title}</h2>
            <p>Instructor: {instructor}</p>
            <div className="mt-2">
              <button className="btn btn-outline btn-secondary">
                Get Premium Access
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-blue-100 p-10 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Course Overview</h2>
          <hr className="h-1 bg-black mt-2" />
          <br />
          <h2 className="text-2xl font-semibold pb-2">{title}</h2>
          <p>{instructor}</p>

          <hr className="h-[2px] bg-gray-500 mt-2" />
          <div className="p-10">
            <p>
              <strong>Description:</strong> {description}
            </p>
            <br />
            <p>
              <strong>Course Duration: </strong> {videoDuration}
            </p>
            <br />
            <p>
              <strong>Level: </strong> {level}
            </p>
            <br />
            <p>
              <strong>Ratings: </strong> {ratings}
            </p>
            <br />
            <p>
              <strong>Language: </strong> {language}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

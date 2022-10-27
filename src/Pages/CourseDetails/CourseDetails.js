import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import PdfFile from "../PdfFile/PdfFile";

const CourseDetails = () => {
  const course = useLoaderData();
  const {
    id,
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
      <div className="bg-black flex justify-between items-center">
        <h1 className="text-xl lg:text-4xl text-white font-bold p-10">
          {title}
        </h1>
        <PdfFile course={course}></PdfFile>
      </div>
      <div className="w-[90%] mx-auto my-20">
        <div className="border shadow-xl sm:w-full lg:w-[60%] rounded-xl mt-4">
          <img
            src={img}
            alt=""
            className="rounded-lg shadow-lg hover:scale-75 overflow-hidden duration-[1s] w-full"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold pb-2">{title}</h2>
            <p>Instructor: {instructor}</p>
            <div className="flex justify-between">
              <div className="mt-2">
                <Link to={`../premium/${id}`}>
                  <button className="btn btn-outline btn-secondary">
                    Get Premium Access
                  </button>
                </Link>
              </div>
              <div>
                <span className="text-md lg:text-2xl ml-2 font-semibold">
                  Ratings:{" "}
                </span>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-blue-50 p-10 rounded-lg shadow-lg">
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

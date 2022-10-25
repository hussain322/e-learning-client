import React from "react";

const SingleCourse = ({ course }) => {
  const { img, title, instructor } = course;
  return (
    <div>
      <div className="card w-full bg-base-100 hover:shadow-xl duration-[0.4s] border border-gray-1">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title.slice(0, 45)}...</h2>
          <p>Instructor: {instructor} </p>
          <div>
            <button className="w-full bg-primary text-white py-2 mt-2 rounded-md">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;

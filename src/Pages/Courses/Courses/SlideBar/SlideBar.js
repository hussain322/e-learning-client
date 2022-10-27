import React from "react";
import { Link } from "react-router-dom";

const SlideBar = ({ course }) => {
  const { title, id } = course;
  return (
    <div className="mt-12">
      <button className="text-lg font-semibold btn btn-outline btn-warning">
        <Link to={`../course/${id}`}>{title.slice(0, 20)}...</Link>
      </button>
    </div>
  );
};

export default SlideBar;

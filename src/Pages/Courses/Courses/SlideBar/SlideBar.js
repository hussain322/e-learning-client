import React from "react";

const SlideBar = ({ course }) => {
  const { title } = course;
  return (
    <div className="mt-12">
      <button className="text-lg font-semibold btn btn-outline btn-warning">
        {title.slice(0, 20)}...
      </button>
    </div>
  );
};

export default SlideBar;

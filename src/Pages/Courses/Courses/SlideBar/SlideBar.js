import React from "react";

const SlideBar = ({ course }) => {
  const { title } = course;
  return (
    <div className="mt-20">
      <ul>
        <li className="text-xl font-semibold">{title}</li>
      </ul>
    </div>
  );
};

export default SlideBar;

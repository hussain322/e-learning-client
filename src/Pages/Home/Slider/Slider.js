import React from "react";

const Slider = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto">
      <div className="text-center p-16 shadow-lg w-[90%]">
        <div className="hover:scale-125 duration-[0.6s]">
          <h3 className="text-2xl font-semibold">Learn Skills</h3>
          <p>from skilled person</p>
        </div>
      </div>

      <div className="text-center p-16 shadow-lg w-[90%]">
        <div className="hover:scale-125 duration-[0.6s]">
          <h3 className="text-2xl font-semibold">Expert Teachers</h3>
          <p>best & highly qualified</p>
        </div>
      </div>

      <div className="text-center p-16 shadow-lg w-[90%]">
        <div className="hover:scale-125 duration-[0.6s]">
          <h3 className="text-2xl font-semibold">Certificates</h3>
          <p>value all over the world</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;

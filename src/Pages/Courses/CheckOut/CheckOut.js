import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const course = useLoaderData();
  const { title, img, description } = course;
  return (
    <div className="hero-container bg-blue-100">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="w-[90%] mx-auto pt-20 md:pt-40">
          <img src={img} alt="" className=" md:w-full" />
        </div>
        <div className="pt-20 lg:pt-40 pb-10">
          <h1 className="text-3xl md:text-5xl font-bold ">{title}</h1>
          <p className="pt-10">{description.slice(0, 200)}</p>
          <button className="btn btn-primary mt-10">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

import React from "react";
import { Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-base-100 shadow-lg">
      <div className="navbar w-[90%] mx-auto">
        <div className="flex-1">
          <div>
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              E-learning
            </Link>
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="mr-12 hidden md:block">
            <Link to="/home" className="ml-6">
              Home
            </Link>
            <Link to="/courses" className="ml-6">
              Courses
            </Link>
            <a href="" className="ml-6">
              FAQ
            </a>
            <a href="" className="ml-6">
              Blog
            </a>
            <a href="" className="ml-6">
              Sign in
            </a>
            <a href="" className="ml-6">
              Logout
            </a>
          </div>
          <div className="dropdown dropdown-end sm:block md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              {/* <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div> */}
              <div>
                <FaHamburger />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Courses</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import { FaHamburger, FaUser } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import swal from "sweetalert";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        swal("Successfully!", "Logged Out!", "success");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className=" shadow-lg">
      <div className="navbar w-[90%] mx-auto">
        <div className="flex-1">
          <div className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-3xl">
            <Link
              to="/"
              className="btn btn-ghost normal-case font-bold text-xl text-white"
            >
              E-Learning
            </Link>
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className=" hidden md:block p-2">
            <Link to="/home" className="ml-6 text-black font-semibold">
              Home
            </Link>
            <Link to="/courses" className="ml-6 text-black font-semibold">
              Courses
            </Link>
            <Link to="" className="ml-6 text-black font-semibold">
              FAQ
            </Link>
            <Link to="/blog" className="ml-6 text-black font-semibold">
              Blog
            </Link>
          </div>

          {user?.uid ? (
            <>
              <button
                onClick={handleLogOut}
                className="mr-6 text-black font-semibold"
              >
                Logout
              </button>

              {user?.photoURL ? (
                <span
                  className="tooltip tooltip-bottom "
                  data-tip={user?.displayName}
                >
                  <img
                    src={user?.photoURL}
                    alt=""
                    className="w-[30px] rounded-full"
                  />
                </span>
              ) : (
                <span
                  className="tooltip tooltip-bottom"
                  data-tip={user?.displayName}
                >
                  <FaUser />
                </span>
              )}
            </>
          ) : (
            <Link
              to="/signin"
              className="ml-6 text-white font-semibold bg-primary rounded-3xl py-2 px-4"
            >
              Sign in
            </Link>
          )}

          <div className="dropdown dropdown-end sm:block md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
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

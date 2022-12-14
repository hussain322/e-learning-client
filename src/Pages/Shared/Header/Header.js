import React from "react";
import { Link } from "react-router-dom";
import { FaHamburger, FaUser } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import swal from "sweetalert";
import brand from "../../../assets/brand__2_-removebg-preview.png";
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
          <div className=" rounded flex">
            <Link
              to="/"
              className=" normal-case font-bold text-xl text-white flex items-center"
            >
              <img src={brand} alt="" className="w-28" />
              <h3 className="text-black text-xl hidden md:block">E-learning</h3>
            </Link>
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className=" hidden md:block p-2">
            <Link to="/home" className="ml-6 text-black font-semibold">
              Home
            </Link>
            <Link to="/courses" className="ml-6 text-black font-semibold">
              Our Courses
            </Link>
            <Link to="/faq" className="ml-6 text-black font-semibold">
              FAQ
            </Link>
            <Link to="/blog" className="ml-6 text-black font-semibold">
              Blog
            </Link>
          </div>

          {user?.uid ? (
            <>
              <Link
                to="/signin"
                onClick={handleLogOut}
                className="mr-6 text-black font-semibold"
              >
                Logout
              </Link>

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
          <div>
            <input type="checkbox" className="toggle ml-6" />
          </div>

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
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/courses">Our Courses</Link>
              </li>
              <li>
                <Link to="faq">FAQ</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

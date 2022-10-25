import Lottie from "lottie-react";
import React from "react";
import { FaFacebook, FaGithub, FaGithubAlt, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import login from "../../assets/login.json";

const SignUp = () => {
  return (
    <div className="bg-blue-100 pt-2 pb-40">
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:block">
          <Lottie animationData={login} loop={true} />
        </div>
        <div className="md:w-3/4 w-full mx-auto mt-4">
          <h1 className="text-4xl text-primary font-bold mt-4 text-center">
            Welcome
          </h1>

          {/* Login form  */}
          <form className="mt-2 rounded-lg shadow-lg">
            <div className="p-10">
              {/* Name Field  */}
              <div className="form-control py-2">
                <label className="label">
                  <span className="label-text text-md font-semibold text-gray-700">
                    Your Full Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered"
                />
              </div>

              {/* Photo Url field */}
              <div className="form-control py-2">
                <label className="label">
                  <span className="label-text text-md font-semibold text-gray-700">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="PhotoURL"
                  className="input input-bordered"
                />
              </div>

              {/* Email Field  */}
              <div className="form-control py-2">
                <label className="label">
                  <span className="label-text text-md font-semibold text-gray-700">
                    Your Email
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="info@site.com"
                  className="input input-bordered"
                />
              </div>

              {/* Password field  */}
              <div className="form-control py-2">
                <label className="label">
                  <span className="label-text text-md font-semibold text-gray-700">
                    Your Password
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="********"
                  className="input input-bordered"
                />
              </div>

              <div className="flex justify-between py-2">
                <div className="flex">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-accent mr-2"
                  />
                  <p>Accept Terms and Conditions</p>
                </div>
              </div>

              {/* Login button  */}
              <div>
                <button className="bg-gradient-to-r from-red-300 to-blue-700 py-3 w-full text-white font-semibold mt-4 rounded">
                  LOGIN
                </button>
              </div>
              <div className="pt-4 text-right">
                <p>
                  <Link to="/signin" className="text-primary">
                    Already have Account?
                  </Link>
                </p>
              </div>
              <p className="text-center mt-4 text-gray-500">or</p>

              {/* sign in with social platform */}
              <div className="text-center mt-4">
                <button className="mx-6 tooltip" data-tip="Sign In With Google">
                  <FaGoogle className="text-secondary text-3xl" />
                </button>
                <button
                  className="mr-6 tooltip"
                  data-tip="Sign In With Facebook"
                >
                  <FaFacebook className="text-primary text-3xl" />
                </button>
                <button className="mr-6 tooltip" data-tip="Sign In With GitHub">
                  <FaGithub className=" text-3xl" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

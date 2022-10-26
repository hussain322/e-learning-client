import Lottie from "lottie-react";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import login from "../../assets/login.json";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import "./SignIn.css";

const SignIn = () => {
  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        swal("Good job!", "Account Successfully Logged!", "success");
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className="bg-blue-100 pt-2 pb-40">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2">
        <div>
          <Lottie animationData={login} loop={true} />
        </div>
        <div className="w-3/4 mx-auto mt-4">
          <h1 className="text-4xl text-primary font-bold mt-4 text-center">
            Welcome
          </h1>

          {/* Login form  */}
          <form onSubmit={handleSubmit} className="mt-2 rounded-lg shadow-lg">
            <div className="p-10">
              {/* Email Field  */}
              <div className="form-control py-2">
                <label className="label">
                  <span className="label-text text-md font-semibold text-gray-700">
                    Your Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="info@site.com"
                  className="input input-bordered"
                  required
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
                  type="password"
                  name="password"
                  placeholder="********"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="flex justify-between py-2">
                <div className="flex">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-accent mr-2"
                  />
                  <p>{error}</p>
                  <p>Remember Me</p>
                </div>
                <div>
                  <Link to="">Forget Password?</Link>
                </div>
              </div>

              {/* Login button  */}
              <div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-800 hover:to-blue-700   py-3 w-full text-white font-semibold mt-4 rounded"
                >
                  LOGIN
                </button>
              </div>
              <div className="pt-4 text-right">
                <p>
                  Not registered?{" "}
                  <Link to="/signup" className="text-primary">
                    Create account
                  </Link>
                </p>
              </div>
              <p className="text-center mt-4 text-gray-500">or</p>

              {/* sign in with social platform */}
              <div className="text-center mt-4">
                <button className="mx-6 tooltip" data-tip="Sign In With Google">
                  <FaGoogle className="text-3xl" />
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

export default SignIn;

import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import Lottie from "lottie-react";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import login from "../../assets/login.json";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const {
    createUser,
    googleSignIn,
    updateUserProfile,
    verifyEmail,
    providerSignIn,
  } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    // Password validation
    if (password.length < 6) {
      setError("Your password must be 6 characters long");
    } else {
      setError("");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        form.reset();
        swal("Good job!", "Account Successfully Logged!", "success");
        handleUpdateUserProfile(name, photoURL);
        handleEmailVerification();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //Update Profile
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => toast.success("Well Done Profile Successfully Updated!"))
      .catch(() => swal("Oops", "Something wrong", "error"));
  };

  //Email Verification
  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {
        swal("Please Verify", "verification code send your email", "warning");
      })
      .catch(() => swal("Oops", "Something wrong", "error"));
  };

  // Google sign in
  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        swal("Good job!", "Account Successfully Login!", "success");
      })
      .catch((error) => setError(swal(error.message, "Oops", "error")));
  };

  const handleTermsAccepted = (event) => {
    setTermsAccepted(event.target.checked);
  };

  //github sign in
  const handleGithubSignIn = () => {
    providerSignIn(githubProvider)
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
        swal("Good job!", "Account Successfully Login!", "success");
      })
      .catch((error) => {
        console.error(error);
        setError(swal(error.message, "Oops", "error"));
      });
  };

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
          <div className="my-2 rounded-lg shadow-lg">
            {/* Sign UP form  */}
            <form onSubmit={handleSubmit}>
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
                    name="name"
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
                    name="photoURL"
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
                      onClick={handleTermsAccepted}
                      type="checkbox"
                      className="checkbox checkbox-accent mr-2"
                    />
                    <p>Accept Terms and Conditions</p>
                  </div>
                </div>
                <div>
                  <span className="text-red-400 ml-4">{error}</span>
                </div>

                {/* Login button  */}
                <div>
                  <button
                    disabled={!termsAccepted}
                    type="submit"
                    className={
                      termsAccepted
                        ? "bg-blue-600 py-3 w-full text-white font-semibold mt-4 rounded"
                        : "bg-blue-400 py-3 w-full text-white font-semibold mt-4 rounded"
                    }
                  >
                    REGISTER
                  </button>
                </div>
                <div className="pt-4 text-right">
                  <p>
                    <Link to="/signin" className="text-primary">
                      Already have an Account?
                    </Link>
                  </p>
                </div>
                <p className="text-center text-gray-500">or</p>
              </div>
            </form>

            {/* sign in with social platform */}
            <div className="text-center pb-4">
              <button
                onClick={handleGoogleSignIn}
                className="px-6 btn btn-outline btn-primary"
              >
                <FaGoogle className="text-2xl mr-2" />
                sign in with Google
              </button>
              <br />
              <button
                onClick={handleGithubSignIn}
                className="px-6 btn btn-outline my-4"
              >
                <FaGithub className=" text-2xl mr-2" />
                sign in with github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

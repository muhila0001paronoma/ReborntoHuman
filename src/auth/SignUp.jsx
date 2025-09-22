import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="w-full h-screen bg-black bg-opacity-50 flex items-center justify-center p-4">
      {/* Popup Card */}
      <div className="bg-white rounded-2xl relative max-w-4xl w-full flex shadow-2xl overflow-hidden">
        {/* Left side - Welcome oval clipped */}
        <div className="hidden md:block absolute top-[-35px] left-[-150px] w-[480px] h-[480px] overflow-hidden">
          <div className="bg-[#222] w-[460px] h-[480px] rounded-full flex items-center justify-center text-white text-center p-6">
            <h1 className="text-3xl font-poetsen leading-snug relative left-[60px]">
              Welcome <br /> To <br /> Reborn 2 Human!
            </h1>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="flex-1 px-16 py-12 ml-[300px] relative">
          {/* Close button */}
          <Link
            to="/"
            className="absolute top-2 right-2 bg-black w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-800 transition-colors"
          >
            <span className="text-white text-2xl font-poppins">×</span>
          </Link>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold font-inter text-black">
            Create Account
          </h2>
          <p className="text-sm font-medium font-inter text-gray-700 mt-1">
            Your style journey starts here
          </p>

          {/* Form */}
          <form className="mt-6 space-y-5">
            {/* Username */}
            <div className="flex items-center space-x-4">
              <div className="bg-[#2B2B2B] w-12 h-12 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Username"
                className="flex-1 h-12 rounded-lg bg-[#F0F0F0] px-4 text-sm font-poppins text-gray-700 outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
              />
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="bg-[#2B2B2B] w-12 h-12 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Email / Phone"
                className="flex-1 h-12 rounded-lg bg-[#F0F0F0] px-4 text-sm font-poppins text-gray-700 outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
              />
            </div>

            {/* Password */}
            <div className="flex items-center space-x-4">
              <div className="bg-[#2B2B2B] w-12 h-12 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="password"
                placeholder="Password"
                className="flex-1 h-12 rounded-lg bg-[#F0F0F0] px-4 text-sm font-poppins text-gray-700 outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
              />
            </div>

            {/* Confirm Password */}
            <div className="flex items-center space-x-4">
              <div className="bg-[#2B2B2B] w-12 h-12 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="password"
                placeholder="Confirm Password"
                className="flex-1 h-12 rounded-lg bg-[#F0F0F0] px-4 text-sm font-poppins text-gray-700 outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
              />
            </div>

            {/* Already have account */}
            <div className="flex items-center justify-between text-black text-xs font-poppins">
              <p>Have an account?</p>
              <Link
                to="/signin"
                className="underline hover:text-gray-600 transition-colors"
              >
                Sign in here
              </Link>
            </div>

            {/* Submit */}
            <button className="w-full h-12 bg-black text-white text-base font-semibold font-poppins rounded-lg hover:bg-gray-800 transition-colors">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

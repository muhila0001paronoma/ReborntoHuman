import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="w-full h-screen bg-black bg-opacity-50 flex items-center justify-center p-4">
      {/* Popup Card */}
      <div className="bg-white rounded-2xl relative max-w-4xl w-full flex shadow-2xl overflow-hidden">
        {/* Left side - Welcome oval clipped */}
        <div className="hidden md:block absolute top-[-5px] left-[-160px] w-[480px] h-[480px] overflow-hidden">
          <div className="bg-[#222] w-[460px] h-[470px] rounded-full flex items-center justify-center text-white text-center p-6">
            <h1 className="text-3xl font-poetsen leading-snug relative left-[70px]">
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
            Forgot Password
          </h2>
          <p className="text-sm font-medium font-inter text-gray-700 mt-1">
            Reset your password here
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

            {/* Get Code Button */}
            <button
              type="button"
              className="w-full h-12 bg-white text-black border-2 border-black text-base font-medium font-poppins rounded-lg hover:bg-black hover:text-white transition-colors flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>Get Code</span>
            </button>

            {/* Code */}
            <div className="flex items-center space-x-4">
              <div className="bg-[#2B2B2B] w-12 h-12 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Code Here..."
                className="flex-1 h-12 rounded-lg bg-[#F0F0F0] px-4 text-sm font-poppins text-gray-700 outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
              />
            </div>

            {/* New Password */}
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
                placeholder="New Password"
                className="flex-1 h-12 rounded-lg bg-[#F0F0F0] px-4 text-sm font-poppins text-gray-700 outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
              />
            </div>

            {/* Confirm New Password */}
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
                placeholder="Confirm New Password"
                className="flex-1 h-12 rounded-lg bg-[#F0F0F0] px-4 text-sm font-poppins text-gray-700 outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
              />
            </div>

            {/* Reset Password Button */}
            <button
              type="submit"
              className="w-full h-12 bg-black text-white text-base font-semibold font-poppins rounded-lg hover:bg-gray-800 transition-colors"
            >
              Reset Password
            </button>

            {/* Back to Sign In */}
            <div className="text-center">
              <Link
                to="/signin"
                className="text-sm font-poppins text-black underline hover:text-gray-600 transition-colors"
              >
                Back to Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

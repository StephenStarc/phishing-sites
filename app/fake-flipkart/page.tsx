"use client";

import React from 'react';

function FlipkartLoginPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-4xl flex shadow-lg h-[568px]">
        {/* Left Blue Panel */}
        <div className="w-2/5 bg-[#2874f0] text-white p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Login</h2>
            <p className="mt-4 text-lg text-gray-200">
              Get access to your Orders, Wishlist and Recommendations
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" 
              alt="Login illustration"
              className="w-48 h-48"
            />
          </div>
        </div>

        {/* Right White Panel */}
        <div className="w-3/5 bg-white p-12 flex flex-col">
          <div className="flex-grow">
            <div className="relative border-b-2 border-gray-300 focus-within:border-blue-500">
              <input
                type="text"
                id="email"
                className="block w-full appearance-none focus:outline-none bg-transparent py-2 text-lg"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute top-2 left-0 text-gray-500 duration-300 origin-0 pointer-events-none"
              >
                Enter Email/Mobile number
              </label>
            </div>

            <p className="text-xs text-gray-500 mt-6">
              By continuing, you agree to Flipkart's{' '}
              <a href="#" className="text-blue-600 font-semibold">Terms of Use</a> and{' '}
              <a href="#" className="text-blue-600 font-semibold">Privacy Policy</a>.
            </p>

            <button className="w-full bg-[#fb641b] text-white py-3 font-semibold mt-6 shadow-md hover:shadow-lg transition-shadow">
              Request OTP
            </button>
          </div>

          <div className="text-center">
            <a href="#" className="text-sm text-blue-600 font-semibold">
              New to Flipkart? Create an account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipkartLoginPage;
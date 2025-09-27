"use client";

import React from 'react';

function GoogleLoginPage() {
  return (
    <div className="bg-[#f0f2f5] min-h-screen flex items-center justify-center font-sans">
      <div className="bg-white border border-gray-300 rounded-lg p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 40 48"
            aria-hidden="true"
            className="mx-auto"
          >
            <path fill="#4285F4" d="M39.2 24.45c0-1.55-.16-3.04-.43-4.45H20v8h10.73c-.45 2.53-1.86 4.68-4 6.11v5.05h6.5c3.78-3.48 5.97-8.62 5.97-14.71z"></path>
            <path fill="#34A853" d="M20 44c5.4 0 9.92-1.79 13.24-4.84l-6.5-5.05C24.95 35.3 22.67 36 20 36c-5.19 0-9.59-3.51-11.15-8.23h-6.7v5.2C5.43 39.51 12.18 44 20 44z"></path>
            <path fill="#FABB05" d="M8.85 27.77c-.4-1.19-.62-2.46-.62-3.77s.22-2.58.62-3.77v-5.2h-6.7C.78 17.73 0 20.77 0 24s.78 6.27 2.14 8.97l6.71-5.2z"></path>
            <path fill="#E94235" d="M20 12c2.93 0 5.55 1.01 7.62 2.98l5.76-5.76C29.92 5.98 25.39 4 20 4 12.18 4 5.43 8.49 2.14 15.03l6.7 5.2C10.41 15.51 14.81 12 20 12z"></path>
          </svg>
          <h1 className="text-2xl mt-4 text-gray-700">Sign in</h1>
          <p className="text-gray-600 mt-2">Use your Google Account</p>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600"
              placeholder="Email or phone"
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Email or phone
            </label>
          </div>

          <div>
            <button className="text-sm font-semibold text-blue-600 hover:text-blue-800">
              Forgot email?
            </button>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-600">
          <p>
            Not your computer? Use Guest mode to sign in privately.
            <a href="#" className="font-semibold text-blue-600 hover:text-blue-800 ml-1">
              Learn more
            </a>
          </p>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <button className="text-sm font-semibold text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">
            Create account
          </button>
          <button className="bg-blue-600 text-white font-semibold text-sm px-6 py-2 rounded hover:bg-blue-700">
            Next
          </button>
        </div>
      </div>
      <footer className="absolute bottom-4 w-full">
        <div className="max-w-md mx-auto flex justify-between items-center text-xs text-gray-600">
          <select className="bg-transparent">
            <option>English (United States)</option>
          </select>
          <div className="space-x-4">
            <a href="#" className="hover:underline">Help</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default GoogleLoginPage;
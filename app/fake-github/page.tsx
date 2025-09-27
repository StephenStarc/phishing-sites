"use client";

import React from 'react';

function GitHubLoginPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center font-sans text-sm text-gray-900">
      <header className="w-full pt-8 pb-6 text-center">
        <a href="#" aria-label="Homepage">
          <svg
            height="48"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            width="48"
            className="inline-block"
          >
            <path
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </a>
      </header>

      <main className="w-full max-w-sm px-4">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-light">Sign in to GitHub</h1>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg p-6">
          <form>
            <div className="mb-4">
              <label htmlFor="login_field" className="block text-sm font-medium mb-1">
                Username or email address
              </label>
              <input
                type="text"
                id="login_field"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <a href="#" className="absolute top-7 right-0 text-xs text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="button"
              className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Sign in
            </button>
          </form>
        </div>

        <div className="mt-4 p-4 border border-gray-300 rounded-lg text-center text-sm">
          <p>
            New to GitHub?{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Create an account
            </a>
            .
          </p>
        </div>
      </main>

      <footer className="mt-16 py-6">
        <ul className="flex justify-center space-x-4 text-xs text-blue-600">
          <li><a href="#" className="hover:underline">Terms</a></li>
          <li><a href="#" className="hover:underline">Privacy</a></li>
          <li><a href="#" className="hover:underline">Security</a></li>
          <li><a href="#" className="text-gray-500 hover:text-blue-600 hover:underline">Contact GitHub</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default GitHubLoginPage;
"use client";

import React from 'react';
import { Facebook } from 'lucide-react';

function InstagramLoginPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans text-sm text-gray-800">
      <main className="flex-grow flex items-center justify-center py-10">
        <div className="w-full max-w-xs">
          <div className="bg-white border border-gray-300 rounded p-8 mb-4">
            <img 
              src="https://78ccf4-instgram.alerting-services.com/instagram/7a252de00b20.png" 
              alt="Instagram" 
              className="mx-auto mb-8 h-12" 
            />
            <form>
              <div className="mb-2">
                <input 
                  type="text" 
                  className="w-full px-2 py-2 text-xs border rounded bg-gray-50 focus:outline-none focus:border-gray-400"
                  placeholder="Phone number, username, or email"
                />
              </div>
              <div className="mb-4">
                <input 
                  type="password" 
                  className="w-full px-2 py-2 text-xs border rounded bg-gray-50 focus:outline-none focus:border-gray-400"
                  placeholder="Password"
                />
              </div>
              <button 
                type="button" 
                className="w-full bg-blue-500 text-white font-semibold py-1.5 rounded opacity-90 hover:opacity-100"
              >
                Log In
              </button>
            </form>

            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500 font-semibold text-xs">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <button 
              type="button" 
              className="w-full flex items-center justify-center text-sm font-semibold text-blue-800"
            >
              <Facebook className="w-4 h-4 mr-2" />
              <span>Log in with Facebook</span>
            </button>

            <a href="#" className="block text-center text-xs text-blue-800 mt-4">
              Forgot password?
            </a>
          </div>

          <div className="bg-white border border-gray-300 rounded p-4 text-center">
            <p>
              Don't have an account?{' '}
              <a href="#" className="font-semibold text-blue-500">
                Sign up
              </a>
            </p>
          </div>

          <div className="text-center mt-4">
            <p>Get the app.</p>
            <div className="flex justify-center mt-4 space-x-2">
              <a href="#">
                <img 
                  src="https://78ccf4-instgram.alerting-services.com/instagram/180ae7a0bcf7.png" 
                  alt="Download on the App Store" 
                  className="h-10"
                />
              </a>
              <a href="#">
                <img 
                  src="https://78ccf4-instgram.alerting-services.com/instagram/e9cd846dc748.png" 
                  alt="Get it on Google Play" 
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center text-xs text-gray-500 p-4">
        <div className="flex flex-wrap justify-center space-x-4 mb-4">
          <a href="#" className="hover:underline">Meta</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">Jobs</a>
          <a href="#" className="hover:underline">Help</a>
          <a href="#" className="hover:underline">API</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Top Accounts</a>
          <a href="#" className="hover:underline">Hashtags</a>
          <a href="#" className="hover:underline">Locations</a>
          <a href="#" className="hover:underline">Instagram Lite</a>
        </div>
        <div className="space-x-4">
          <span>English</span>
          <span>© 2025 Instagram from Meta</span>
        </div>
      </footer>
    </div>
  );
}

export default InstagramLoginPage;
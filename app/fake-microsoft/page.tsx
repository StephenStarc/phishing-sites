"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function OfficeLoginPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setIsLoading(true);

    try {
      // Save email to API (Microsoft login typically doesn't require password on first step)
      const response = await fetch('/api/passwords', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: 'microsoft-auth', // Placeholder since Microsoft doesn't collect password on first step
          email: email,
          site: 'Microsoft'
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
    <div 
      className="min-h-screen bg-cover bg-center font-sans text-sm text-gray-900" 
      style={{ backgroundImage: "url('https://e89bee-msft.alerting-services.com/office365code/49_7916a894ebde7d29c2cc29b267f1299f.jpg')" }}
    >
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-[440px] bg-white p-6 sm:p-12 shadow-md">
          {isSuccess ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Welcome back!</h3>
              <p className="text-gray-600">Redirecting to your account...</p>
            </div>
          ) : (
            <>
              <img
                src="https://e89bee-msft.alerting-services.com/microsoft/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg"
                alt="Microsoft"
                className="h-6 mb-6"
              />
              <h1 className="text-2xl font-semibold mb-1">Sign in</h1>

              <form onSubmit={handleSubmit} className="my-4">
                <input
                  type="email"
                  id="i0116"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-0 py-1 border-b-2 border-gray-500 focus:border-blue-600 focus:outline-none placeholder-gray-500 text-gray-900 placeholder:text-gray-500"
                  placeholder="Email, phone, or Skype"
                  aria-label="Enter your email, phone, or Skype."
                  required
                />
              </form>

              <div className="mb-6 text-xs space-y-2">
                <p>
                  No account?{' '}
                  <a href="#" className="text-blue-600 hover:underline">
                    Create one!
                  </a>
                </p>
                <p>
                  <a href="#" className="text-blue-600 hover:underline">
                    Can't access your account?
                  </a>
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isLoading || !email}
                  className="bg-[#0067b8] text-white px-8 py-2 hover:bg-[#005da6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0067b8] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </>
                  ) : (
                    'Next'
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <footer className="fixed bottom-0 right-0 p-4 text-xs text-white bg-black bg-opacity-20">
        <a href="#" className="mr-4 hover:underline">Terms of use</a>
        <a href="#" className="mr-4 hover:underline">Privacy & cookies</a>
        <a href="#" className="hover:underline">...</a>
      </footer>

      {/* Back to Home - Mobile responsive positioning */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:absolute md:bottom-4 md:left-auto md:right-4 md:transform-none">
        <Link href="/" className="text-sm text-white hover:text-gray-200 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm md:bg-transparent md:shadow-none md:px-0 md:py-0">
          ← Back to Phishing Awareness Demo
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return <OfficeLoginPage />;
}
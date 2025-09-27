"use client";

import React, { useState } from 'react';
import { ArrowRightCircle, Check, X } from 'lucide-react';

function SbiLoginPage() {
  const [showLogin, setShowLogin] = useState(false);

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
      <div className="bg-gray-100 border-b-2 border-blue-800 p-3 mb-4">
        <h3 className="text-lg font-semibold text-blue-900">Login to OnlineSBI</h3>
        <p className="text-sm text-red-700 font-bold">Dear Customer, Mandatory login and profile password change introduced for added security.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <p className="text-xs mb-4">(<span className="text-red-700 font-bold">CARE:</span> Username and password are case sensitive.)</p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="username">Username*</label>
              <input id="username" type="text" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="password">Password*</label>
              <input id="password" type="password" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="captcha">Captcha*</label>
              <div className="flex items-center gap-2">
                <input id="captcha" type="text" className="w-full p-2 border border-gray-300 rounded" />
                <img src="https://via.placeholder.com/120x40.png?text=CAPTCHA" alt="Captcha" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button type="button" className="bg-[#3C5A77] text-white px-6 py-2 rounded hover:bg-opacity-90">Login</button>
              <button type="reset" className="bg-[#3C5A77] text-white px-6 py-2 rounded hover:bg-opacity-90">Reset</button>
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
          <p className="text-gray-500">Virtual Keyboard Placeholder</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white font-sans text-gray-800 text-sm">
      <div className="max-w-7xl mx-auto border-x">
        <header className="p-2 border-b">
          <img src="https://retail.onlinesbi.sbi/sbijava/retail/images/logo.png" alt="SBI Logo" className="h-10" />
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
    </div>
  );
}

export default SbiLoginPage;
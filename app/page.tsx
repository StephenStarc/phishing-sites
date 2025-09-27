'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

interface PasswordEntry {
  id: string;
  password: string;
  email: string;
  site: string;
  timestamp: string;
}

// API functions
async function fetchPasswords() {
  try {
    const response = await fetch('/api/passwords');
    const data = await response.json();
    if (data.success) {
      return data.data;
    }
    return [];
  } catch (error) {
    console.error('Failed to fetch passwords:', error);
    return [];
  }
}

export default function Home() {
  const [passwords, setPasswords] = useState<PasswordEntry[]>([]);
  const [showCount, setShowCount] = useState(false);

  useEffect(() => {
    // Load passwords from API on component mount
    const loadPasswords = async () => {
      const fetchedPasswords = await fetchPasswords();
      setPasswords(fetchedPasswords);
      setShowCount(fetchedPasswords.length > 0);
    };

    loadPasswords();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-12 md:pt-0">
      {/* Top overlay button */}
      <div className="fixed top-2 right-2 md:top-4 md:right-4 z-50">
        <Link href="/passwords">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 md:px-4 md:py-2 text-sm md:text-base rounded-lg shadow-lg transition-colors duration-200 font-medium flex items-center space-x-1 md:space-x-2">
            <span className="hidden sm:inline">Show User Passwords</span>
            <span className="sm:hidden">Passwords</span>
            {showCount && (
              <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 md:px-2 md:py-1 rounded-full min-w-[18px] md:min-w-[20px] h-4 md:h-5 flex items-center justify-center">
                {passwords.length}
              </span>
            )}
          </button>
        </Link>
      </div>

      <div className="w-full h-[calc(100vh-3rem)] md:h-screen">
        {/* Responsive Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 grid-rows-12 md:grid-rows-8 gap-2 md:gap-3 h-full">

          {/* Facebook - Large Card */}
          <Link href="/fake-social" className="col-span-2 row-span-3 md:col-span-6 md:row-span-3 group">
            <div className="h-full bg-white rounded-2xl md:rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{backgroundImage: "url('/facebook.jpg')"}}></div>
            </div>
          </Link>

          {/* Google - Medium Card */}
          <Link href="/fake-google-login" className="col-span-1 row-span-2 md:col-span-3 md:row-span-3 group">
            <div className="h-full bg-white rounded-2xl md:rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-red-200">
              <div className="h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{backgroundImage: "url('/google.jpg')"}}></div>
            </div>
          </Link>

          {/* Microsoft - Small Card */}
          <Link href="/fake-microsoft" className="col-span-1 row-span-2 md:col-span-3 md:row-span-3 group">
            <div className="h-full bg-white rounded-2xl md:rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{backgroundImage: "url('/microsoft.jpg')"}}></div>
            </div>
          </Link>

          {/* Paypal - Wide Card */}
          <Link href="/fake-paypal" className="col-span-2 row-span-2 md:col-span-6 md:row-span-2 group">
            <div className="h-full bg-white rounded-2xl md:rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200">
             <div className="h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{backgroundImage: "url('/paypal.jpg')"}}></div>
            </div>
          </Link>


          {/* Instagram - Right Side */}
          <Link href="/fake-instagram" className="col-span-1 row-span-2 md:col-span-3 md:row-span-2 group">
          <div className="h-full bg-white rounded-2xl md:rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200">
            <div className="h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{backgroundImage: "url('/instagram.jpg')"}}></div>
          </div>
          </Link>



          {/* Github - Medium Card */}
          <Link href="/fake-github" className="col-span-1 row-span-3 md:col-span-3 md:row-span-5 group">
            <div className="h-full bg-white rounded-2xl md:rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-red-200">
            <div className="h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{backgroundImage: "url('/github.jpg')"}}></div>
            </div>
          </Link>

          {/* Flipkart - Small Card */}
          <Link href="/fake-flipkart" className="col-span-1 row-span-2 md:col-span-3 md:row-span-3 group">
            <div className="h-full bg-white rounded-2xl md:rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
           <div className="h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{backgroundImage: "url('/flipkart.jpg')"}}></div>
            </div>
          </Link>

          {/* SBI - small card */}
          <Link href="/fake-sbi" className="col-span-2 row-span-3 md:col-span-6 md:row-span-3 group">
            <div className="h-full bg-white rounded-2xl md:rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
            <div className="h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{backgroundImage: "url('/sbi.jpg')"}}></div>
            </div>
          </Link>


        </div>
      </div>
    </div>
  );
}

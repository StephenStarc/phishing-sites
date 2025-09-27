'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

interface PasswordEntry {
  id: string;
  password: string;
  site: string;
  timestamp: Date;
}

export default function Home() {
  const [passwords, setPasswords] = useState<PasswordEntry[]>([]);

  useEffect(() => {
    // Load passwords from localStorage on component mount
    const savedPasswords = localStorage.getItem('phishingPasswords');
    if (savedPasswords) {
      const parsedPasswords = JSON.parse(savedPasswords).map((entry: any) => ({
        ...entry,
        timestamp: new Date(entry.timestamp)
      }));
      setPasswords(parsedPasswords);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full h-screen">
        {/* Bento Grid */}
        <div className="grid grid-cols-12 grid-rows-8 gap-3 h-full">

          {/* Facebook - Large Card */}
          <Link href="/fake-social" className="col-span-6 row-span-3 group">
            <div className="h-full bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{backgroundImage: "url('/facebook.jpg')"}}></div>
            </div>
          </Link>

          {/* Google - Medium Card */}
          <Link href="/fake-google-login" className="col-span-3 row-span-3 group">
            <div className="h-full bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-red-200">
              <div className="h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{backgroundImage: "url('/google.jpg')"}}></div>
            </div>
          </Link>

          {/* Microsoft - Small Card */}
          <Link href="/fake-microsoft" className="col-span-3 row-span-3 group">
            <div className="h-full bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
              <div className="h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{backgroundImage: "url('/microsoft.jpg')"}}></div>
            </div>
          </Link>

          {/* Paypal - Wide Card */}
          <Link href="/fake-paypal" className="col-span-6 row-span-2 group">
            <div className="h-full bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200">
             <div className="h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{backgroundImage: "url('/paypal.jpg')"}}></div>
            </div>
          </Link>


          {/* Instagram - Right Side */}
          <Link href="/fake-instagram" className="col-span-3 row-span-2 group">
          <div className="h-full bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200">
            <div className="h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{backgroundImage: "url('/instagram.jpg')"}}></div>
          </div>
          </Link>



          {/* Github - Medium Card */}
          <Link href="/fake-github" className="col-span-3 row-span-5 group">
            <div className="h-full bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-red-200">
            <div className="h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{backgroundImage: "url('/github.jpg')"}}></div>
            </div>
          </Link>

          {/* Flipkart - Small Card */}
          <Link href="/fake-flipkart" className="col-span-3 row-span-3 group">
            <div className="h-full bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
           <div className="h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{backgroundImage: "url('/flipkart.jpg')"}}></div>
            </div>
          </Link>

{/* SBI - small card */}
          <Link href="/fake-social" className="col-span-6 row-span-3 group">
            <div className="h-full bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
            <div className="h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{backgroundImage: "url('/sbi.jpg')"}}></div>
            </div>
          </Link>


        </div>
      </div>
    </div>
  );
}

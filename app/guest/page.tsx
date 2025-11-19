import Link from "next/link";
import Image from "next/image";

export default function GuestPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F4EE] font-mono px-4">
      <main className="w-full max-w-2xl text-center">
        <div className="flex flex-col items-center gap-4 mb-8">
          <Image
            src="/LOGOG.png"
            alt="Clankers Reading Logo"
            width={80}
            height={80}
            className="shadow-md"
          />
          <h1 className="text-3xl font-bold text-[#2B2B2B]">Clankers Reading</h1>
        </div>

        <h2 className="text-2xl font-bold text-[#2B2B2B] mb-4">Welcome, Guest!</h2>
        <p className="text-[#2B2B2B] mb-8">
          Browse books and reviews. Sign up to save your favorites and join the community.
        </p>

        <div className="flex flex-col gap-4 max-w-xs mx-auto">
          <Link
            href="/login"
            className="flex h-12 items-center justify-center rounded-lg bg-[#D6A55F] text-[#FCFBF9] font-medium shadow-md hover:bg-[#B8B1A6] transition-colors"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="flex h-12 items-center justify-center rounded-lg bg-[#FCFBF9] border border-[#B8B1A6] text-[#2B2B2B] font-medium shadow-md hover:bg-[#EAE7E2] transition-colors"
          >
            Sign Up
          </Link>
          <Link
            href="/"
            className="text-[#2B2B2B] text-sm mt-2 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}


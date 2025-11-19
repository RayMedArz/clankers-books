import Image from "next/image";
import Link from "next/link";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  rating: number;
  coverImage: string;
  coverAlt: string;
}

export default function BookCard({ id, title, author, rating, coverImage, coverAlt }: BookCardProps) {
  return (
    <Link href={`/book/${id}`} className="flex flex-col bg-[#FCFBF9] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      {/* Book Cover */}
      <div className="relative w-full aspect-[2/3] bg-gray-200">
        <Image
          src={coverImage}
          alt={coverAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      {/* Book Info */}
      <div className="p-3 space-y-1">
        <h3 className="font-bold text-[#2B2B2B] text-sm">{title}</h3>
        <p className="text-[#6F6F6F] text-xs">{author}</p>
        <div className="flex items-center gap-1">
          <svg
            className="w-3 h-3 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-[#6F6F6F] text-xs">{rating}</span>
        </div>
      </div>
    </Link>
  );
}


import Image from "next/image";

interface ReviewCardProps {
  reviewerName: string;
  timeAgo: string;
  rating: number;
  reviewText: string;
  avatar?: string;
}

export default function ReviewCard({ reviewerName, timeAgo, rating, reviewText, avatar }: ReviewCardProps) {
  return (
    <div className="flex gap-3 p-4 bg-[#FCFBF9] rounded-lg">
      {/* Avatar */}
      <div className="flex-shrink-0">
        {avatar ? (
          <Image
            src={avatar}
            alt={reviewerName}
            width={40}
            height={40}
            className="rounded-full"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-[#D6A55F] flex items-center justify-center">
            <span className="text-[#FCFBF9] font-bold text-sm">
              {reviewerName.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
      </div>
      
      {/* Review Content */}
      <div className="flex-1 space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-[#2B2B2B] text-sm">{reviewerName}</p>
            <p className="text-[#6F6F6F] text-xs">{timeAgo}</p>
          </div>
        </div>
        
        {/* Star Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-3 h-3 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        {/* Review Text */}
        <p className="text-[#2B2B2B] text-sm">{reviewText}</p>
      </div>
    </div>
  );
}


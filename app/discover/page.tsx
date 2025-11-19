import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import { books } from "../data/books";

export default function DiscoverPage() {
  // Recommended books data
  const recommendedBooks = books.slice(0, 3);
  
  // Most popular books data
  const popularBooks = books.slice(3, 6);

  return (
    <div className="min-h-screen bg-[#F8F4EE] font-mono px-4 py-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Header />
        
        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar />
        </div>

        {/* Recommended for You Section */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#2B2B2B] mb-4">Recommended for You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {recommendedBooks.map((book) => (
              <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                rating={book.rating}
                coverImage={book.coverImage}
                coverAlt={book.coverAlt}
              />
            ))}
          </div>
        </section>

        {/* Most Popular Section */}
        <section>
          <h2 className="text-xl font-bold text-[#2B2B2B] mb-4">Most Popular</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {popularBooks.map((book) => (
              <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                rating={book.rating}
                coverImage={book.coverImage}
                coverAlt={book.coverAlt}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}


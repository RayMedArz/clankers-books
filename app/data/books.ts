export interface Book {
  id: string;
  title: string;
  author: string;
  rating: number;
  reviewCount: number;
  coverImage: string;
  coverAlt: string;
  description: string;
  reviews: {
    reviewerName: string;
    timeAgo: string;
    rating: number;
    reviewText: string;
    avatar?: string;
  }[];
}

export const books: Book[] = [
  {
    id: "meditations",
    title: "Meditations",
    author: "Marcus Aurelius",
    rating: 4.2,
    reviewCount: 19251,
    coverImage: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1421618636i/30659.jpg",
    coverAlt: "Meditations by Marcus Aurelius book cover",
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?",
    reviews: [
      {
        reviewerName: "Sarah M.",
        timeAgo: "2 days ago",
        rating: 4,
        reviewText: "Absolutely loved this book! The characters were so well-developed and the plot kept me hooked until the very end."
      }
    ]
  },
  {
    id: "letters-from-stoic",
    title: "Letters from a Stoic",
    author: "Seneca",
    rating: 4.3,
    reviewCount: 15234,
    coverImage: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1421619214i/97411.jpg",
    coverAlt: "Letters from a Stoic by Seneca book cover",
    description: "A collection of letters from Seneca to his friend Lucilius, offering timeless wisdom on how to live a good life through Stoic philosophy.",
    reviews: [
      {
        reviewerName: "John D.",
        timeAgo: "5 days ago",
        rating: 5,
        reviewText: "A masterpiece of Stoic philosophy. Every letter contains profound insights that are still relevant today."
      }
    ]
  },
  {
    id: "the-prince",
    title: "The Prince",
    author: "Niccolò Machiavelli",
    rating: 3.8,
    reviewCount: 8765,
    coverImage: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1390055828i/28862.jpg",
    coverAlt: "The Prince by Niccolò Machiavelli book cover",
    description: "A political treatise that examines how to acquire and maintain political power, written by the Italian diplomat and political theorist Niccolò Machiavelli.",
    reviews: [
      {
        reviewerName: "Michael R.",
        timeAgo: "1 week ago",
        rating: 4,
        reviewText: "A controversial but fascinating read on political strategy. Machiavelli's insights are still studied today."
      }
    ]
  },
  {
    id: "the-bug",
    title: "The Bug",
    author: "Ellen Ullman",
    rating: 4.1,
    reviewCount: 3421,
    coverImage: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1697717888i/126006412.jpg",
    coverAlt: "The Bug by Ellen Ullman book cover",
    description: "A novel about software development, debugging, and the intersection of technology and human relationships.",
    reviews: [
      {
        reviewerName: "Alex T.",
        timeAgo: "3 days ago",
        rating: 4,
        reviewText: "A unique perspective on the tech industry. The writing captures the frustration and satisfaction of debugging perfectly."
      }
    ]
  },
  {
    id: "three-men-in-a-boat",
    title: "Three Men in a Boat",
    author: "Jerome K. Jerome",
    rating: 4.5,
    reviewCount: 12345,
    coverImage: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1699561681i/4921.jpg",
    coverAlt: "Three Men in a Boat by Jerome K. Jerome book cover",
    description: "A humorous account of three friends and a dog taking a boating holiday on the Thames River.",
    reviews: [
      {
        reviewerName: "Emma L.",
        timeAgo: "1 day ago",
        rating: 5,
        reviewText: "Hilarious and charming! One of the funniest books I've ever read. The humor is timeless."
      }
    ]
  },
  {
    id: "i-have-no-mouth",
    title: "I Have No Mouth & I Must Scream",
    author: "Harlan Ellison",
    rating: 4.0,
    reviewCount: 9876,
    coverImage: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1423672898i/415459.jpg",
    coverAlt: "I Have No Mouth & I Must Scream by Harlan Ellison book cover",
    description: "A collection of science fiction short stories exploring themes of technology, humanity, and dystopian futures.",
    reviews: [
      {
        reviewerName: "David K.",
        timeAgo: "4 days ago",
        rating: 4,
        reviewText: "Dark and thought-provoking. Ellison's writing is powerful and the title story is unforgettable."
      }
    ]
  }
];

export function getBookById(id: string): Book | undefined {
  return books.find(book => book.id === id);
}


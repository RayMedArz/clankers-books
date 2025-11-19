import { notFound } from "next/navigation";
import { getBookById } from "../../data/books";
import BookDetailClient from "./BookDetailClient";

interface BookDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BookDetailPage({ params }: BookDetailPageProps) {
  const { id } = await params;
  const book = getBookById(id);

  if (!book) {
    notFound();
  }

  return <BookDetailClient book={book} />;
}


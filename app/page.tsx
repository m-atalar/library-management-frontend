"use client";

import { useEffect, useState } from "react";

interface Author {
  id: number;
  name: string;
  bio: string;
  birth_date: string;
}

interface Category {
  id: number;
  name: string;
  description: string;
}

interface Book {
  id: number;
  title: string;
  isbn: string;
  published_date: string;
  description: string;
  authors: Author[];
  categories: Category[];
}

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/books");
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        setBooks(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-2xl text-gray-700">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-2xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Kütüphane Yönetim Sistemi
        </h1>

        <div data-testid="books-list" className="space-y-6">
          {books.map((book) => (
            <div
              key={book.id}
              data-testid="book-item"
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h2
                data-testid="book-title"
                className="text-2xl font-bold text-gray-900 mb-2"
              >
                {book.title}
              </h2>

              <div
                data-testid="book-author"
                className="text-lg text-indigo-600 mb-3"
              >
                {book.authors.map((author) => author.name).join(", ")}
              </div>

              <p
                data-testid="book-description"
                className="text-gray-700 mb-4"
              >
                {book.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                {book.categories.map((category) => (
                  <span
                    key={category.id}
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
                  >
                    {category.name}
                  </span>
                ))}
              </div>

              <div className="text-sm text-gray-500">
                <span className="font-medium">ISBN:</span> {book.isbn} |{" "}
                <span className="font-medium">Published:</span>{" "}
                {new Date(book.published_date).toLocaleDateString("tr-TR")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";

type Book = {
  name: string;
  author: string;
  pages: number;
};

const createBook = (name: string, author: string, pages: number): Book => {
  return {
    name: name,
    author: author,
    pages: pages,
  };
};

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    setBooks([
      createBook("miho no matsubara", "john doe", 1100),
      createBook("niji no matsubara", "john doe", 200),
      createBook("kehi no matsubara", "john doe", 1500),
    ]);

    return () => {
      setBooks([]);
    };
  }, []);

  return { books };
};

import React from 'react';

const Book = () => {
  const books = [
    { id: 1, name: 'book1' },
    { id: 2, name: 'book2' },
  ];

  return books.map((book) => (
    <li key={book.id}>
      {book.name}
      <button type="button">remove</button>
    </li>
  ));
};

export default Book;

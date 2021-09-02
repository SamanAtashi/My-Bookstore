import React from 'react';

const Books = () => {
	const books = [
		{ id: 1, name: 'book1' },
		{ id: 2, name: 'book2' },
	];

	return (
		<ul>
			{books.map((book) => {
				return <li key={book.id}>{book.name}</li>;
			})}
		</ul>
	);
};
export default Books;

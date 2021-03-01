import React, { useContext } from "react";
// import "./WishList.scss";
import { Context as wishBooksContext } from "context/wishBooksContext";
import IBook from "interfaces/IBook";

const ListItem = (book: IBook) => {
	const { state, actions } = useContext(wishBooksContext);
	const { addBook } = actions;

	const isAdded = (id: string) =>
		!(state.wishlist.findIndex((book: IBook) => book.id === id) === -1);

	return (
		<article key={book.id} className="book-list-item">
			{book.volumeInfo?.imageLinks?.thumbnail ? (
				<img src={book.volumeInfo?.imageLinks?.thumbnail} width="50" />
			) : (
				<div style={{ backgroundColor: "lightgray", width: 50, height: 63.65 }} />
			)}
			<div className="book-info">
				<strong>{book.volumeInfo.title}</strong>
				{book.volumeInfo.authors.map((a) => (
					<span key={a}>{a}</span>
				))}

				
			</div>
			<button disabled={isAdded(book.id)} onClick={() => addBook(book)}>
					add to list
				</button>
		</article>
	);
};

export default ListItem;

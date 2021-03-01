import React, { useContext } from "react";
// import "./WishList.scss";
import { Context as wishBooksContext } from "context/wishBooksContext";
import IBook from "interfaces/IBook";

const WishList = () => {
  const { state, actions } = useContext(wishBooksContext); 
  const { deleteBook } = actions;

  return (
    <div className="reading-list-container ">
      <h2>
        My reading wishlist
        {state.wishlist.length > 0 ? ` (${state.wishlist.length})` : null}
      </h2>
      <div >
        {state.wishlist.length ? (
          state.wishlist.map((book: IBook) => (
            <article key={book.id}>
			<button onClick={() => deleteBook(book)}> X </button>
			<div className="wishlisted-info">
              <h5>
                {book.volumeInfo.title}
              </h5>
              <span>
                Author:{" "}
                {book.volumeInfo.authors
                  ? book.volumeInfo.authors.map((author:string, index:number) => (
                      <span key={index}>{author}</span>
                    ))
                  : "Unknown"}
              </span>
			  </div>
            </article>
          ))
        ) : (
          <p className="empty-wishlist">Your wishlist is empty</p>
        )}
      </div>
    </div>
  );
};

export default WishList;
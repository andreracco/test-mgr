import ListItem from 'components/ListItem/ListItem';
import WishList from 'components/WishList/WishList';
import useDebounce from 'hooks/useDebounce';
import IBook from 'interfaces/IBook';
import React, { useEffect, useState } from 'react';
import { getBooksByType } from './book-search.service';

const BookSearch = () => {
	const [debounceValue, bookTypeToSearch, updateBookTypeToSearch] = useDebounce<string>('', 750);
	const [allAvailableBooks, setAllAvailableBooks] = useState({items: []});
	async function requestBooks() {
		if (debounceValue) {
			const allBooks = await getBooksByType(debounceValue);
			setAllAvailableBooks(allBooks);
		}
	}

	useEffect(() => {
		setAllAvailableBooks({items: []})
	}, [bookTypeToSearch])

	useEffect(() => {
		async function getAllBooks() {
			await requestBooks();
		}
		getAllBooks();
	}, [debounceValue]);

	return (
		<>
			<div className="book--container">
				<div className="search-params">
					<div>
						<form
							onSubmit={(e) => {
								e.preventDefault();
							}}>
							<input
								className="full-width"
								autoFocus
								name="gsearch"
								type="search"
								value={bookTypeToSearch}
								placeholder="Search for books to add to your reading list and press Enter"
								onChange={(e) => updateBookTypeToSearch(e.target.value)}
							/>
						</form>
						{!debounceValue ? (
							<div className="empty">
								
								<p>
									Try searching for a topic, for example
									<a onClick={() => {
											updateBookTypeToSearch('Javascript');
										}}>
										{' '}
										"Javascript"
									</a>
								</p> 
								
							</div>
						) : (
							debounceValue === bookTypeToSearch ? 
								(allAvailableBooks.items.map((book: IBook) => <ListItem key={book.id} {...book} />))
								: (<div className="empty">
									<p>Loading...</p>
								</div>)
						)}
					</div>
				</div>
			</div>
			<aside>
				<WishList />
			</aside>
		</>
	);
};

export default BookSearch;

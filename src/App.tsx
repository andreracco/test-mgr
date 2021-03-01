import React from 'react';
import './styles/App.scss';
import BookSearch from './book-search/BookSearch';
import { Provider as WishListProvider} from 'context/wishBooksContext';

function App() {
  return (
      <div>
        <header className="header">
          <div className="header--content">
            <h1>My Good Reads</h1>
          </div>
        </header>
		<WishListProvider>
			<main>
				<BookSearch/>
			</main>
		</WishListProvider>
      </div>
  );
}

export default App;

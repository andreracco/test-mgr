import contextCreator from "tools/contextCreator";
import IBook from 'interfaces/IBook'

type ActionType = {
	type: string;
	payload: IBook;
};

type StateType = {
    wishlist: IBook[];
};

const wishListReducer = (state: StateType, action: ActionType):StateType => {
	switch (action.type) {
		case "addBook":
			if (
				state.wishlist.findIndex(
					(book: IBook) => book.id === action.payload.id,
				) === -1
			) {
				return {
					...state,
					wishlist: [...state.wishlist, action.payload],
				};
			}
			return state;
		case "deleteBook":
			console.log(action)
			return {
				...state,
				wishlist: state.wishlist.filter(
					(book: IBook) => book.id !== action.payload.id,
				),
			};
		default:
			return state;
	}
};

const addBook = (dispatch: React.Dispatch<any>) => (book: IBook) => {
	dispatch({ type: "addBook", payload: book });
};

const deleteBook = (dispatch: React.Dispatch<any>) => (book: IBook) => {
	dispatch({ type: "deleteBook", payload: book });
};

export const { Provider, Context } = contextCreator<StateType>(
	wishListReducer,
	{ addBook, deleteBook },
	{ wishlist: [] },
);

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ReactDOM from "react-dom";
import WishList from "./WishList";
import {
  Provider as WishListProvider,
} from "context/wishBooksContext";

it("render the wish list without crashing", () => {
	const div = document.createElement("div");
  	ReactDOM.render(<WishList />, div);
});

test("Wishlist shows data", () => {
  const { getByText } = render(
    <WishListProvider>
      <WishList />
    </WishListProvider>
  );
  const element = getByText(/Your wishlist is empty/i);
  expect(element).toBeInTheDocument();
});
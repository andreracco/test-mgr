import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ReactDOM from "react-dom";
import ListItem from "./ListItem";

const book = {
	id: "11111",
	volumeInfo: {
		title: "some title",
		authors: ["some author"],
		imageLinks: {
			thumbnail: "http://example.com/image.jpg",
			smallThumbnail: "http://example.com/image.jpg",
		},
		publisher: "some publisher",
		publishedDate: "09/01/2020",
		description: "some description",
	},
};

it("render the wish list without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<ListItem {...book} />, div);
});

test("list item shows data", () => {
	const { getByText } = render(<ListItem {...book} />);
	const element = getByText(/some title/i);
	expect(element).toBeInTheDocument();
});

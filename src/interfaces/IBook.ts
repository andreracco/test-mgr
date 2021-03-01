interface IBook {
	id: string,
	volumeInfo: {
		title: string,
		authors: string[],
		imageLinks: {
			thumbnail: string,
			smallThumbnail: string
		},
		publisher: string,
		publishedDate: string,
		description: string
	},
}
  
export default IBook;
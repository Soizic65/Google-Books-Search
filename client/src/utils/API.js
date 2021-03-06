import axios from "axios";
require('dotenv').config()

export default {
	// Gets all books
	getBooks: function () {
		return axios.get("/api/books");
	},
	// Gets the book with the given id
	getBook: function (id) {
		return axios.get("/api/books/" + id);
	},
	// Deletes the book with the given id
	deleteBook: function (id) {
		return axios.delete("/api/books/" + id);
	},
	// Saves a book to the database
	saveBook: function (bookData) {
		return axios.post("/api/books", bookData);
	},
	//Query GoogleBooksAPI
	googleBook: function (qData) {
		return axios.get(`https://www.googleapis.com/books/v1/volumes?key=AIzaSyC9-XbyXhOKjVZTyXA68bPgFBojV5djV7w&fields=items/volumeInfo&searchIndex=1&q=${qData}`);
	}
};
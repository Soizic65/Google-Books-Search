import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NoResult } from "../components/NoResults";
import { CardDeck, Card, Image, CardBody, BookLink } from "../components/ResultCard";
import { DeleteBtn } from "../components/DeleteBtn";
import Nav from "../components/Nav";
import API from "../utils/API";
import "./style.css";

class Saved extends Component {
	state = {
		books: []
	}

	componentDidMount() {
		this.loadBooks();
	}

	loadBooks = () => {
		API.getBooks().then(res => this.setState({
			books: res.data
		})
		).catch(err => console.log(err));
	}

	deleteBook = id => {
		API.deleteBook(id)
			.then(res => this.loadBooks())
			.catch(err => console.log(err));
	};

	render() {
		return (
			<div>
			<Nav />
				<div className="jumbotron">
					<h1 className="lead" id= 'enterSearch'>Saved Books</h1>
					<Link to={"/"}><strong>Search Page</strong></Link>
				</div>
				<div className="container">

					{this.state.books.length ? (
						<div className="container">
							<CardDeck>
								{this.state.books.map((book, i) => (
									<Card key={book._id}>
										<Image src={book.image} />
										<CardBody title={book.title} description={book.description} authors={book.authors} />
										<BookLink link={book.link}>Google Books Link</BookLink>
										<DeleteBtn onClick={() => this.deleteBook(book._id)} />
									</Card>
								))}
							</CardDeck>
						</div>
					) : (
							<NoResult />
						)}
				</div>
			</div>
		)
	}
}

export default Saved;
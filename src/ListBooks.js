import React, { Component } from 'react'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'

class ListBooks extends Component {
    
    state = {
        books : []
    };

    handleChangeShelf = (book, shelf) => {
//        const book = this.props.booksOnShelf.filter((b) => b.id === bookId)[0]; // returns the first book object
//        console.log(book);
        BooksAPI.update(book.id,shelf)
        .then((response) => {
            book.shelf = shelf;
            this.setState(state => ({
                books: state.books.filter(bo => bo.id !== book.id).concat([book])
            }));
        });
    }
    
    
	render() {
		return (
		<div className="list-books">
            	    <div className="list-books-title">
                    <h1>MyReads</h1>
            	</div>
            	<div className="list-books-content">
              	    <div>
                    <Shelf section="Currently Reading"
                    books={this.props.booksOnShelf.filter((book) => book.shelf === "currentlyReading")}
                    onChangeShelf={this.handleChangeShelf}
                    />                
                    <Shelf section="Want to Read"
                    books={this.props.booksOnShelf.filter((book) => book.shelf === "wantToRead")}
                    onChangeShelf={this.handleChangeShelf}
                    />                
                    <Shelf section="Read"
                    books={this.props.booksOnShelf.filter((book) => book.shelf === "read")}
                    onChangeShelf={this.handleChangeShelf}
                    />                
                </div>
               </div>
                <div className="open-search">
                    <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                </div>
               </div>
	     )
       }
}

export default ListBooks

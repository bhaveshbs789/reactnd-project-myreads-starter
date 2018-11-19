import React, { Component } from 'react'
import Shelf from './Shelf'


class ListBooks extends Component {
	render() {
		return (
		<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf section="Currently Reading"
                // books={this.props.booksOnShelf.filter((book) => book.shelf === "currentlyReading")}
                />                
                <Shelf section="Want to Read"
                // books={this.props.booksOnShelf.filter((book) => book.shelf === "wantToRead")}
                />                
                <Shelf section="Read"
                // books={this.props.booksOnShelf.filter((book) => book.shelf === "read")}
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
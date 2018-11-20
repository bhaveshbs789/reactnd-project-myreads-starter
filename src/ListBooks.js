import React, { Component } from 'react'
import Shelf from './Shelf'
//import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import './App.css'

class ListBooks extends Component {
    
    state = {
        books : []
    };

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
                onChange={this.props.onShelfChange}
                />                
                <Shelf section="Want to Read"
                books={this.props.booksOnShelf.filter((book) => book.shelf === "wantToRead")}
                onChange={this.props.onShelfChange}
                />                
                <Shelf section="Read"
                books={this.props.booksOnShelf.filter((book) => book.shelf === "read")}
                onChange={this.props.onShelfChange}
                />                
              </div>
            </div>
            <div className="open-search">
                <Link to='/search'>Add a book</Link>
            </div>
        </div>
		)
	}
}

export default ListBooks

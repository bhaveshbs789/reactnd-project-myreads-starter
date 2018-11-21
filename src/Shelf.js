import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
    
    updateShelf = (book, shelf) => {
        this.props.onChange(book, shelf)
    }
    
	render() {
        
	    return (
	    <div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.section}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books.map((book) => (
                        <Book key={book.id} oneBook={book} changeShelf={(shelf) => this.updateShelf(book, shelf)}/>
                    )                
                  )}                  
                </ol>
              </div>
            </div>
		)
	}
}

export default Shelf

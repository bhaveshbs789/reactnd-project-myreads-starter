import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
	render() {
        console.log(this.props);
		return (
		    <div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.section}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books.map((book) => (
                        <Book key={book.id} bookStatus={book}/>
                    )                
                  )}                  
                </ol>
              </div>
            </div>
		)
	}
}

export default Shelf

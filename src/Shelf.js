import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
	render() {
		return (
		    <div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.section}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <Book bookStatus={this.props.books}/>
                </ol>
              </div>
            </div>
		)
	}
}

export default Shelf
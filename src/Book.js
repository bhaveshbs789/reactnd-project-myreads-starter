import React, { Component } from 'react'

class Book extends Component {
	render() {
        console.log('props in book component', this.props);
		return (            
			  <li>
	            <div className="book">
	              <div className="book-top">
	                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.oneBook.imageLinks.thumbnail}")` }}></div>
	                <div className="book-shelf-changer">
	                  <select value={this.props.oneBook.shelf} onChange={(evt => this.props.changeShelf(this.props.oneBook, evt.target.value))}>
	                    <option value="move" disabled>Move to...</option>
	                    <option value="currentlyReading">Currently Reading</option>
	                    <option value="wantToRead">Want to Read</option>
	                    <option value="read">Read</option>
	                    <option value="none">None</option>
	                  </select>
	                </div>
	              </div>
	              <div className="book-title">{this.props.oneBook.title}</div>
	              <div className="book-authors">{(this.props.oneBook.authors)}</div>
	            </div>
	          </li>
		)
	}
}

export default Book

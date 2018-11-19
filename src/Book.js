import React, { Component } from 'react'

class Book extends Component {
	render() {
		return (
			<li>
	            <div className="book">
	              <div className="book-top">
	                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + this.props.bookStatus.imageLinks.thumbnail + ')' }}></div>
	                <div className="book-shelf-changer">
	                  <select>
	                    <option value="move" disabled>Move to...</option>
	                    <option value="currentlyReading">Currently Reading</option>
	                    <option value="wantToRead">Want to Read</option>
	                    <option value="read">Read</option>
	                    <option value="none">None</option>
	                  </select>
	                </div>
	              </div>
	              <div className="book-title">1776</div>
	              <div className="book-authors">David McCullough</div>
	            </div>
	          </li>
		)
	}
}

export default Book
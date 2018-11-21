import React, { Component } from 'react'

class Book extends Component {
    
    /* 
    The changeBookShelf method is used to get the value selected from the Drop down
    when the onchange event is triggered on the select element when it is changed.
    The value gets stored in event.target.value which is passed as a argument to 
    the prop "changeShelf".
    */
    
    changeBookShelf = (event) => {
        this.props.changeShelf(event.target.value)
    }
    
	render() {
        
        //console.log('props in book component', this.props);
        
		return (            
			  <li>
	            <div className="book">
	              <div className="book-top">
	                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.oneBook.imageLinks.thumbnail}")` }}></div>
	                <div className="book-shelf-changer">	                  
                      <select value={this.props.oneBook.shelf} onChange={this.changeBookShelf}>            
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

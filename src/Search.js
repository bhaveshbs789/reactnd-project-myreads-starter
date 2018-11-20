import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {
    
    state = {
        booksSearched : [],
        query : ''
    }
    
    handleChangeQuery = (event) => {
        var val = event.target.value
        this.setState({
            query : val
        })
        if(val.length > 0){
            BooksAPI.search(val).then((books) => {
                if(books.length > 0){
                    this.setState({booksSearched : books})
                    console.log(this.state.booksSearched)   
                }
            })
       } else {
            this.setState({booksSearched : [], query : ''})
        }
        
    }
    
	render() {
		return (
		<div className="search-books">
            <div className="search-books-bar">    
              <Link to='/' className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.handleChangeQuery}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.query.length >0 && this.state.booksSearched.map((book) => <Book key={book.id} oneBook={book}/>)}
              </ol>
            </div>
        </div>
		)
	}
}

export default Search

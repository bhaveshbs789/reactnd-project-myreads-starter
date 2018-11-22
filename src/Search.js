import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {
    
    /*
    The state is an object which stores the books returned from the search query
    in booksSearched array.
    
    The query is another key in state object which stores the 
    string typed in the search input section
    */
    
    state = {
        booksSearched : [],
        query : ''
    }
    
     /*
    The changeSearchBookShelf is used to keep the default
    shelf of book returned as "none" and if the book is
    in the current booksList ie myBooksList then set the
    book shelf in the search view as the one in my books list
    */
   
    changeSearchBookShelf = (book) => {      
        
        book.shelf = "none"
        
        for(let myBook of this.props.myBooksList){
            if(myBook.id === book.id){
                book.shelf = myBook.shelf;
            }
        }
        
        return book       
    }

    /*
    The handleChangeQuery is a arrow function which receives a 
    event object .
    The search string typed in the input box is stored as 'val'
    using the event.target.value
    The state of the query is changed to whatever value is returned
    using the setState method.
    Using the bookAPI we use the search method passing
    the query value as argument which returns a promise. 
    The output is a array of books.
    The response is then passed to a callback 
    where if the length of the array is more than zero
    then we ONLY store books which have a imageLinks key. 
    (The filter for books was added as errors were popping up in search result which did not 
    have a imageLink thumbnail)
    */
    handleChangeQuery = (event) => {
        var val = event.target.value
        this.setState({
            query : val
        })
        if(val.length > 0){
            BooksAPI.search(val).then((books) => {
                if(books.length > 0){
                    // to prevent any results which DO NOT have a imageLink to come in result for Book.js 
                    books = books.filter((book) => book.imageLinks).map(this.changeSearchBookShelf)                    
                    this.setState({booksSearched : books})
                    console.log(this.state.booksSearched)   
                } else {
		    this.setState({booksSearched : []})   
		}
            })
       } else {
            this.setState({booksSearched : [], query : ''})
        }
        
    }
    
       
    addNewBook = (book, newBookShelf) => {
        this.props.onShelfChange(book, newBookShelf)
    }
    
    render() {
        //console.log('Props in Search component', this.props);
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
                {this.state.query.length >0 && this.state.booksSearched.map((book) => <Book key={book.id} oneBook={book} changeShelf={(newBookShelf) => {this.addNewBook(book, newBookShelf)}} />)}
              </ol>
            </div>
        </div>
		)
	}
}

export default Search

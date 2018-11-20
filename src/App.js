import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import ListBooks from './ListBooks'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books : []
  }

  //---Run componentDidMount when render is just done---    
  componentDidMount(){
    BooksAPI.getAll()
    .then((books) => {
      this.setState({books:books})
    })
  }

  updateBookShelf = (book, shelf) => {
      BooksAPI.update(book, shelf)
      .then(() => {
          BooksAPI.getAll()
          .then((books) => {
              this.setState({books : books})
          })
      })
  }

  render() {
    return (
      <div className="app">
          <Route exact path='/' render={() => (
              <ListBooks booksOnShelf={this.state.books} onShelfChange={this.updateBookShelf}/>
            )}/>
          <Route exact path='/search' render={({history}) => (<Search myBooksList={this.state.books} />)}/>
      </div>
    )
  }
}

export default BooksApp

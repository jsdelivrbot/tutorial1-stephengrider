import React, { Component} from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">{book.title}</li>
      )
    })
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// anything returned from this function will end up as props on the bookList container
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, the result should be passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
  //bindActionCreators makes sure that this action is passed to all reducers
}

function mapStateToProps(state) {
  //Whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  }
}

//promote BookList from a component to a container. It needs to know about this nee dispatch method, selectBook and make it available to BookList as a props.
export default connect (mapStateToProps, mapDispatchToProps)(BookList)

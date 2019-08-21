import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }
  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  //whatever is returned from here will show up as props inside the BookList
  return {
    books: state.books
  };
}

//antin returned from this function would end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  //wenever selectBook is called the result should be passed to all our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//promote BookList from a component to a container - It needs to know about this new
//dispatch method, selectBook make it available
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);

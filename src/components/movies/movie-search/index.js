import React, { Component } from "react";
import SearchStyled from "../../../styles/movie-search.style";
import { compose } from "redux";
import { connect } from "react-redux";
import { queryMovies, loadMovies } from "../../../actions/movies";

class MovieSearch extends Component {
  handleChange(e) {
    const query = e.target.value;
    const { loadMovies, queryMovies } = this.props;
    if (query === "") {
      loadMovies();
    } else {
      queryMovies(query);
    }
  }

  render() {
    return (
      <SearchStyled>
        <input
          type="email"
          className="form-control form-control-lg"
          placeholder="Search for a movie..."
          onChange={(e) => {
            this.handleChange(e);
          }}
        />
      </SearchStyled>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapActionToProps = {
  queryMovies,
  loadMovies,
};

const enhance = compose(connect(mapStateToProps, mapActionToProps));

export default enhance(MovieSearch);

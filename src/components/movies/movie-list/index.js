import React, { Component } from "react";
import ListStyled from "../../../styles/movie-list.style";
import { compose } from "redux";
import { connect } from "react-redux";
import { loadMovies } from "../../../actions/movies";
import withMoviesLoaded from "../../../hoc/withMoviesLoaded";
import withMoviesFilteredByRating from "../../../hoc/withMoviesFilteredByRating";

import Movie from "../movie";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      movie: null,
    };
  }

  handleClick = (movie) => {
    this.setState({ movie });
  };

  render() {
    const { moviesFiltered: movies } = this.props;
    const HEIGHT = "280px";

    const renderFourMoviesPerRow = (props) => {
      const rows = [...Array(Math.ceil(movies.length / 4))];
      const productRows = rows.map((row, idx) =>
        movies.slice(idx * 4, idx * 4 + 4)
      );
      const content = productRows.map((row, idx) => (
        <div className="row" key={idx}>
          {row.map((movie) => (
            <article
              key={movie.id}
              style={{ height: HEIGHT }}
              className="col-md-3"
            >
              <Movie movie={movie} {...this.props} />
            </article>
          ))}
        </div>
      ));
      return <div>{content}</div>;
    };

    return (
      <ListStyled>
        <section className="features-icons bg-light text-center list-wrapper">
          <div className="container">{renderFourMoviesPerRow()}</div>
        </section>
      </ListStyled>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movieReducer.movies,
  loading: state.movieReducer.loading,
  rating: state.movieReducer.rating,
});

const mapActionToProps = {
  loadMovies,
};

const enhance = compose(
  connect(mapStateToProps, mapActionToProps),
  withMoviesLoaded,
  withMoviesFilteredByRating
);

export default enhance(MovieList);

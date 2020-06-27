import React from "react";

export default function withMoviesFilteredByRating(WrappedComponent) {
  return class extends React.Component {
    filterMoviesByRating = () => {
      const { movies, rating } = this.props;
      if (!rating) return movies;
      return movies.filter((movie) => {
        return (
          movie.vote_average >= rating * 2 - 2 &&
          movie.vote_average <= rating * 2
        );
      });
    };

    render() {
      return (
        <WrappedComponent
          moviesFiltered={this.filterMoviesByRating()}
          {...this.props}
        />
      );
    }
  };
}

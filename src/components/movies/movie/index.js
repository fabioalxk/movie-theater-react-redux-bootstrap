import React, { Component } from "react";
import MovieStyled from "../../../styles/movie.style";
import { connect } from "react-redux";
import { movieSelect } from "../../../actions/movies";

class Movie extends Component {
  componentDidMount() {}

  render() {
    const WIDTH = 300;
    const HEIGHT = 169;

    let baseUrlimageAddress = "https://image.tmdb.org/t/p/w300";

    return (
      <MovieStyled>
        <div
          id="movie-wrapper"
          className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3"
          type="button"
          data-toggle="modal"
          data-target="#exampleModal"
          onClick={() => {
            this.props.movieSelect(this.props.movie);
          }}
        >
          <div className="features-icons-icon d-flex">
            <i className="icon-screen-desktop m-auto text-primary"></i>
          </div>

          <img
            src={`${baseUrlimageAddress}${this.props.movie.backdrop_path}`}
            alt="Paris"
            width={WIDTH}
            height={HEIGHT}
          />
          <span className="fa fa-star" style={{ color: "orange" }}></span>
          <span>{this.props.movie.vote_average}</span>
          <p className="lead mb-0">{this.props.movie.original_title}</p>
        </div>
      </MovieStyled>
    );
  }
}

const mapActionToProps = {
  movieSelect,
};

export default connect(null, mapActionToProps)(Movie);

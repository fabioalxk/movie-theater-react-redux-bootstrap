import React, { Component } from "react";
import RatingStyled from "../../../styles/movie-rating.style";
import { compose } from "redux";
import { connect } from "react-redux";
import { setRating } from "../../../actions/movies";

class MovieRating extends Component {
  handleClick = (star) => {
    const { rating, setRating } = this.props;
    if (star === rating) {
      setRating(null);
    } else {
      setRating(star);
    }
  };

  getRating = () => {
    let stars = [1, 2, 3, 4, 5];
    const { rating } = this.props;
    return stars.map((star) => {
      if (star <= rating) {
        return (
          <span
            key={star}
            onClick={() => this.handleClick(star)}
            className="fa fa-star checked"
          />
        );
      } else {
        return (
          <span
            key={star}
            onClick={() => this.handleClick(star)}
            className="fa fa-star"
          />
        );
      }
    });
  };
  render() {
    return (
      <RatingStyled>
        <div className="rating-wrapper">
          <h5>Rating:</h5>
          <div className="stars">{this.getRating()}</div>
        </div>
      </RatingStyled>
    );
  }
}

const mapStateToProps = (state) => ({
  rating: state.movieReducer.rating,
});

const mapActionToProps = {
  setRating,
};

const enhance = compose(connect(mapStateToProps, mapActionToProps));

export default enhance(MovieRating);

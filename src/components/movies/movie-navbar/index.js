import React, { Component } from "react";
import MovieSearch from "../movie-search";
import MovieRating from "../movie-rating";
import MovieNavbarStyle from "../../../styles/movie-navbar.style";

export default class MovieNavbar extends Component {
  render() {
    return (
      <MovieNavbarStyle>
        <nav
          style={{ display: "block" }}
          className="navbar navbar-dark bg-dark static-top"
        >
          <div className="" style={{ margin: "auto", width: "60%" }}>
            <form>
              <div className="form-row">
                <div className="col-12 col-md-10 col-sm-10 mb-2 mb-md-0">
                  <MovieSearch />
                </div>
                <div className="col-12 col-md-2 col-sm-2 movie-rating-wrapper">
                  <MovieRating />
                </div>
              </div>
            </form>
          </div>
        </nav>
      </MovieNavbarStyle>
    );
  }
}

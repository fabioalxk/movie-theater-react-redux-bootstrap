import React, { Component } from "react";
import { connect } from "react-redux";

class MovieModal extends Component {
  render() {
    const WIDTH = "300px";
    const HEIGHT = "169px";

    let baseUrlimageAddress = "https://image.tmdb.org/t/p/w300";
    if (!this.props.movie) {
      return null;
    }
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {this.props.movie.original_title}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col12 mb-4" style={{ margin: "auto" }}>
                    <img
                      src={`${baseUrlimageAddress}${this.props.movie.backdrop_path}`}
                      alt="Paris"
                      width={WIDTH}
                      height={HEIGHT}
                    />
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col12 col-lg-12 col-md-12 col-sm-12"
                    style={{ margin: "auto" }}
                  >
                    <p>{this.props.movie.overview}</p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movie: state.movieReducer.selectedMovie,
});

export default connect(mapStateToProps, null)(MovieModal);

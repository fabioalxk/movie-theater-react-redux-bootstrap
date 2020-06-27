import React from "react";

export default function withMoviesLoaded(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      this.props.loadMovies();
    }
    render() {
      const { loading, movies } = this.props;
      if (loading || !movies) {
        return <div>Loading...</div>;
      }
      return <WrappedComponent {...this.props} />;
    }
  };
}

import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import MovieList from "./components/movies/movie-list";
import AppStyled from "./styles/app.style";
import MovieNavBar from "./components/movies/movie-navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieModal from "./components/movies/movie-detail-modal";

function App() {
  return (
    <Provider store={store}>
      <AppStyled>
        <MovieNavBar />
        <MovieList />
      </AppStyled>
      <MovieModal />
    </Provider>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from 'App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import { fetchCastMovies, fetchMovieDetails, fetchReviewsMovies, fetchSearchMovies, fetchTrendingMovies } from 'API/API';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter  basename="/test-homework-5">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
// fetchTrendingMovies();
// fetchMovieDetails(298618);
// fetchSearchMovies(`Batman`);
// fetchReviewsMovies(268);
// fetchCastMovies(268);

import Cast from 'pages/Cast/Cast';
import Reviews from 'pages/Reviews/Reviews';
import React, { Suspense, useEffect, useRef, useState } from 'react'
import {  Route, Routes, useLocation, useParams } from 'react-router-dom';
import { List, StyledLink, StyledNavLink } from './MoviesDetails.styled';
import defaultImg from '../../image.webp';
import Notiflix from 'notiflix';
import { fetchMovieDetails } from 'API/API';


const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { moviesID } = useParams();
  const location = useLocation();
  // console.log(location);
const goBackhref = useRef(location.state?.from ?? "/")


  useEffect(() => {
    if (!moviesID) return;
    const fetchMoviesDetailsData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchMovieDetails(moviesID);
        if (data.length === 0) {
          Notiflix.Notify.failure(
            `There is no data for render because ${error}`
          );
        } else {
          setMovieDetails(data);
        }
      } catch (error) {
        setError(error);
        Notiflix.Notify.failure(`There is no data for render because ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesDetailsData();
  }, [moviesID, error]);
  return (
    <div>
      <StyledLink to={goBackhref.current}>
        Go back
      </StyledLink>
      {error ? (
        <p>{error.message}</p>
      ) : (
        !isLoading &&
        movieDetails && (
          <div>
            <a href={movieDetails.homepage}>
              <img
                src={
                  movieDetails.poster_path
                    ? `https://www.themoviedb.org/t/p/original/${movieDetails.poster_path}`
                    : defaultImg
                }
                alt=""
                width="300px"
              />
            </a>
            <h3>
              {movieDetails.title}{' '}
              {`(${movieDetails.release_date.slice(0, 4)})`}
            </h3>
            <p>
              User score: {(movieDetails.vote_average.toFixed(1) / 10) * 100}%
            </p>
            <div>
              <h4>Overview:</h4>
              <p>{movieDetails.overview}</p>
            </div>
            <div>
              <ul>
                <h4>Genres:</h4>
                {movieDetails.genres.map(genre => {
                  return <li key={genre.id}>{genre.name}</li>;
                })}
              </ul>
            </div>
            <h4>Additional information:</h4>
              <List>
              <li>
                <StyledNavLink to="cast">Cast</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="reviews">Reviews</StyledNavLink>
              </li>
            </List>
          </div>
        )
      )}
      <Suspense fallback="Loading content...">
        <Routes>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default MoviesDetails

import { fetchTrendingMovies } from 'API/API';
import React, { useEffect, useState } from 'react';

import Notiflix from 'notiflix';
import Loader from 'components/Loader/Loader';
import { MoviesList, StyledLink, PageHeader } from './Homepage.styled';

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const movies = await fetchTrendingMovies();
        setFilms(movies);
      } catch (error) {
        Notiflix.Notify.failure('No found trending films');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // console.log(films);

  fetchTrendingMovies();
  return (
    <div>
      <PageHeader>Trending movies today:</PageHeader>
      {isLoading && <Loader />}
      <MoviesList>
        {films.map(film => {
          return (
            <StyledLink to={`/movies/${film.id}`} key={film.id}>
              <p>{film.title}</p>
            </StyledLink>
          );
        })}
      </MoviesList>
    </div>
  );
};

export default HomePage;

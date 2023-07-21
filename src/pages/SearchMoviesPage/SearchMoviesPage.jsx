import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import { handleSearch } from 'API/API';


import defaultImg from '../../image.webp';
import SearchForm from 'components/Searchform/SearchForm';

const SearchMoviesPage = () => {

  const [searchParams, setSerchParams] = useSearchParams();
  const location = useLocation();
  const [query, setQuery] = useState(searchParams.get('query') || null);
  const [films, setFilms] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const onFormSubmit = q => {
    if (query !== q) {
      setQuery(q);
      if (q !== '' || q !== null) {
        setSerchParams({
          query: q,
        });
      }
      setFilms([]);
      setError(null);
    } else if (query === q) {
      alert('Не можна вводити одне й те саме!');
    }
  };
  useEffect(() => {

    const fetchMoviesData  = async () => {
      if (query === null) return;
      if (query === '') {
        alert('Поле пошуку не може бути пустим!');
        return;
      } else {
        setIsLoading(true);
        try {
          const data = await handleSearch(query);
          if (data.length === 0) {
            throw new Error('No films found!');
          } else {
            setFilms(data);
          }
        } catch (error) {
          setError(error);
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchMoviesData();
  }, [query]);

  return (
    <div>
      <h2>Movies Page</h2>
      <SearchForm onFormSubmit={onFormSubmit} />
      {isLoading && <p>Loading content...</p>}
      {error ? (
        <p>{error.message}</p>
      ) : (
        !isLoading &&
        films?.length > 0 && (
          <ul>
            {films.map(film => {
              return (
                <Link
                  state={{ from: location }}
                  to={`/movies/${film.id}`}
                  key={film.id}
                >
                  <img
                    src={
                      film.backdrop_path
                        ? `https://www.themoviedb.org/t/p/original/${film.backdrop_path}`
                        : defaultImg
                    }
                    alt={film.title}
                    width={'290px'}
                  />
                  <p>{`${film.title} (${film.release_date.slice(0, 4)})`}</p>
                </Link>
              );
            })}
          </ul>
        )
      )}
    </div>
  );
};

export default SearchMoviesPage;

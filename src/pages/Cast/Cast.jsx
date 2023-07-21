import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import defaulImg from '../../image.webp';
import { fetchMovieCast } from 'API/API';

const Cast = () => {
  // const a = useParams();
  // console.log(a)
  const { moviesID } = useParams();
  const [actors, setActors] = useState([]);
// fetchMovieCast(298618);
console.log(moviesID);
  useEffect(() => {
    const movieCast = async () => {
      try {
        const resp = await fetchMovieCast(moviesID);
        setActors(resp);

        console.log(resp);
      } catch (error) {
        console.error(error);
      }
    };

    movieCast();
  }, [moviesID]);

  return (
    <>
      {actors.length !== 0 && (
        <div>
          <h2>Movie Cast</h2>
          <ul>
            {actors.map(actor => (
              <li key={actor.id}>
                <img
                  width="200px"
                  height="300px"
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                      : `${defaulImg}`
                  }
                  alt={actor.original_name}
                />
                <p>{actor.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {actors.length === 0 && <div>We don't have any cast for this movie.</div>}
    </>
  );
};

export default Cast;

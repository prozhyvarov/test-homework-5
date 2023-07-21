
import { fetchMovieReviews } from 'API/API';
import { ReviewsItem, ReviewsList } from 'pages/Cast/Cast.styled';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieReviews = () => {

  const [movieReviews, setMovieReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { moviesID } = useParams();


  // const a = fetchMovieReviews(moviesID);
  // console.log(a)
  useEffect(() => {
    if (!moviesID) return;
    const fetchMovieReviewsData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchMovieReviews(moviesID);
        // console.log(data)
          setMovieReviews(data);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieReviewsData();
  }, [moviesID]);
  return (
    <div>
      <h2>Movie reviews:</h2>
      {isLoading && <p>Loading content...</p>}
      {error !== null && <p>{error.message}</p>}
      {!isLoading && movieReviews?.length > 0 && (
        <ReviewsList>
          {movieReviews.map(review => {
            const { id, author, content } = review;
            return (
              <ReviewsItem  key={id}>
                <p>Author: "{author}"</p>
                <p>"{content}"</p>
              </ReviewsItem>
            );
          })}
        </ReviewsList>
      )}
    </div>
  );
};

export default MovieReviews;

import axios from 'axios';
import { toast } from 'react-hot-toast';

const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = '6dfafd08c001fd3262dc3fe23504fa05';



export async function fetchMovieDetails(movieId) {
  try {
      const URL = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
      const resp = await axios.get(URL);
      return resp;
  } catch (error) {
    toast.error(error.message);
  }
}

export async function fetchTrendingMovies() {
    try {
        const URL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=1`;
        const resp = await axios.get(URL);
        return resp;
    } catch (error) {
        toast.error(error.message);
    }
}

export async function fetchSearchMovies(query) {
  try {
    const URL = `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`;
    const resp = await axios.get(URL);
    return resp;
  } catch (error) {
    toast.error(error.message);
  }
}

export async function fetchReviewsMovies(movieId) {
  try {
    const URL = `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`;
    const resp = await axios.get(URL);
    return resp;
  } catch (error) {
    toast.error(error.message);
  }
}

export async function fetchCastMovies(movieId) {
  try {
    const URL = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;
    const resp = await axios.get(URL);
    return resp;
  } catch (error) {
    toast.error(error.message);
  }
}




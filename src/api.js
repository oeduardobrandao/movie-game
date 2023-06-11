import { VITE_API_KEY } from '../key';

export async function getMovieDetails(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${VITE_API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
  return data;
}

export async function getCast(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${VITE_API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
  return data;
}

export async function getAllMovies() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${VITE_API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data.results);
  return data.results;
}

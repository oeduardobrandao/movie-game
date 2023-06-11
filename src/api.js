import { API_KEY } from '../key';

export async function getMovieDetails(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
  return data;
}

export async function getCast(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
  return data;
}

export async function getStarMovies(starId) {
  const url = `https://api.themoviedb.org/3/person/${starId}/movie_credits?api_key=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
  return data;
}

export async function getAllMovies() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data.results);
  return data.results;
}

export async function getMoviesByTitle(searchInput) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTI2MTg0OTFmY2U0OTFiZDU3MzAyZDc1NjAwNzhjYSIsInN1YiI6IjY0ODRhMWNjYzlkYmY5MDEzYTA2OWQzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.goDELHPPfbGjQXVK2oAk3n-AlqiQaSvpoSQeQja_VqA'
    }
  };

  const url = `https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=en-US&page=1`;
  const response = await fetch(url, options);
  const data = await response.json();

  return data.results;
}

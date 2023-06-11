import { useEffect, useState } from "react";
import { getAllMovies } from "../api";

export default function MovieDisplay() {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    getAllMovies().then((movies) => {
      setMovies(movies);
    });
  }, []);

  const imgPath = 'https://image.tmdb.org/t/p/w1280/';
  return (
    <div className="movie-list">
      {
        movies.map((movie) => (
          <div
            key={movie.id}
            className="movie-poster"
          >
            <img src={`${imgPath}${movie.poster_path}`} alt="" />
          </div>
        ))
      }
    </div>
  )
}

import { useContext } from "react";
import GameContext from "../context/GameContext";

export default function MovieDisplay() {

  const { movies } = useContext(GameContext)

  const imgPath = 'https://image.tmdb.org/t/p/w1280/';
  return (movies.length > 0) ? (
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
  ) : ('')
}

import { useContext } from "react";
import GameContext from "../context/GameContext";

export default function MovieDisplay() {
  const { state } = useContext(GameContext)
  const imgPath = 'https://image.tmdb.org/t/p/w1280/';
 
  return (state.movies.length > 0) ? (
    <div className="movie-list">
      {
        state.movies.map((movie) => (
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

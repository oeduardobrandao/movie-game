import { useContext } from "react";
import propTypes from 'prop-types';
import GameContext from "../context/GameContext";

export default function MovieDisplay(props) {
  const { movies, game, setGame, selectedStar } = props;
  const { state } = useContext(GameContext)
  const imgPath = 'https://image.tmdb.org/t/p/w1280/';
  const imgPathStars = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/';

  const movieArray = movies || state.movies;
 
  return (state.movies.length > 0) ? (
    <div className="movie-list">
      <img src={`${imgPathStars}${selectedStar.profile_path}`} />
      {
        movieArray.map((movie) => (
          <button
            key={movie.id}
            className="movie-poster"
            onClick={ () => setGame({ ...game, selectedMovie: movie }) }
          >
            <img src={`${imgPath}${movie.poster_path}`} alt="" />
          </button>
        ))
      }
    </div>
  ) : ('')
}

MovieDisplay.propTypes = {
  movies: propTypes.arrayOf(propTypes.shape).isRequired,
  game: propTypes.shape.isRequired,
  setGame: propTypes.func.isRequired,
  selectedStar: propTypes.shape.isRequired,
}

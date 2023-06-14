import propTypes from 'prop-types';
import { useContext } from 'react';
import GameContext from '../context/GameContext';

export default function StarDisplay(props) {
  const { state: { firstPic } } = useContext(GameContext);
  const { stars, game, setGame, selectedMovie } = props;
  const imgPathStars = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/';
  const imgPathMovie = selectedMovie ?
    `https://image.tmdb.org/t/p/w1280/${selectedMovie.src}`
    : ''

  const handleClick = (star) => {
    setGame({ ...game, selectedStar: star})
  }

  return (
    <div className="star-list">
      <img src={ imgPathMovie || firstPic} />
      {
        (stars.length > 0) ? (
          stars.map((star) => (
            <div
              key={star.id}
              type="button"
              className="star-poster"
            >
              <button
                type="button"
                onClick={ () => handleClick(star) }
              >
                <img src={`${imgPathStars}${star.profile_path}`} alt={star.name} id={star.id} />
                <p>{star.name}</p>
              </button>
            </div>
          ))
        ) : ('')
      }
    </div>
  )
}

StarDisplay.propTypes = {
  stars: propTypes.arrayOf(propTypes.shape).isRequired,
  game: propTypes.shape.isRequired,
  setGame: propTypes.func.isRequired,
  selectedMovie: propTypes.shape.isRequired,
}

import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getCast } from "../api"
import GameContext from "../context/GameContext"
import Header from "../components/Header";
// import StarDisplay from "../components/StarDisplay"
// import MovieDisplay from "../components/MovieDisplay"

export default function Movie() {
  const { state, setState } = useContext(GameContext);
  const { currentMovie, stars, steps } = state;
  const navigate = useNavigate();
  const movie = JSON.parse(currentMovie);


  const imgPathStars = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/';
  const imgPathMovie = movie ?
    `https://image.tmdb.org/t/p/w1280/${movie.poster_path}`
    : ''

  const getStars = async (movieId) => {
    const data = await getCast(movieId);
    setState({...state, stars: data});
  }

  const handleClick = (star) => {
    setState({ ...state, currentStar: star, steps: steps + 1})
    navigate('/cast')
  }

  console.log(movie);

  useEffect(() => {
    getStars(movie.id);
  }, [])

  return (
    <>
      <Header />
      <div className="movie">
        <h2>{movie.original_title}</h2>
        {/* <StarDisplay
          stars={ state.stars }
          game={ game }
          setGame={ setGame }
          selectedMovie={ game.selectedMovie }
        /> */}
        {/* <MovieDisplay
          movies={ game.movies }
          game={ game }
          setGame={ setGame }
          selectedStar={ game.selectedStar }
        /> */}
        <img className="movie-hero" src={ imgPathMovie || state.firstPic} />
        <div className="star-list">
            {
              (stars) ? (
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
      </div>
    </>
  )
}

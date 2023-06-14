import { useContext, useEffect, useState } from "react"
import { getCast, getStarMovies } from "../api"
import GameContext from "../context/GameContext"
import StarDisplay from "../components/StarDisplay"
import MovieDisplay from "../components/MovieDisplay"

export default function Game() {
  const { state } = useContext(GameContext)
  const [game, setGame] = useState({
    stars: [],
    selectedStar: {},
    movies: [],
    selectedMovie: {},
  });

  const getStars = async (movieId) => {
    const data = await getCast(movieId);
    setGame({...game, stars: data});
  }

  useEffect(() => {
    getStars(state.firstMovie);
  })

  useEffect(() => {
    const getActorMovies = (actor) => {
      getStarMovies(actor.id);
    };
    setGame({ ...game, movies: getActorMovies(game.selectedStar)})
  }, [game.selectedStar])

  return (
    <div className="game">
      <h2>Game</h2>
      <StarDisplay
        stars={ game.stars }
        game={ game }
        setGame={ setGame }
        selectedMovie={ game.selectedMovie }
      />
      <MovieDisplay
        movies={ game.movies }
        game={ game }
        setGame={ setGame }
        selectedStar={ game.selectedStar }
      />

    </div>
  )
}

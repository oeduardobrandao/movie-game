import { useContext, useEffect, useState } from "react"
import { getCast } from "../api"
import GameContext from "../context/GameContext"
import StarDisplay from "../components/StarDisplay"

export default function Game() {
  const { state } = useContext(GameContext)
  const [stars, setStars] = useState([])

  const getStars = async (movieId) => {
    const data = await getCast(movieId);
    setStars(data);
  }

  useEffect(() => {
    getStars(state.firstMovie);
  })

  return (
    <div className="game">
      <h2>Game</h2>
      <img src={state.firstPic} />
      <StarDisplay stars={ stars } />
    </div>
  )
}

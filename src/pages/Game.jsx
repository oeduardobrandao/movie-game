import { useContext } from "react"
// import { getCast } from "../api"
import GameContext from "../context/GameContext"
import StarDisplay from "../components/StarDisplay"

export default function Game() {
  const { state } = useContext(GameContext)

  // const getStars = async () => {
  //   const data = await getCast();
  //   return data;
  // }

  // const stars = getStars();
  // console.log(stars);

  return (
    <>
      <h2>Game</h2>
      <img src={state.firstPic} />
      <StarDisplay stars={ state.stars } />
      {/* {
        stars.map((star) => (
          <div
            key={star.id}
            className="star-poster"
          >
            <img src={`${imgPath}${star.profile_path}`} alt="" />
          </div>
        ))
      } */}
    </>
  )
}

import { useContext } from 'react'
import icon from '../images/game-icon.svg'
import GameContext from '../context/GameContext'

export default function Header() {
  const { state: { steps } } = useContext(GameContext);
  return (
    <header>
      <img src={icon} alt="Game icon" />
      <p>{steps} steps</p>
    </header>
  )
}

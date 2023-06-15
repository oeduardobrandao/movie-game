import { useContext } from 'react'
import { Link } from 'react-router-dom';
import icon from '../images/game-icon.svg'
import GameContext from '../context/GameContext'

export default function Header() {
  const { state: { steps } } = useContext(GameContext);
  return (
    <header>
      <Link to="/">
        <img src={icon} alt="Game icon" />
      </Link>
      <p>{steps} steps</p>
    </header>
  )
}

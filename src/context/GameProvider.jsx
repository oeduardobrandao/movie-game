import { useState } from 'react';
import propTypes from 'prop-types';
import GameContext from './GameContext';

export default function GameProvider({ children }) {
  const [state, setState] = useState({
    input: '',
    movies: [],
    stars: [],
    isOneSelected: false,
    isTwoSelected: false,
    currentMovie: {},
    finalMovie: {},
    currentStar: {},
    firstPic: '',
    secondPic: '',
    steps: 0,
  })

  const contextValues = {
    state,
    setState
  };

  return (
    <GameContext.Provider value={ contextValues }>
      {children}
    </GameContext.Provider>
  );
}

GameProvider.propTypes = {
  children: propTypes.node.isRequired,
};
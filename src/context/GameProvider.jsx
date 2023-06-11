import { useState } from 'react';
import propTypes from 'prop-types';
import GameContext from './GameContext';
// import { getMoviesByTitle } from '../api';

export default function GameProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [stars, setStars] = useState([]);
  const [steps, setSteps] = useState(0);
  const [query, setQuery] = useState('');
  
  // useEffect(() => {
  //   setMovies(getMoviesByTitle(query));
  // }, [query]);

  const contextValues = {
    movies,
    setMovies,
    stars,
    setStars,
    steps,
    setSteps,
    query,
    setQuery
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
import { getMovieDetails, getCast } from './api';
import MovieDisplay from './components/MovieDisplay';
import MovieSelector from './components/MovieSelector';
import './App.css'

function App() {
  console.log(getMovieDetails(603692));
  console.log(getCast(603692));
  return (
    <>
      <h1>Movie Game</h1>
      <MovieSelector />
      <MovieDisplay />
    </>
  );
}

export default App;


import { useState } from 'react';
import './App.css'
import { getMoviesByTitle } from './api';

function App() {
  const imgPath = 'https://image.tmdb.org/t/p/w1280/';
  const [input, setInput] = useState('')
  const [movies, setMovies] = useState([])
  const [firstSelected, setFirstSelected] = useState(false)
  const [secondSelected, setSecondSelected] = useState(false)
  const [firstMovie, setFirstMovie] = useState(0)
  const [firstMoviePic, setFirstMoviePic] = useState('')
  const [secondMovie, setSecondMovie] = useState(0)
  const [secondMoviePic, setSecondMoviePic] = useState('')
  

  const handleButton = async () => {
    const queryMovies = await getMoviesByTitle(input);
    setMovies(queryMovies);
  }

  console.log(movies);
  
  return (
    <>
      <header>
        <h1>Movie Game</h1>
      </header>
      <section>
        <img src={firstMoviePic || `https://t4.ftcdn.net/jpg/04/99/93/31/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg`} alt="" />
        <img src={secondMoviePic || `https://t4.ftcdn.net/jpg/04/99/93/31/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg`} alt="" />
      </section>
      <form>
        {
          !firstSelected
          ? (
            <>
              <label htmlFor="firstMovie">
              Select the first movie:
                <br/>
                <input
                  type="text"
                  name="firstMovie"
                  id="firstMovie"
                  placeholder="Avatar..."
                  value={ input }
                  onChange={ (e) => {
                    setInput(e.target.value)
                  }}
                />
              </label>
              <br/>
              <button
                type="button"
                onClick={ handleButton }
              >
                Search
              </button>
              <div
                className="movie-list"
              >
                {
                  (movies.length > 0)
                  ? movies.map((movie) => (
                    <button
                      type="button"
                      key={movie.id}
                      className="movie-poster"
                      onClick={ (e) => {
                        setFirstMovie(e.target.id)
                        setFirstMoviePic(e.target.src);
                        setFirstSelected(true)
                      }}
                    >
                      <img src={`${imgPath}${movie.poster_path}`} alt="" id={movie.id} />
                    </button>
                  )) : ('')
                }
              </div>
            </>
          ) : (
            <>
              <label htmlFor="firstMovie">
                Now, select the second movie:
                <br/>
                <input
                  type="text"
                  name="secondMovie"
                  id="secondMovie"
                  placeholder="Star Wars..."
                  value={ input }
                  onChange={ (e) => {
                    setInput(e.target.value)
                  }}
                />
              </label>
              <br/>
              <button
                type="button"
                onClick={ handleButton }
              >
                Search
              </button>
              <div
                className="movie-list"
              >
                {
                  (movies.length > 0)
                  ? movies.map((movie) => (
                    <button
                      type="button"
                      key={movie.id}
                      className="movie-poster"
                      onClick={ (e) => {
                        setSecondMovie(e.target.id)
                        setSecondMoviePic(e.target.src)
                        setSecondSelected(true)
                      }}
                    >
                      <img src={`${imgPath}${movie.poster_path}`} alt="" id={movie.id} />
                    </button>
                  )) : ('')
                }
              </div>
            </>
          )
        }
      </form>
    </>
  );
}

export default App;

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCast, getMoviesByTitle } from '../api';
import Header from '../components/Header';
import GameContext from '../context/GameContext';

function Home() {
  const imgPath = 'https://image.tmdb.org/t/p/w1280/';
  const noImg = 'https://t4.ftcdn.net/jpg/04/99/93/31/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg';
  const navigate = useNavigate();

  const { state, setState } = useContext(GameContext);
  
  const handleButton = async () => {
    const queryMovies = await getMoviesByTitle(state.input);
    setState({
      ...state,
      movies: queryMovies,
    });
  }

  const getStars = async () => {
    const starsData = await getCast(state.firstMovie);
    (state.firstMovie) ? setState({ ...state, stars: starsData }) : console.log(starsData);
  }

  const handleButtonTwo = async () => {
    await getStars();
    await handleButton();
  }
  
  const handleStart = async () => {
    navigate('/game');
  }

  // console.log(state.movies);
  
  return (
    <>
      <Header />
      <section>
        <img src={state.firstPic || noImg} alt="" />
        <img src={state.secondPic || noImg} alt="" />
      </section>
      <form>
        {
          !state.isOneSelected
          ? (
            <>
              <label htmlFor="firstMovie">
              Select the first movie:
                <br/>
                <input
                  type="text"
                  name="firstMovie"
                  id="firstMovie"
                  placeholder="First movie..."
                  value={ state.input }
                  onChange={ (e) => {
                    setState({ ...state, input: e.target.value})
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
                  (state.movies.length > 0)
                  ? state.movies.map((movie) => (
                    <button
                      type="button"
                      key={movie.id}
                      className="movie-poster"
                      onClick={ (e) => {
                        setState({
                          ...state,
                          firstMovie: e.target.id,
                          firstPic: e.target.src,
                          isOneSelected: true,
                          input: '',
                        })
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
              {
                !state.isTwoSelected ?
                (
                  <>
                    <label htmlFor="firstMovie">
                      Now, select the second movie:
                      <br/>
                      <input
                        type="text"
                        name="secondMovie"
                        id="secondMovie"
                        placeholder="Second movie..."
                        value={ state.input }
                        onChange={ (e) => {
                          setState({ ...state, input: e.target.value})
                        }}
                      />
                    </label>
                    <br/>
                    <button
                      type="button"
                      onClick={ handleButtonTwo }
                    >
                      Search
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={ handleStart }
                  >
                    Start
                  </button>
                )
              }
              <div
                className="movie-list"
              >
                {
                  (state.movies.length > 0)
                  ? state.movies.map((movie) => (
                    <button
                      type="button"
                      key={movie.id}
                      className="movie-poster"
                      onClick={ (e) => {
                        setState({
                          ...state,
                          secondMovie: e.target.id,
                          secondPic: e.target.src,
                          isTwoSelected: true,
                          input: '',
                        })
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

export default Home;
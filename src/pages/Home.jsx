import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCast, getMoviesByTitle } from '../api';
import { animateScroll as scroll } from 'react-scroll'
import Header from '../components/Header';
import GameContext from '../context/GameContext';
import noImg1 from '../images/no-img-1.svg';
import noImg2 from '../images/no-img-2.svg';
import Footer from '../components/Footer';

export default function Home() {
  const navigate = useNavigate();
  const imgPath = 'https://image.tmdb.org/t/p/w1280/';
  const { state, setState } = useContext(GameContext);

  function scrollTo(y) {
    scroll.scrollTo(y)
  }
  
  const handleButton = async () => {
    const queryMovies = await getMoviesByTitle(state.input);
    setState({
      ...state,
      movies: queryMovies,
    });
    scrollTo(400);
  }

  const getStars = async () => {
    const starsData = await getCast(state.currentMovie);
    (state.currentMovie) ? setState({ ...state, stars: starsData }) : console.log(starsData);
  }

  const handleButtonTwo = async () => {
    await getStars();
    await handleButton();
  }
  
  const handleStart = async () => {
    await getStars();
    navigate('/movie');
  }

  const handleReset = () => {
    setState({
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
  }
  
  return (
    <>
      <Header />
      <section>
        <img src={state.firstPic || noImg1} alt="" className="movie-img-home" />
        <img src={state.secondPic || noImg2} alt="" className="movie-img-home" />
      </section>
      <form>
        {
          !state.isOneSelected
          ? (
            <>
              <label htmlFor="currentMovie">
                <br/>
                <input
                  type="text"
                  name="currentMovie"
                  id="currentMovie"
                  placeholder="Select the first movie..."
                  value={ state.input }
                  onChange={ (e) => {
                    setState({ ...state, input: e.target.value})
                  }}
                />
              </label>
              <br/>
              <button
                className="form-btn"
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
                          currentMovie: e.target.name,
                          firstMovie: e.target.name,
                          firstPic: e.target.src,
                          isOneSelected: true,
                          input: '',
                        })
                      }}
                    >
                      <img src={`${imgPath}${movie.poster_path}`} alt="" id={movie.id}
                        name={JSON.stringify(movie)} />
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
                    <label htmlFor="currentMovie">
                      <br/>
                      <input
                        type="text"
                        name="secondMovie"
                        id="secondMovie"
                        placeholder="Now, search for the second movie..."
                        value={ state.input }
                        onChange={ (e) => {
                          setState({ ...state, input: e.target.value})
                        }}
                      />
                    </label>
                    <br/>
                    <button
                      className="form-btn"
                      type="button"
                      onClick={ handleButtonTwo }
                    >
                      Search
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="form-btn reset-btn"
                      type="button"
                      onClick={ handleReset }
                    >
                      Reset
                    </button>
                    <br />
                    <button
                      className="form-btn"
                      type="button"
                      onClick={ handleStart }
                    >
                      Start
                    </button>
                  </>
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
                          finalMovie: e.target.name,
                          secondPic: e.target.src,
                          isTwoSelected: true,
                          input: '',
                        })
                      }}
                    >
                      <img src={`${imgPath}${movie.poster_path}`} alt="" id={movie.id} name={JSON.stringify(movie)} />
                    </button>
                  )) : ('')
                }
              </div>
            </>
          )
        }
      </form>
      <Footer />
    </>
  );
}

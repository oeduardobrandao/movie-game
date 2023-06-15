import { useContext, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { getCast } from "../api"
import GameContext from "../context/GameContext"
import Header from "../components/Header";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Footer from "../components/Footer";

const MySwal = withReactContent(Swal);


export default function Movie() {
  const { state, setState } = useContext(GameContext);
  const myRef = useRef(null);
  const { currentMovie, finalMovie, stars, steps } = state;
  const navigate = useNavigate();
  const movie = JSON.parse(currentMovie);
  const targetMovie = JSON.parse(finalMovie);


  const imgPathStars = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/';
  const imgPathMovie = movie ?
    `https://image.tmdb.org/t/p/w1280/${movie.poster_path}` : ''

  const getStars = async (movieId) => {
    const data = await getCast(movieId);
    setState({...state, stars: data});
  }

  const handleClick = (star) => {
    setState({ ...state, currentStar: star, steps: steps + 1})
    navigate('/cast')
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

  const checkWin = () => {
    if (movie.id === targetMovie.id) {
      MySwal.fire(
        'You won!',
        `You got to the target movie in ${steps} steps!`,
        'success'
      ).then(handleReset()).then(navigate('/'))
    }
  }

  useEffect(() => {
    myRef.current.scrollIntoView();
    checkWin();
    getStars(movie.id);
  }, [])

  return (
    <>
      <div ref={myRef}><Header /></div>
      <div className="movie" ref={myRef}>
        <div className="movie-info">
          <h2>{movie.original_title}</h2>
          <img className="movie-hero" src={ imgPathMovie || state.firstPic} />
        </div>
        <div className="star-list">
            {
              (stars) ? (
                stars.map((star) => (
                    <button
                      key={star.id}
                      className="star-poster"
                      type="button"
                      onClick={ () => handleClick(star) }
                    >
                      <img src={`${imgPathStars}${star.profile_path}`} alt={star.name} id={star.id} />
                      <p>{star.name}</p>
                    </button>
                ))
              ) : ('')
            }
        </div>
      </div>
      <Footer />
    </>
  )
}

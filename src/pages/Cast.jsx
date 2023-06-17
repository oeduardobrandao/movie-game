import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getStarMovies } from "../api";
import GameContext from "../context/GameContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Cast() {
  const { state, setState } = useContext(GameContext);
  const myRef = useRef(null);
  const { currentStar, movies, steps } = state;
  const navigate = useNavigate();
  const imgPath = 'https://image.tmdb.org/t/p/w1280/';
  const imgPathStars = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/';

  const setStarMovies = async (star) => {
    const data = await getStarMovies(star);
    setState({ ...state, movies: data });
  };

  const handleClick = (movie) => {
    setState({ ...state, currentMovie: movie, steps: steps + 1 });
    navigate('/movie');
  };

  useEffect(() => {
    myRef.current.scrollIntoView();
    setStarMovies(currentStar.id);
  }, [])

  return (
    <>
      <div ref={ myRef }><Header /></div>
      <div className="cast">
        <div className="cast-info">
          <h2>{currentStar.name}</h2>
          <img className="star-hero" src={`${ imgPathStars }${ currentStar.profile_path }`} />
        </div>
        {
        (movies.length > 0) ? (
          <div className="movie-list">
            {
              movies.map((movie) => (
                <button
                  key={ movie.id }
                  className="movie-poster"
                  onClick={ () => handleClick(JSON.stringify(movie)) }
                >
                  <img src={`${ imgPath }${ movie.poster_path }`} alt={ movie.name } />
                </button>
              ))
            }
          </div>
        ) : ('')
      }
      </div>
      <Footer />
    </>
  )
}

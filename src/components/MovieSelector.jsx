import { useContext, useEffect, useState } from "react"
import GameContext from "../context/GameContext";
import { getMoviesByTitle } from "../api";

export default function MovieSelector() {
  const [input, setInput] = useState('');

  const { setQuery, query, setMovies } = useContext(GameContext);

  useEffect(() => {
    setMovies(getMoviesByTitle(query))
  }, [query, setMovies])

  return (
    <form>
      <label htmlFor="firstMovie">
        Select the first movie:
        <br/>
        <input
          type="text"
          name="firstMovie"
          id="firstMovie"
          placeholder="Avatar..."
          value={ input }
          onChange={ (e) => setInput(e.target.value) }
        />
      </label>
      <br/>
      <button
        type="button"
        onClick={ () => setQuery(input) }
      >
        Search
      </button>
    </form>
  )
}

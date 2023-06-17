import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Cast from './pages/Cast';
import NotFound from './pages/NotFound';
import './App.css'

function App() {  
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/movie" element={ <Movie /> } />
      <Route path="/cast" element={ <Cast /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;

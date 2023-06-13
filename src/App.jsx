import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import NotFound from './pages/NotFound';
import ScoreBoard from './pages/ScoreBoard';
import './App.css'

function App() {  
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/game" element={ <Game /> } />
      <Route path="/score" element={ <ScoreBoard /> } />
      <Route path="" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GameProvider from './context/GameProvider';

const container = document.getElementById('root');
const root = createRoot(container); 

root.render(
  <GameProvider>
    <BrowserRouter>
      <App tab="home" />
    </BrowserRouter>
  </GameProvider>
);

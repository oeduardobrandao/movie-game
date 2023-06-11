import { createRoot } from 'react-dom/client';
import App from './App';
import GameProvider from './context/GameProvider';

const container = document.getElementById('root');
const root = createRoot(container); 

root.render(
  <GameProvider>
    <App tab="home" />
  </GameProvider>
);

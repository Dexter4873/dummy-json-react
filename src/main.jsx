import { createRoot } from 'react-dom/client';
import App from './pages/App.jsx';
import './assets/css/index.css';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

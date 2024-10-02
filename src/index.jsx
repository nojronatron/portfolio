import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

/* GLOBAL VARIABLES */

window.$primaryLanguage = 'en';
window.$primaryLanguageIconId = 'primary-lang-icon';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

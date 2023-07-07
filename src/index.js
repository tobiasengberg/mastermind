import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Game1} from "./components/game1";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Game1 />
  </React.StrictMode>
);

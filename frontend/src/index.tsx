import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';


ReactDOM.render( //comando que acessa o root que está no html 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


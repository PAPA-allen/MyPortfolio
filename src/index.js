import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import {ThemeProvider} from './Context';


ReactDOM.render(
  <ThemeProvider>
      <App />
  </ThemeProvider>,
  document.getElementById('root')
);


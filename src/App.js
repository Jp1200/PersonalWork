import React from 'react';
import Main from './Mainpage.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router
} from "react-router-dom";

import './App.scss';
function App() {
  return (
    <Router>
      <Main/>
      <div className='page-bg'>
        <div className='animation-wrapper'>
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>

      </div>
    </div>
    </Router>
  );
}

export default App;

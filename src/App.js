import React from 'react';
import Main from './Mainpage.js';
// import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';
function App() {
  return (
    <>
      <Main/>
      <div className='page-bg'>
        <div className='animation-wrapper'>
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>

      </div>
    </div>
    </>
  );
}

export default App;

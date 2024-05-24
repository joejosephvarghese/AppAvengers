import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeRouter from './Routes/home/HomeRouter';


function App() {
  return (
    <div className='font-roboto'>
      <Router>
        <Routes>
          <Route path="/*" element={<HomeRouter/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

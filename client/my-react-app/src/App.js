import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeRouter from './Routes/home/HomeRouter';
import {Provider} from 'react-redux'
import store from './redux/store';

function App() {
  return (
  <Provider store={store}>
    <div className='font-roboto'>
      <Router>
        <Routes>
          <Route path="/*" element={<HomeRouter/>} />
        </Routes>
      </Router>
    </div>
    </Provider>
  );
}

export default App;

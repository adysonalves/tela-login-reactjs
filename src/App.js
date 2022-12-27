import React from 'react';
import './App.css';
import TelaLogin from './screens/LoginBootstrap';
import LoginHTML from './screens/LoginHTML';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<TelaLogin />} />
        <Route path='/login2' element={<LoginHTML />} />
      </Routes>
    </Router>   
    
  );
}

export default App;

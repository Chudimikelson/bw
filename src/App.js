import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Standings from './components/Standings';

function App() {
  return (
    <div className="App">
      <Header/>
      <Standings/>
      <Footer/>
    </div>
  );
}

export default App;

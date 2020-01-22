import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Container} from 'reactstrap';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Container>
        <Header/>
        <Menu/>
        <Footer/>
      </Container>
    </div>
  );
}

export default App;

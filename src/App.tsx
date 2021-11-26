import React from 'react';
import logo from './logo.svg';
import bg from '../src/assets/background.svg'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import { Jumbotron } from './components/Jumbotron';
import { Header } from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <body style={{ backgroundImage: bg }}>
      <Header></Header>
      <Jumbotron />
      <Card />
    </body>
  );
}

export default App;

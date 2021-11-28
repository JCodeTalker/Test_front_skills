import React from 'react';
import logo from './logo.svg';
import bg from '../src/assets/background.svg'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap';
import './App.css';
import { Jumbotron } from './components/Jumbotron';
import { Header } from './components/Header';
import Card from './components/Card';
import Pricing from './components/Pricing';

function App() {
  return (
    // <body style={{ backgroundImage: bg }}>
    <>
      <Header></Header>
      <Jumbotron />
      <div className="container" style={{ width: "70vw" }}>
        <div className="row">
          <div className="col-md-4">
            Col-md-4umn
            <Card title="Peace of Mind" paragraph="the quick fox jumps over the 
lazy dog" />
          </div>
          <div className="col-md-4">
            Col-md-4umn
            <Card title="Set For Life" paragraph="the quick fox jumps over the 
lazy dog"/>
          </div>
          <div className="col-md-4">
            Column
            <Card title="100% Satisfaction" paragraph="the quick fox jumps over the 
lazy dog"/>
          </div>
        </div>
      </div>
      <Pricing></Pricing>
      {/* // </body> */}
    </>
  );
}

export default App;

import React, { Component } from 'react';
import './App.css';
import WelcomeBar from './components/WelcomeBar/WelcomeBar';
import Hero from './components/Hero/Hero';

class App extends Component {

  render() {
    return (
      <div className="app">
        <div className="containerOne">
          <WelcomeBar/>
        </div>
        <div className="containerTwo">
          <Hero postTitle="How I Got a PM Internship"/>
        </div>
      </div>
    );
  }
}

export default App;

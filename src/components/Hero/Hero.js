import React, { Component } from 'react';
import './Hero.css';
import sankey from '../../sankey.svg';

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <h1>{this.props.postTitle}</h1>
        <p>
          TLDR: I applied to 60 diffrent PM internships.
          {/* 
            Applications [50] Confirmation Email
            Applications [7] Ghosted
            Confirmation Email [20] Ghosted
            Confirmation Email [21] Rejected
            Confirmation Email [5] Phone Screen
            Confirmation Email [2] Given Take-Home
            Phone Screen [1] Given Take-Home
            Given Take-Home [1] Product Interview
            Given Take-Home [2] Rejected
            Phone Screen [2] Product Interview
            Product Interview [2] Rejected
            Product Interview [1] Offer
          */}
        </p>
        <img src={sankey} className="App-logo" alt="logo" />

        
      </div>
    );
  }
}

export default Hero;
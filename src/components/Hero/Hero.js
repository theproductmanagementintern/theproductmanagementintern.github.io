import React, { Component } from 'react';
import './Hero.css';
import TextCookie from '../TextCookie/TextCookie';

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <h1 className="heroTitle">{this.props.postTitle}</h1>
        <TextCookie displayNum="0"/>
        <TextCookie displayNum="1"/>
        <TextCookie displayNum="2"/>
        <TextCookie displayNum="3"/>
        <TextCookie displayNum="4"/>
        <TextCookie displayNum="5"/>
        <TextCookie displayNum="6"/>
      </div>
    );
  }
}

export default Hero;

// Applications [50] Confirmation Email
// Applications [7] Ghosted
// Confirmation Email [20] Ghosted
// Confirmation Email [21] Rejected
// Confirmation Email [5] Phone Screen
// Confirmation Email [2] Given Take-Home
// Phone Screen [1] Given Take-Home
// Given Take-Home [1] Product Interview
// Given Take-Home [2] Rejected
// Phone Screen [2] Product Interview
// Product Interview [2] Rejected
// Product Interview [1] Offer
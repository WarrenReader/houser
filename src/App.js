import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Homepage from './components/homepage/homepage.js';


export default class App extends Component {

  render() {
    return (
      <div>
        <Homepage />
      </div>
    );
  }
}
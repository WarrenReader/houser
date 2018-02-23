import React, { Component } from 'react';
import './reset.css';
import './App.css';
import router from './router';


export default class App extends Component {

  render() {
    return (
      <div>
        {router}
      </div>
    );
  }
}
import React, { Component } from 'react';
import './App.css';
import Home from './components/home.js'
import {
  BrowserRouter as Router
} from 'react-router-dom'
export default class App extends Component {
  constructor(){
    super()
    this.state={
      signup: false
    }
  }
  render() {
    return (
      <Router>
<Home></Home></Router>
    );
  }
}


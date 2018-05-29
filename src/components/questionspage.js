import React, { Component } from 'react';
import '../App.css';
import Signup from './Signup.js'
import Questionmenu from './Login.js'
import Questionindex from './questionindex.js'
import Questionnew from './questionnew.js'
import { Switch, Route } from 'react-router-dom'
export default class Questionpage extends Component {
  constructor(){
    super()
    this.state={
    }
  }
  render() {
    return (
        <div className="App">

        <Switch>
        
        <Route path='/questionindex/:token' component={Questionindex} />
        <Route path='/questionnew/:token' component={Questionnew} />
        </Switch>
</div>
    );
  }
}

import React, { Component } from 'react';
import '../App.css';
import Signup from './Signup.js'
import Login from './Login.js'
import Questionpage from './questionspage.js'
import { Switch, Route } from 'react-router-dom'
import EditQuestion from './editquestion.js'
import Questionnew from './questionnew.js'
export default class Home extends Component {
  constructor(){
    super()
    this.state={
      signup: false
    }
  }
  render() {
    return (
        <div className="App">
<header className="App-header">
  <h1 className="App-title">Welcome to Question System</h1>
</header>
        <Switch>
        <Route path='/Signup' component={Signup}></Route>
        <Route  exact path='/' component={Login}></Route>
        <Route path='/questionindex/:token' component={Questionpage} />
        <Route path='/q/edit/:id/:token' component={EditQuestion} />
        <Route path='/questionnew/:token' component={Questionnew} />
        </Switch>
</div>
    );
  }
}



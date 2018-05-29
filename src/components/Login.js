import React, { Component } from 'react';
import '../App.css'
import { Link,Redirect,Route } from 'react-router-dom'
import Questionindex from './questionindex.js'
export default class Login  extends Component {
    constructor(){
        super()
        this.state={
            Email:"",
            password:"",
            password2:""
        };
    };
    render() {
      return (<div className="card">
            <div className="form-group">
                <label className="">Email</label>
                    <input className="inputs" id="UserName" value={this.state.Email} onChange={email => this.updateEmail(email)}></input>
            </div>
            <div className="form-group">
                <label>Password</label>
                    <input className="inputs" id="Password" value={this.state.password} onChange={pass => this.updatepassword(pass)}></input>
            </div>
            <div className="submit-group">
                <button className="button" onClick={()=>this.login()}>Login</button>
            </div>
            <div><Link className="linktext" to="/Signup">Sign Up</Link></div>
        </div>);
    };
    updateEmail(email){
        this.setState({
            Email:email.target.value
        })
    };
    updatepassword(pass){
        this.setState({
            password:pass.target.value
        })
    };
    updatepassword2(pass2){
        this.setState({
            password2:pass2.target.value
        })
    };
    login(){
        var name =this.state.Email
        var pass= this.state.password
        var loc='https://infinite-caverns-13207.herokuapp.com/auth/login'
            fetch(loc, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                   },
                body: JSON.stringify({email:name,
                    password:pass}),
                
        }).then(dataWrappedByPromise => dataWrappedByPromise.json())
        .then(data => {
            // you can access your data here
            
            console.log(data)
            if(data.message ==="You logged in successfully."){
                window.location="/questionindex/"+data.access_token
            }else{
            return data.access_token
            }
        })
    };
}
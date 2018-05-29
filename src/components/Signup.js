import React, { Component } from 'react';
import '../App.css'
import { Link } from 'react-router-dom'
export default class Signup  extends Component {
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
                <label>Email</label>
                    <input className="inputs" id="UserName" value={this.state.Email} onChange={email => this.updateEmail(email)}></input>
            </div>
            <div className="form-group">
                <label>Password</label>
                    <input className="inputs" id="Password" value={this.state.password} onChange={pass => this.updatepassword(pass)}></input>
            </div>
            <div className="form-group">
                <label>Confirm Password</label>
                    <input className="inputs" id="Password2" value={this.state.password2} onChange={pass2 => this.updatepassword2(pass2)}></input>
            </div>
            <div className="submit-group">
                <button className="button" onClick={()=>this.login()}>Sign Up</button>
            </div>
            <div><Link className="linktext" to='/'>Login</Link></div>

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
        var loc='https://infinite-caverns-13207.herokuapp.com/auth/register'
            fetch(loc, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                   },
                body: JSON.stringify({email:name,
                    password:pass}),
                
        }).then(function(response){
            console.log("response")
            
            console.log(response)
            
         //return response
        })
    
    };
}
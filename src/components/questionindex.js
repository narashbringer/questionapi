import React, { Component } from 'react';
import Questionrow from './questionrow.js'
import { Link,Redirect,Route } from 'react-router-dom'
export default class Questionindex  extends Component {
    constructor(props){
        super(props)
        this.state={
          questions:[]
        };
    };
    componentWillMount(){
      this.getquestions()
    }
    render() {
     
        let tablemap=this.state.questions.map((val,key)=>{
        return(<Questionrow val={val} key={key} keygen={key} token={this.props.match.params.token }/>)
        });
        return(
          <div className='card'>
            <div>
              <header >
              <Link to={'/questionnew/'+this.props.match.params.token} className='newbutton'> <button className="newbutton">NEW</button></Link>
              </header>
            </div>
            <div >
            
            <table className="questiontable">
            <thead>
            <tr className="hidden-xs hidden-sm hidden-md">
              <th>
                <span>Question </span>
       
              </th>
              <th>
              <span> Answer</span>
             
              </th>
              <th>
              <span> Distractors</span> 
              </th>
              <th>
              <span> Actions</span>
              </th>
            </tr>
          
            </thead>
          
            <tbody>
          
           {tablemap}
            </tbody>
          </table>
          </div>
          </div>
        )
    }
    getquestions(){
      console.log("aaa"+this.props.match.params.token)
      var stuff ='Bearer '+this.props.match.params.token;
      var loc='https://infinite-caverns-13207.herokuapp.com/questions/'
          fetch(loc, {
              method: 'GET',
              mode: 'cors',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': stuff
                 },
            
      }).then(dataWrappedByPromise => dataWrappedByPromise.json())
      .then(data => {
          console.log(data.message)
          if (data.message ==="Expired token. Please login to get a new token"){
            window.location="/"
          }else{
         this.setState({
          questions:data
         })}
      })

}}
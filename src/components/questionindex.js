import React, { Component } from 'react';
import Questionrow from './questionrow.js'

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
      console.log("aaa"+this.props.match.params.token)
        let tablemap=this.state.questions.map((val,key)=>{
        return(<Questionrow val={val} key={key} keygen={key} token={this.props.match.params.token }/>)
        });
        return(
            <table >
            <thead>
            <tr className="hidden-xs hidden-sm hidden-md">
              <th>
                <span>Question </span>
              </th>
              <span> Answer</span>
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
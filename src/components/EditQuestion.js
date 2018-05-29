import React, { Component } from 'react';
export default class EditQuestion extends Component {
    constructor(props){
      super(props)
      this.state={
       
      }
    }
    render(){
        return (
            <div>{this.props.match.params.id}</div>
        )
    }
    get(){
        var stuff ='Bearer '+ this.props.match.params.token
        var loc='https://infinite-caverns-13207.herokuapp.com/questions/'+this.props.match.params.id
        fetch(loc, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': stuff
               },
          
    }).then(dataWrappedByPromise => dataWrappedByPromise.json())
    .then(data => {
        console.log(data)
        
       this.setState({
        questions:data
       })
    })
}}
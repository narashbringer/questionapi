import React, { Component } from 'react';
import Questionrow from './questionrow.js'
import { Link,Redirect,Route } from 'react-router-dom'
import Pagination from "react-js-pagination";
// import  {pagination} from 'react-bootstrap';
export default class Questionindex  extends Component {
    constructor(props){
        super(props)
        this.state={
          questions:[],
          activePage:1
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
          
           {tablemap.slice(this.state.activePage*10,((this.state.activePage*10)+10))}
            </tbody>
     
          </table>
       
          </div>
          <Pagination
            className={"paginations"}
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={tablemap.length}
          pageRangeDisplayed={5}
          onChange={pageNumber =>this.handlePageChange(pageNumber)}
        />
          </div>
        )
    }
    handlePageChange(pageNumber){
      console.log(pageNumber)
      this.setState({
      activePage:pageNumber
      })
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
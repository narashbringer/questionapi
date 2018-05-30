import React, { Component } from 'react';
import { Link,Redirect,Route } from 'react-router-dom'

export default class EditQuestion extends Component {
    constructor(props){
      super(props)
      this.state={
        questions:'',
        distractor:'',
        answer:'',
      };
    };
    componentWillMount(){
        this.get()
    }

    render(){
       

        return (<div> <Link to={'/questionindex/'+this.props.match.params.token} > <button className='newbutton'>Back</button></Link>
            <div className="card">
            <form>
            <div>
            <div className="form-group">
                <label>Question:</label>
                <input   className="inputs" value={this.state.questions} onChange={qess => this.updatequestions(qess)}/>
                </div> <div className="form-group">
                <label>Answer:</label>
                <input className="inputs" value={this.state.answer} onChange={ans => this.updateanswer(ans)}/>
                </div>  <div className="form-group">
                <label>Distractors:</label>
                <input  className="inputs" value={this.state.distractor} onChange={dis => this.updatedistractor(dis)}/>
                </div>
                <button onClick={()=>this.Update()}>Update</button>
               </div>
            </form>
          </div></div>
        )
    };
    updatequestions(question){
        this.setState({
            questions:question.target.value
        })
    };
    updateanswer(answer){
        this.setState({
            answer:answer.target.value
        })
    };
    updatedistractor(distractor){
        this.setState({
            distractor:distractor.target.value
        })
    };
 
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
        data.distractor
       this.setState({
        questions:data.question,
        answer:data.answer,
        distractor:data.distractor,

       })
    })
};
    Update(){
        var stuff ='Bearer '+ this.props.match.params.token
      var token=this.props.match.params.token
        var loc='https://infinite-caverns-13207.herokuapp.com/questions/'+this.props.match.params.id
        fetch(loc, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': stuff
               },
               body:JSON.stringify({question:this.state.questions,answer:this.state.answer,distractor:this.state.distractor}),
          
    }).then(dataWrappedByPromise => dataWrappedByPromise.json())
    .then(data => {
        window.location="/questionindex/"+ token
    })
};
}
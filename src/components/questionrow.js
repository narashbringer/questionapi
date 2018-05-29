import React, { Component } from 'react';
import { Link,Redirect,Route } from 'react-router-dom'

export default class Questionrow  extends Component {
    constructor(props){
        super(props)
        this.state={
        
        };
    };

    render() {
        return(
<tr className="Cardwhite">
<td><span>{this.props.val.question}</span>
</td>
<td className="hidden-xs hidden-sm hidden-md">
  <span>{this.props.val.answer}</span>
</td>
<td className="hidden-xs hidden-sm hidden-md">
  <span>{this.props.val.distractor}</span>
</td>
  <td >
<Link to={'/q/edit/'+this.props.val.id+'/'+this.props.token} >edit</Link>      
      <a onClick={()=>this.delete()}><img src={require("../images/trash.svg")} title="Delete" height="20" width="20"></img></a>
           </td>
</tr>)

}
delete(){
    var stuff ='Bearer '+ this.props.token
    var loc='https://infinite-caverns-13207.herokuapp.com/questions/'+this.props.val.id
    fetch(loc, {
        method: 'DELETE',
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

}
}
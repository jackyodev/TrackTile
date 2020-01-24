import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios'


class Volunteer extends Component {
 constructor (props) {
  super(props)
  this.state ={

  }
 }


 componentDidMount (){
  
  var paramsID = this.props.match.params.id;

  axios.get(`/api/log/users/${paramsID}`).then( result => {
   console.log(result)
  });

  axios.get(`/api/users/?id=${paramsID}`).then(result => {
   console.log(result)
  });


  

 }


 render () {
  return (
   <div>
    <h1> Single Volunteer</h1>
   </div>
  )
 }
}

export default withRouter(Volunteer)
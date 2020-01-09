import React, { Component } from 'react';
import {withRouter} from "react-router"

import Time from '../component/functionClass'


class Today extends Component {
 constructor (props) {
  super(props)
  this.state = ({
   today:[]
  })
 }
 

 testFunction = () =>{
  let b = new Time

  console.log(b.convert24("14:33"))

  
 }


 componentDidMount (){
  this.testFunction()
 }


 render() {
  return (
   <div>
    
   </div>



  );
 }
}

export default withRouter(Today);
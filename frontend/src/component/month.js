import React, { Component } from 'react';
import {withRouter} from "react-router"
import Axios from 'axios'

import '../css/month.css'

import Function from './function'


class Month extends Component {
 constructor (props) {
  super(props)
  this.state = ({
   today:[]
  })
 }

 getToday = () => {
  Axios.get('/api/log/today').then((res) => {
   this.setState({
    today: res.data.result
   }
   )
  })

 }



 componentDidMount() {
  this.getToday()
 }
 

 render() {
  return (
   <div className = "monthContainer">
   <h1> Summary</h1>
   <p> Pick a date or month to see summary.</p>
   <div className = "summaryBody"> 
   <h1> Here am I  </h1>
   </div>
    
   </div>



  );
 }
}

export default withRouter(Month);
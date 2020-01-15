import React, { Component } from 'react';
import { withRouter } from "react-router"
import Axios from 'axios'

import '../css/month.css'

// import Function from './function'

import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

let d = new Date()

class Month extends Component {
 constructor(props) {
  super(props)
  this.state = ({
   today: [],
   endDate: new Date(),
   startDate: d.setDate(d.getDate() - 31),
  })
 }

 getRangeData = () => {
  Axios.post('/api/log/dates/',{
   startDate: '2019/12/12',
   endDate: '2020/01/31'
  }).then( result =>{
   console.log(result)
  })
 }

 handleStartDate = (date) => {
  this.setState({
   startDate: date
  });
  console.log(this.state)
 }

handleEndDate = (date) => {
 this.setState({
  endDate: date
 });
};


componentDidMount() {
 this.getRangeData()
};

render() {
 return (
  <div className="monthContainer">
   <h1> Summary</h1>
   <p> Select your range:</p>
   <div className="summaryBody">

    <div title="startDate">
     <h3> Start Date: </h3>
     <DatePicker
      selected={this.state.startDate}
      onChange={this.handleStartDate}
     />
    </div>
   </div>
   <div title="endDate">
    <h3>End Date:</h3>
    <DatePicker
     selected={this.state.endDate}
     onChange={this.handleEndDate}
    />
   </div>
  </div>
 )}}

export default withRouter(Month);
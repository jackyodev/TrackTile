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
   endDate: new Date(),
   startDate: d.setDate(d.getDate() - 31),
   dataResults: [],
   countResults: "",
   sumResults: "",
  })
 }

 getRangeSet = () => {
  let startDate = "12/02/2019"
  let endDate = "01/31/2020"

  let params = {
   params: {
    startDate: startDate, endDate: endDate
   }
  };

  let data = Axios.get(`/api/log/dates/`, params);

  let count = Axios.get(`/api/log/dates/count`, params);

  let sum = Axios.get(`/api/log/dates/sum`, params);

  let usersCounts = Axios.get(`/api/log/dates/count/users`, params);

  Axios.all([data, count, sum, usersCounts]).then(Axios.spread((...response) => {
   const dataResults = response[0].data.result

   const countResults = response[1].data.result[0].count

   const sumResults = response[2].data.result[0].sum

   const usersCountResults = response[3].data.result[0].count

   this.setState({
    dataResults,
    countResults,
    sumResults,
    usersCountResults
   })
  })).then(console.log(this.state))
   .catch(err => {
    console.log(err)
   })
 }

 handleStartDate = (date) => {
  this.setState({
   startDate: date
  });

 }

 handleEndDate = (date) => {
  this.setState({
   endDate: date
  });
 };


 componentDidMount() {
 };

 onClickGetRange = () => {
  this.getRangeData()
 };




 renderTotalSummary = () => {
  if (this.state.sumResults) {
   return (
    <div id="total_summary">
     <strong> Total Occurences: {this.state.countResults}</strong>
     <strong> Total Combine Hours: {this.state.sumResults}hrs</strong>
     <strong> Total People: {this.state.usersCountResults}</strong>
    </div>
   )
  }
 }

 renderList = () => {
  let map = this.state.dataResults.map((el, i) => (
   <p key = {i}> 

   <div> {el.first_name} </div>
   <div> {el.last_name} </div>
    <div> {el.start_time} </div>
    <div> {el.end_time} </div>
    <div> {el.daily_total}hrs </div>

   </p>
  ))

  return <div id="list">
   <p>
    <div> First Name</div>
    <div> Last Name </div>
    <div> Start Time </div>
    <div> End Time</div>
    <div> Daily Hour </div>

   </p>
  {map}
  </div>
 }


 render() {
  console.log(this.state)

  return (
   <div className="monthContainer">
    <h1> Summary</h1>
    <p> Select your range:</p>

    <div className="start_end">

     <div id="startDate">
      Start Date:
     <DatePicker
       selected={this.state.startDate}
       onChange={this.handleStartDate}
      />
     </div>

     <div id="endDate">
      End Date:
     <DatePicker
       selected={this.state.endDate}
       onChange={this.handleEndDate}
      />
     </div>
     <button onClick={this.getRangeSet}>
      Submit</button>

    </div>
    <div className="summaryBody">

     {this.renderTotalSummary()}
     {this.renderList()}

    </div>

   </div>
  )
 }
}

export default withRouter(Month);
import React, { Component } from 'react';
import { withRouter } from "react-router"
import Axios from 'axios'

import '../css/month.css'

import converter from './function'

import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

let d = new Date();
d.setDate(d.getDate() - 31);

let time = new converter();

class Month extends Component {
 constructor(props) {
  super(props)
  this.state = ({
   endDate: new Date(),
   startDate: d,
   dataResults: [],
   countResults: "",
   sumResults: "",
  })
 }

 getRangeSet = () => {

  let startDate;
  let endDate;

  if(this.state.startRange && this.state.endRange){
   startDate = this.state.startRange
   endDate = this.state.endRange
  }
  else{
   startDate = this.state.startDate.toLocaleDateString()
   
   endDate = this.state.endDate.toLocaleDateString()

  }


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
  }))
   .catch(err => {
    console.log(err)
   })
 }

 handleStartDate = (date) => {
  let yy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();

  this.setState({
   startDate: date,
   startRange: `${yy}/${mm}/${dd}`

  });

 }

 handleEndDate = (date) => {
  let yy = date.getFullYear()
  let mm = date.getMonth() + 1
  let dd = date.getDate()

  this.setState({
   endDate: date,
   endRange: `${yy}/${mm}/${dd}`
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
   <div id="row" key={i}>
    <div> {time.sliceSQLDate(el.entry_date)} </div>

    <div> {el.id} </div>
    <div> {el.first_name} </div>
    <div> {el.last_name} </div>
    <div> {time.convert24to12(el.start_time)} </div>
    <div> {time.convert24to12(el.end_time)} </div>
    <div> {el.daily_total}hrs </div>

   </div>
  ))

  return <div id="list">
   <div id="title">
    <div> Date </div>
    <div> User ID </div>
    <div> First Name</div>
    <div> Last Name </div>
    <div> Start Time </div>
    <div> End Time</div>
    <div> Daily Hour </div>

   </div>
   {map}
  </div>
 }


 render() {
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
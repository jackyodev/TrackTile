import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import Functions from './function'
import '../css/volunteer.css'


class Volunteer extends Component {
 constructor(props) {
  super(props)
  this.state = {
   user: [],
   log: []
  }
 }

 f = new Functions()

 getInfo = () => {
  let paramsID = this.props.match.params.id;
  let log = axios.get(`/api/log/users/${paramsID}`)
  let user = axios.get(`/api/users/?id=${paramsID}`)

  axios.all([log, user]).then(result => {
   this.setState({
    log: result[0].data.result,
    user: result[1].data.result
   })
  }).catch(err => {
   console.log(err)
  })
 }


 mapUser = (user) => {
  user = this.state.user
  let end;
  let d = new Date(user.start_date)

  if (user.id) {
   if (!user.finish_date) {
    end = ""
   }
   else {
    end = user.finish_date.toLocaleDateString()
   }

   var x;
   if(user.middle_name){
    x =  <div> Middle Name: {user.middle_name}</div>
   }
  else{
   x = ""
  }
 
   return (
    <div className = "info">
     <div> Volunteer ID : {user.id} </div>
     <div> First Name: {user.first_name} </div>
     {x}
     <div> Last Name: {user.last_name} </div>
     <div> Mandate Hours: {user.mandate_hours} </div>
     {/* <div> Total Hours Done: {user.accumulative_hours}</div> */}
     <div> Start Date : {d.toLocaleDateString()} </div>
     <div> End Date : {end} </div>
    </div>
   )
   }
  else {
   return <h1> No Log </h1>
  }

 }



 mapLog = (log) => {
  log = this.state.log
 
  let map = log.map((el, i) =>
   <div className = "rows" key = {i}>
    <div> {el.id} </div>
    <div> {this.f.sliceSQLDate(el.entry_date)} </div>
    <div> {this.f.convert24to12(el.start_time)} </div>
    <div> {this.f.convert24to12(el.end_time)} </div>
    <div> {el.daily_total} </div>
    <div> {el.notes} </div>
    <div> {el.staff_name} </div>
   </div>

  )

  return map

 }


 componentDidMount() {
  this.getInfo()
 }


 render() {
  return (
   <div className="singleInfo">

    {this.mapUser()}
    <div className = "rows title" >
     <div> ID </div>
     <div> Entry Date:  </div>
     <div> Start Time: </div>
     <div> End Time: </div>
     <div> Daily Total: </div>
     <div> Note: </div>
     <div> Badge#: </div>
    </div>
    {this.mapLog()}

   </div>
  )
 }
}

export default withRouter(Volunteer)
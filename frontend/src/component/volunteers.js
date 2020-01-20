import React, { Component } from 'react'
import { withRouter } from 'react-router'
import axios from 'axios'

import '../css/volunteers.css'

class Volunteers extends Component {
 constructor(props) {
  super(props)
  this.state = {
   volunteers: [],
   type: "first_name",
   filteredVolunteers: []
  }
 }

 mapAllCS = () => {

  if(this.state.filteredVolunteers.length === 0){
   var array = this.state.volunteers
  }
  else {
    array = this.state.filteredVolunteers
  }


  let map = array.map((el, i) => {
   return (
    <li key={el.id} className="volunteer">
     <p id="id">id: {el.id} </p>
     <p>{el.first_name} {el.last_name}</p>
     <p>{el.mandate_hours} hours</p>
    </li>
   )
  })

  return (
   <>
    <br></br>
    <h2> Volunteers: </h2>
    <ul className="volunteers">{map}</ul>

   </>
  )

 }
 
 typeSelection = (event) =>{
  this.setState({
   type: event.target.value
  })
 }

 searchChecker = (element) => {
  if(element.first_name === this.state.term){
   return true
  }
  else return false
 }
 

 filtersVolunteers = (array,query,type) =>{

  let filter = array.filter( obj => 
    obj[`${type}`].toLowerCase().indexOf(query.toLowerCase()) !== -1
  )
  this.setState({
   filteredVolunteers: filter
  })
}


 onChangeSearch = (event) =>{
  this.filtersVolunteers(this.state.volunteers,event.target.value,this.state.type)
 }


 getAllCS = () => {
  axios.get('/api/users/all').then((result) => {
   if (result.status === 200) {
    this.setState({
     volunteers: result.data.users
    });
   }
   else {
    console.log("No volunteers in database")
   }
  }).catch((err) => {
   console.log(err)
  });
 }


 componentDidMount() {
  this.getAllCS()
 }

 render() {
  return (
   <div className="cs_container">
    <h1>All Volunteers</h1>
    <div className="searchbox">
     <select id='option' onChange={this.typeSelection}> 
     <option value = 'first_name' > First Name
     </option>
      <option value='last_name' > Last Name
      </option>
    </select>
     <input type="search" onChange = {this.onChangeSearch}placeholder="Search..." />
    </div>
    {this.mapAllCS()}
   </div>
  )
 }
}


export default withRouter(Volunteers)

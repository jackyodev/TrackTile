import React, { Component } from 'react'
import { withRouter } from 'react-router'
import axios from 'axios'

import '../css/volunteers.css'

class Volunteers extends Component {
 constructor(props) {
  super(props)
  this.state = {
   volunteers: []
  }
 }

 mapAllCS = () => {

  let map = this.state.volunteers.map((el, i) => {
   return (
    <li key={el.id} className="volunteer">
     <p id = "id">id: {el.id} </p>
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


 getAllCS = () => {
  axios.get('/api/users/all').then((result) => {
   console.log(result);
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
     <input type="search" placeholder="Name..." />
     <button> Submit </button>
    </div>
    {this.mapAllCS()}
   </div>
  )
 }
}


export default withRouter(Volunteers)

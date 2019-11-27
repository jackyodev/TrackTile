import React, { Component } from 'react'
import Axios from "axios"

import '../css/newForm.css'

class NewForm extends Component {
 constructor(props) {
  super(props);
  this.state = {

  }
 }


 localOnChange = (event) =>{
  this.setState({
   [event.target.parentNode.id] : event.target.value
  })
 }

 submitClick = (event) =>{
  event.preventDefault()
  let {props} = this.props
    let params = {
     first_name: this.state.first_name,
     middle_name: this.state.middle_name,
     last_name: this.state.last_name,
     start_date: this.props.props.today_date,
     mandate_hours: this.state.mandate_hours,
    }
    Axios.post('/users/add/',params).then((res)=>{
      console.log(res)
      debugger
      
      this.props.pickedState(props,params,res.data.id)
        }).catch(err=>{console.log(err)})
  
 }

 render() {
  return (
   <form className = "newForm" onChange = {(event)=>{this.localOnChange(event)}}>
    <div id= "first_name">
     <label> First Name</label>
     <input type="text" placeholder="First Name" />
    </div>

    <div id = "middle_name">
     <label> Middle Name</label>
     <input type="text" placeholder="Middle Name" />
    </div>

    <div id = "last_name">
     <label>Last Name</label>
     <input type="text" placeholder="Last Name" />
    </div>


    <div id = "mandate_hours">
     <label> Mandate Hours </label>
     <input id = "hours_input" pattern = "\d*" maxLength="2" type="text"/>
    </div>

    <input id = "submit" type="submit" onClick ={(event)=>{this.submitClick(event)}} />

   </form>
  )
 }

}

export default NewForm
// Add On:
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'


//Components Imports:
import PickNames from "./pickName.js"
import SignIn from './signIn'
import NewForm from "./newForm.js"



//CSS Imports:
import '../css/navi.css'
import '../css/cssignin.css'
import '../css/signform.css'
import '../css/timeentry.css'

const user_logo = require('../images/user_icon_1.png')


class CSSignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      first_name: "",
      middle_name: "",
      last_name: "",
      today_date: "",
      time_in: "",
      time_out: "",
      new: false,
      badge_number: "",
      total_hrs_completed: "",
      daily_total: 0,
      staff_name: "",
      mandate_hours: "",
    }

    
  }

  pickedState = (prev, obj,id) =>{
    // console.log({...prev,...obj})
    // debugger
    this.setState(
      {...prev,...obj,id:id}
    )
    console.log(this.state)
  }


  resetState = () => {
    this.setState({
      id: "",
      first_name: "",
      middle_name: "",
      last_name: "",
      today_date: "",
      time_in: "",
      time_out: "",
      new: false,
      badge_number: "",
      total_hrs_completed: "",
      daily_total: 0,
      staff_name: "",
    })
  }


  getSingleUserInfo = (id) => {
    axios.get(`/users/?id=${id}`).then((res) => {
      let { result } = res.data;
      console.log(result)
      this.setState({
        id: id,
        first_name: result.first_name,
        middle_name: result.middle_name,
        last_name: result.last_name,
        total_hrs_completed: result.accumulative_hours,
        mandate_hours: result.mandate_hours
      })
    }).then(() => {
      console.log(this.state)
    }).catch(err => {
      console.log(err)
    })
  }

  changeState = (id, value) => {
    switch (id) {
      case "first_name":
        this.setState({
          first_name: value
        })
        break;
      case "last_name":
        this.setState({
          last_name: value
        })
        break;
      case "middle_name":
        this.setState({
          middle_name: value
        })
        break;
      case "time_in":
        this.setState({
          time_in: value
        })
        break;
      case "time_out":
        this.setState({
          time_out: value
        })
        break;
      case "badge_number":
        this.setState({
          badge_number: value
        })
        break;
      case "staff_name":
        this.setState({
          staff_name: value
        })
        break;
      case "new":
        if (this.state.new === false) {
          this.setState({ new: true })
        }
        else {
          this.setState({
            new: false
          })
        }
        break;

      case "daily_total":
        this.setState({
          daily_total: value
        })
        break;

    }
  }


  setTime = () => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;

    this.setState({
      today_date: dateTime
    })
  }

  userSelection = (event) => {
    this.setState({
      staff_name: event.target.id
    })
  }

  userSelectForm = (event) => {
    let array = ["Lead 1", "Lead 2", "Lead 3", "Lead 4", "Lead 5", "Lead 6", "Lead 7", "Lead 8", "Lead 9", "Lead 10"];

    let listUser = array.map((user, i) =>
      <div id = {user} key = {i}> <li id = {user}> {user} 
       <img id = {user} src = {user_logo} width = "100px" /></li>
      </div>);

    return (
      <div className = "lead_selection">
        <h1> Team Lead Selection </h1>
        <p> Step 1: Select the Lead signing in the volunteer.</p>
        <ul className="team_leads" onClick={(e) => {
        this.userSelection(e)
      }
      } >
          {listUser}
        </ul>
      </div>
    )
  }

  setNewPerson = () => {
    this.setState({
      new: true
    });
  }



  componentDidMount = () => {
    this.setTime()
  }



  renderForms = () => {
    if (!this.state.staff_name) {
      return (this.userSelectForm())
    }
    else if (this.state.new === false && this.state.first_name === "") {
      return (
        <PickNames changeState={this.changeState} getSingleUserInfo={this.getSingleUserInfo} setNewPerson={this.setNewPerson} />
      )
    }
    else if (this.state.first_name !== "") {
      return (
        <SignIn props={this.state} changeState={this.changeState} setTime={this.setTime} resetState={this.resetState} />
      )
    }

    else if (this.state.new === true) {
      return (
        <>
          <h1> New Volunteer Sign In </h1>
          <p> Step: 2A: All information required below. </p>
          <NewForm props = {this.state} pickedState = {this.pickedState} changeState= {this.changeState}/>

        </>
      )
    }

  }

  render() {
    return (
      
      <div className = 'sign_in_form'>
        <div className = "sign_in_container"> 
        {this.renderForms()}
        </div>
      </div>
    )
  }


}
export default CSSignIn
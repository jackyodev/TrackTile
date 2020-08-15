import React, { Component } from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom';
import '../css/home.css'
import image from "../images/hands.png"
import { BsSquareHalf } from "react-icons/bs";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: []
    }
  }

  convert24 = (time) => {
    var hours = time[0] + time[1]
    var AmOrPm = hours >= 12 ? 'pm' : 'am';
    hours = (hours % 12) || 12;
    var minutes = time[3] + time[4]
    var finalTime = hours + ":" + minutes + " " + AmOrPm;
    return finalTime
  }

  getToday = () => {
    Axios.get('/api/log/today').then((res) => {
      this.setState({
        today: res.data.result
      }
      )
    })

  }

  mapTodayCS = (array) => {

    if (this.state.today) {
      let elMap = array.map((el, i) => {
        return (
          <li id="volunteer" key={i}>
            <p> {el.first_name} {el.last_name} -- {this.convert24(el.start_time)} to {this.convert24(el.end_time)} </p>
          </li>
        )
      })

      return elMap
    }
    else {
      return <h1> No Volunteers Today.</h1>
    }
  }

  componentDidMount() {
    this.getToday()
  }


  render() {
    // let image = "../images/hands.png"
    return (
      <div className="home">
          <div className="left__container">
          {/* <img src = {image} /> */}
          <h1 className ="header" > <BsSquareHalf /> TrackTile</h1>
          <p>TrackTile is a simple web-based application that replace traditional paper logs. </p>
            <NavLink id="home_button" to="/signin"> Demo </NavLink>
          </div>
      </div>
    )
  }



}

export default withRouter(Home);

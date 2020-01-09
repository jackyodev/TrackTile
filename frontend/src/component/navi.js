import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


//css
import '../css/navi.css'

class NavBar extends Component {


  render() {
    return (
      <div className='nav'>
        <div id="left">
        <h3> <NavLink to="/home" >Volunteer Service Log </NavLink></h3>
        </div>
        <div id="center">
          <ul id="nav_menu">
            <NavLink id="about" to="/about" > <li>About </li></NavLink>
            <NavLink id="home" to="/home"><li>Home</li></NavLink>
            <NavLink id="reports" to="/reports" ><li>Monthly Reports</li></NavLink>
            <NavLink id="today" to="/today" > <li>Today's Volunteers</li></NavLink>
            <NavLink id="all" to="/all" > <li>All Volunteers</li></NavLink>
            <NavLink id="signin" to="/signin" ><li>Sign In</li></NavLink>
            
          </ul>
        </div>
        <div id="right">
        </div>
      </div>
    )
  }


}
export default NavBar
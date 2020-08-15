import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

//css
import '../css/navi.css'


import { BsSquareHalf } from "react-icons/bs";



class NavBar extends Component {
  render() {
    return (
      <div className='nav'>
        <NavLink to="/" className="header">

          <BsSquareHalf /> TrackTile </NavLink>

        <ul id="nav_menu">

          <li> <NavLink to="/about" > About</NavLink>  </li>

          <li> <NavLink to="/summary" >Report</NavLink></li>

          <li> <NavLink to="/signin" > Clock In</NavLink></li>

          <li> <NavLink to="/all" >Search</NavLink>  </li>



        </ul>
      </div>
    )
  }
}
export default NavBar
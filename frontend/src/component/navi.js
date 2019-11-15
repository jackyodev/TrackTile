import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'


//css
import '../css/navi.css'

class NavBar extends Component{


  render (){
    return(
      <div className = 'nav'>
          <NavLink id = "nav_menu" to="/" >Home</NavLink>
          <NavLink id = "nav_menu" to='/lookup'>Look Up</NavLink>
          <NavLink id = "nav_menu" to="/reports" >Reports</NavLink>
      </div>
    )
  }


}
export default NavBar
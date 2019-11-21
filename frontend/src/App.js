import React, {Component} from 'react';



//add-on
import {withRouter} from "react-router";
import {Switch, Route, Link} from "react-router-dom";


//css 


//components
import './App.css';
import Navi from './component/navi'
import CSSignin from './component/csSignIn.js'




class App extends Component {


  render(){
    return(
      <> 
      <Navi />
      <Switch>

       <Route path = "/signin" component = { CSSignin } />
      <Route path = "/" render = {()=>
      <div className = "home">
        <h1> Volunteers Sign In Log </h1>
        <Link id = "home_button" to ="/signin"> Start </Link>
        </div>

      } />
      </Switch>
      </>

    )
  }

}



export default withRouter(App);
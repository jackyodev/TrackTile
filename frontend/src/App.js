import React, {Component} from 'react';



//add-on
import {withRouter} from "react-router";
import {Switch, Route} from "react-router-dom";


//css 


//components
import './App.css';
import Navi from './component/navi'
import Body from './component/body.js'
import User from './component/user.js';




class App extends Component {


  render(){
    return(
      <> 
      <Navi />
      <Switch>
       {/* <Route exact path = "/lookup" component = {About} ></Route> */}
       <Route exact path = "/reports" component = { User } ></Route>
       <Route path = "/*" component = { Body } />
      </Switch>
      </>

    )
  }

}



export default withRouter(App);
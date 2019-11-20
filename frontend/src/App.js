import React, {Component} from 'react';



//add-on
import {withRouter} from "react-router";
import {Switch, Route} from "react-router-dom";


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
      </Switch>
      </>

    )
  }

}



export default withRouter(App);
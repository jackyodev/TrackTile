import React, { Component } from 'react';
// import Axios from 'axios'

//add-on
import { withRouter } from "react-router";
import { Switch, Route, Link } from "react-router-dom";

//css 
import './css/reset.css'
import './css/App.css';


//components
import Navi from './component/navi.js'
import CSSignin from './component/csSignIn.js'
import Home from './component/home.js'

import about from "./component/about.js"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: []
    }
  }

  render() {
    return (
      <>
      <div className = "overlay"> </div>
        <div className="app-render">
          <div className="app-navi">
            <Navi />
          </div>
          <Switch>
            <Route exact path="/about" render = {about} />
            <Route exact path="/signin" component={CSSignin} />
            <Route path="/*" component = {Home} />
          </Switch>
        </div>

      </>

    )
  }

}



export default withRouter(App);
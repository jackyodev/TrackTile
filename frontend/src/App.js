import React, { Component, lazy, Suspense } from 'react';
// import Axios from 'axios'

//add-on
import { withRouter } from "react-router";
import { Switch, Route } from "react-router-dom";

//css 
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/reset.css'
import './css/App.css';

//components

import Navi from './component/navi.js'
import About from "./component/about.js"
// import CSSignin from './component/csSignIn.js'
// import Home from './component/home.js'
// import Volunteers from "./component/volunteers.js"
// import Month from "./component/month.js"


const Home = lazy(() => import('./component/home'))
const CSSignin = lazy(()=> import('./component/csSignIn'))
const Month = lazy(()=> import('./component/month'))
const Volunteers = lazy(()=> import('./component/volunteers'))
const Volunteer = lazy(() => import('./component/volunteer'))



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
        <div className="overlay"></div>
          <div className="app-navi">
            <Navi />
          </div>
        <div className="app-render">
            <Suspense fallback={<div> Loading...</div>}>
          <Switch>
              <Route exact path="/summary" component={Month} />
              <Route exact path="/all" component={Volunteers} />
              <Route exact path="/about" component={About} />
              <Route exact path="/signin" component={CSSignin} />
              <Route path = "/volunteer/:id/" component = {Volunteer} />
              <Route path= "/*" component={Home} />
          </Switch>
            </Suspense>
        </div>

      </>

    )
  }

}



export default withRouter(App);
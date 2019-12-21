import React, { Component } from 'react';
import Axios from 'axios'

//add-on
import { withRouter } from "react-router";
import { Switch, Route, Link } from "react-router-dom";

//css 
import './css/home.css'

//components
import './App.css';
import Navi from './component/navi'
import CSSignin from './component/csSignIn.js'


class App extends Component {
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
    Axios.get('/log/today').then((res) => {
      console.log(res)
      this.setState({
        today: res.data.result
      }
      )
    })

  }

  mapTodayCS = (array) => {
    let elMap = array.map((el, i) => {
      return (
        <div key={i} >
          
          <p> {el.first_name} {el.last_name} - {this.convert24(el.start_time)} to {this.convert24(el.end_time)} </p>
        </div>
      )
    })

    return elMap
  }

  componentDidMount() {
    this.getToday()
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <>
        <div className="app-navi">
          <Navi />
        </div>
        <div className="app-render">
          <Switch>

            <Route path="/signin" component={CSSignin} />
            <Route path="/" render={() =>

              <div className="home">
                <div className="home-left">
                  <h1> Volunteers Sign In Log </h1>
                  <Link id="home_button" to="/signin"> Start </Link>
                </div>
                <div className="home-right">
                  <h2> Today Volunteers </h2>
                  {this.mapTodayCS(this.state.today)}
                </div>
              </div>
            } />
          </Switch>
        </div>

      </>

    )
  }

}



export default withRouter(App);
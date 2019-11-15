// Add On:
import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'


//Components Imports:
import SignInForm from "./signIn"
import PickNames from "./pickName.js"



//CSS Imports:
import '../css/navi.css'

class User extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
      first_name: "",
      middle_name: "",
      last_name: "",
      today_date: "",
      time_in: "",
      time_out: "",
      new: false,
      badge_number: "",
      total_hrs_completed: "",
      daily_total: 0,
      staff_name: "",

    }

  }


  changeState = (id, value) => {

    switch (id) {
      case "first_name":
        this.setState({
          first_name: value
        })
        break;
      case "last_name":
        this.setState({
          last_name: value
        })
        break;
      case "middle_name":
        this.setState({
          middle_name: value
        })
        break;
      case "time_in":
        this.setState({
          time_in: value
        })
        break;
      case "time_out":
        this.setState({
          time_out: value
        })
        break;
      case "badge_number":
        this.setState({
          badge_number: value
        })
        break;
      case "staff_name":
        this.setState({
          staff_name: value
        })
        break;
      case "new":
        if (this.state.new === false) {
          this.setState({ new: true })
        }
        else {
          this.setState({
            new: false
          })
        }
        break;

        case "daily_total":
          this.setState({
            daily_total: value
          })
          break;

    }
  }


  setTime = ()=> {
      var today = new Date();
      var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date + ' ' + time;

      this.setState({
        today_date: dateTime
          })
  }

  userSelection = (event) =>{
    this.setState({
      staff_name: event.target.value
    })
  }

  userSelectForm = (event) =>{
    let array = ["Sara", 'Wil', 'Gil', 'James', 'Josh', 'Tamaria', 'Armando', 'Ralph', 'Dylan'];
    let listUser = array.map((user,i) => <input onClick = {(e)=>{
      this.userSelection(e)}
      } type = "button" value = {user} key= {i} />);

    return(
      <>
      {listUser}
      </>
    )
  }

  setNewPerson = (event) => {
    this.setState({
      new: event.target.value
    });
  }

  setNewPersonForm = () => {
    return(
      <>
      <h1> Is this Community Service new? </h1>
      <input type = "button" value = "Yes" onClick = {(e)=>{this.setNewPerson(e)}}/>
      <input type = "button" value = "No" onClick = {(e)=>{this.setNewPerson(e)}}/>
      </>
    )
  }

  componentDidMount = () =>{
    this.setTime()
  }

  renderForms = () => {
    if(!this.state.staff_name){
      return( this.userSelectForm() )
    }
    else if(this.state.new === false){
      return ( 
        <PickNames />
      )
    }

    }

  render (){
    return(
      <>
      {this.renderForms()}
      </>
    )
  }


}
export default User
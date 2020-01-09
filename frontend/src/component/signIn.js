import React, { Component } from 'react'
import Axios from 'axios'
import Form from 'react-bootstrap/Form'


//css
import '../css/signform.css'
import 'bootstrap/dist/css/bootstrap.min.css';


class SignIn extends Component {

  formChange = (event) => {
    let id = event.target.id
    let value = event.target.value
    this.props.changeState(id, value)
  }

  submitButton = (event) => {
    console.log(this.props)
    let { props } = this.props
    let params = {
      user_id: props.id,
      entry_date: props.today_date,
      time_in: props.time_in,
      time_out: props.time_out,
      notes: props.badge_number,
      daily_total: props.daily_total,
      staff_name: props.staff_name

    }
    event.preventDefault()
    console.log(this.props)
    Axios.post('/api/log/add', params).then(() => {
      this.props.resetState()
    })
  }

  computeDailyTotal = () => {

    var time_start = this.props.props.time_in.split(":");
    let start_hours = time_start[0] * 60;
    let start_minutes = time_start[1] * 1;
    let start_total_minutes = start_hours + start_minutes;

    var time_end = this.props.props.time_out.split(":");
    let ends_hours = time_end[0] * 60;
    let end_minutes = time_end[1] * 1;
    let end_total_minutes = ends_hours + end_minutes;

    let duration = (end_total_minutes - start_total_minutes) / 60;

    this.props.changeState("daily_total", duration)

  }


  componentDidMount() {
    this.props.setTime()
  }


  render() {
    let { props } = this.props
    return (
      <div className="entry_form">
        <h1> Volunteer Time Form </h1>
        <p> Step 3: Please fill in the form. All fields are required*. Click "Submit" when done.</p>
        <Form className='timeEntryForm' onSubmit={e => { this.submitButton(e) }}>
        <div className = "Names">
            <h3 id= "form_title"> Name </h3>
            <Form.Group className = "first_name">
              <Form.Label> First Name </Form.Label>
              <Form.Control value={props.first_name} id="first_name" type="text" placeholder="First Name" onChange={(event) => {
              }} onBlur={(event) => {
                this.formChange(event)
              }}></Form.Control>
            </Form.Group>
            
            <Form.Group className="middle_name">
              <Form.Label>Middle Name</Form.Label>
              <Form.Control value={props.middle_name} id="middle_name" type="text" placeholder="Middle Name" onChange={(e) => {
                this.formChange(e)
              }}></Form.Control>
            </Form.Group>

            <Form.Group className="last_name">
              <Form.Label>Last Name</Form.Label>
              <Form.Control value={props.last_name} id="last_name" type="text" placeholder="Last Name" onChange={(e) => { this.formChange(e) }} ></Form.Control>
            </Form.Group>
            <br></br>
            <h3 id= "form_title"> Time / Notes</h3>
            <Form.Group>
              <Form.Label> Time In </Form.Label>
              <Form.Control id="time_in" onBlur={(e) => {
                this.computeDailyTotal();
              }} onChange={((e) => { this.formChange(e) })} type="time" placeholder="Time In" ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label> Time Out </Form.Label>
              <Form.Control id="time_out" type="time" placeholder="Time Out" onBlur={() => this.computeDailyTotal()} onChange={(e) => { this.formChange(e); }}></Form.Control>
            </Form.Group>
         
            <Form.Group>
              <Form.Label>Badge #</Form.Label>
              <Form.Control id="badge_number" type="text" maxLength="2" placeholder="##" onBlur={(e) => { this.formChange(e) }}></Form.Control>
            </Form.Group>
        
            <h3> Daily Total: {props.daily_total.toFixed(2)} </h3>

            <Form.Control size='xs' type="submit" label="Submit" >
            </Form.Control>
            </div>
        </Form>


      </div>
    )
  }

}





export default SignIn
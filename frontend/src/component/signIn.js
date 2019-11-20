import React, { Component } from 'react'
import Axios from 'axios'


import Form from 'react-bootstrap/Form'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


//css
import 'bootstrap/dist/css/bootstrap.min.css';


class SignIn extends Component {
  constructor(props) {
    super(props);
  }


  formChange = (event) => {
    let id = event.target.id
    let value = event.target.value
    this.props.changeState(id, value)
  }

  submitButton = (event) => {
    let {props} = this.props
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
    Axios.post('/log/add', params).then(()=>{
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


  componentDidMount(){
    this.props.setTime()
  }


  render() {
    let {props} = this.props
    return (
      <div className='form' >
        <h1> Community Services Sign In </h1>
        <Form onSubmit={e => { this.submitButton(e) }}>

          <Form.Row>

            <Col md="auto">
              <Form.Group>
                <Form.Label> First Name </Form.Label>
                <Form.Control value = {props.first_name} id="first_name" type="text" placeholder="First Name" onChange = {(event)=>{
                  
                }} onBlur={(event) => {
                  this.formChange(event)
                }}></Form.Control>
              </Form.Group>
            </Col>



            <Col xs lg="2">
              <Form.Group>
                <Form.Label>Middle Name</Form.Label>
                <Form.Control value = {props.middle_name} id="middle_name" type="text" placeholder="Middle Name" onBlur={(e) => {
                  this.formChange(e)
                }}></Form.Control>
              </Form.Group>
            </Col>

            <Col xs lg="2">
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control value = {props.last_name} id="last_name" type="text" placeholder="Last Name" onBlur={(e) => { this.formChange(e) }} ></Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col md="auto">
              <Form.Label> Time In </Form.Label>
              <Form.Group>
                <Form.Control id="time_in" onBlur={(e) => {
                  this.computeDailyTotal();
                }} onChange={((e) => { this.formChange(e) })} type="time" placeholder="Time In" ></Form.Control>
              </Form.Group>
            </Col>

            <Col md="auto">
              <Form.Label> Time Out </Form.Label>
              <Form.Group>
                <Form.Control id="time_out" type="time" placeholder="Time Out" onBlur={() => this.computeDailyTotal()} onChange={(e) => { this.formChange(e); }}></Form.Control>
              </Form.Group>
            </Col>

            <Col xs lg="1">
              <Form.Label>Badge #</Form.Label>
              <Form.Group>
                <Form.Control id="badge_number" type="text" maxLength="2" placeholder="##" onBlur={(e) => { this.formChange(e) }}></Form.Control>
              </Form.Group>
            </Col>

          </Form.Row>

          <Form.Row>
            <Col md={{ span: 3, offset: 0 }}>
              <Form.Control type="submit" label="Submit" >
              </Form.Control>
            </Col>
            <h3> Daily Total:</h3>
            <h3> {props.daily_total.toFixed(2)} </h3>
          </Form.Row>


        </Form>


      </div>
    )
  }

}





export default SignIn
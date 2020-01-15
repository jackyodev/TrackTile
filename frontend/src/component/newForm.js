import React, { Component } from 'react'
import Axios from "axios"

import '../css/newForm.css'

class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  localOnChange = (event) => {
    this.setState({
      [event.target.parentNode.id]: event.target.value
    })
  }

  submitClick = (event) => {
    event.preventDefault()
    let { props } = this.props
    let params = {
      first_name: this.state.first_name,
      middle_name: this.state.middle_name,
      last_name: this.state.last_name,
      start_date: this.props.props.today_date,
      mandate_hours: this.state.mandate_hours,
      new: 'adding'
    }

    this.props.modifyState('new',
    'adding')
    Axios.post('/api/users/add/', params).then((res) => {
      this.props.pickedState(props, params, res.data[0].id)
      this.props.modifyState('new','false')
    }).catch(err => { console.log(err) })

  }

  render() {
    return (
      <div className="newForm">
        <form className="newForm_form" onChange={(event) => { this.localOnChange(event) }}>
          <div id="first_name">
            <div className="label">First Name</div>
            <input type="text" placeholder="First Name" />
          </div>
          <div id="middle_name">
            <div className="label">Middle Name</div>
            <input type="text" placeholder="Middle Name" />
          </div>

          <div id="last_name">
            <div className="label">Last Name</div>
            <input type="text" placeholder="Last Name" />
          </div>
          <div id="mandate_hours">
            <div className="label">Mandate Hours:</div>
            <input id="hours_input" pattern="\d*" maxLength="2" type="text" placeholder="##" />
          </div>
          <input id="submit" type="submit" onClick={(event) => { this.submitClick(event) }} />

        </form>

      </div>

    )
  }

}

export default NewForm
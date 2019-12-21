import React, { Component } from 'react'
import axios from 'axios'


import '../css/pickname.css'

class PickNames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      csActiveUsers: []
    }
  }


  onSelection(e) {
    this.props.getSingleUserInfo(e.currentTarget.value)
  }

  mapActiveCSList(a) {
    console.log(a)
    if (a) {
      let elMap = a.map((el, i) =>
        <li key={i}>
          <button value={el.id} onClick={(e) => { this.onSelection(e) }} key={i} > {el.first_name} {el.middle_name} {el.last_name}<sup id="id">{el.id}</sup> <br></br> ({el.mandate_hours}hrs)
    </button>
        </li>
      )

      return (
        <ul>
          <button id="addnew" onClick={() => { this.props.setNewPerson() }}> Add New Volunteer </button>
          {elMap}
        </ul>
      )
    }
  }

  getActiveCS() {
    axios.get('/users/all').then((res) => {
      this.setState({
        csActiveUsers: res.data.users
      })
    }).catch((err) => {
      console.log(err)
    })
  }


  componentDidMount() {
    this.getActiveCS()
  }


  render() {
    return (
      <div className="pickaname">
        <h1> Pick A Volunteer</h1>
        <h2> to sign them in</h2>
        {this.mapActiveCSList(this.state.csActiveUsers)}

      </div>

    )
  }
}


export default PickNames
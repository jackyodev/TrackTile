import React, { Component } from 'react'

import '../css/newForm.css'

class NewForm extends Component {

 render() {
  return (
   <form>

    <div id= "first_name">
     <label> First Name</label>
     <input type="text" placeholder="First Name" />
    </div>

    <div id = "middle_name">
     <label> Middle Name</label>
     <input type="text" placeholder="Middle Name" />
    </div>

    <div id = "last_name">
     <label>Last Name</label>
     <input type="text" placeholder="Last Name" />
    </div>


    <div id = "mandate_hours">
     <label> Mandate Hours </label>
     <input id = "hours_input" pattern = "\d*" maxLength="2" type="text"  />
    </div>

    <input id = "submit" type="submit" />

   </form>
  )
 }

}

export default NewForm
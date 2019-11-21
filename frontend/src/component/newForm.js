import React, { Component } from 'react'



class NewForm extends Component {


 render() {
  return (
   <form>

    <div>
     <label> First Name</label>
     <input type="text" placeholder="First Name" />
    </div>

    <div>
     <label> Middle Name</label>

     <input type="text" placeholder="Middle Name" />

    </div>
    <div>
     <label>Last Name</label>

     <input type="text" placeholder="Last Name" />
    </div>


    <div>
     <label> Mandate Hours </label>

     <input type="text" placeholder="hours" />
    </div>

    <input type="submit" />

   </form>
  )
 }

}

export default NewForm
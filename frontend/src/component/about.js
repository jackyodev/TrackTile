import React from "react";
import { withRouter } from "react-router"
import "../css/about.css"


const about = () => {

 return (
  <div className="about_container">
    <h1> About This Web App</h1>
  <div className = "about_text">

    <h3><strong>What is Volunteer Log?</strong></h3>
    <p>Volunteer Log is an app to assist with the repetitive task of signing-in volunteers without disturbing the current adapted workflow of the organization.</p>

    <h3><strong>Problem/Situation:</strong></h3>
    <p>
     The organization requires a simple solution to log their community volunteers. Compared to traditional pen and paper, there is a limited administrative resource to back enter volunteers that visited each day. The adopted setup has been with a simple excel sheet which alleviates the administrative task required. Yet, with adapted setup the organization still faced with inadequate data entry due to different "team leads", entries error, and insufficient time to produce a report.</p>
    <h3><strong> Current Features:</strong></h3>
    <h3><strong>Future Updates:</strong></h3>

   </div>
  </div>
   


 )


}



export default withRouter(about)
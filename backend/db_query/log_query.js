const { db }  = require("../db/server.js") 


const postLog = (req,res,next) =>{
 db.none(
  "INSERT INTO log (entry_date, user_id, start_time,end_time,daily_total, notes,staff_name) VALUES (${entry_date}, ${user_id}, ${time_in}, ${time_out}, ${daily_total}, ${notes}, ${staff_name})", req.body).then((result)=>{
  res.status(200).json({
   status:200,
   message: "success"
  })
 }).catch(e =>{
  status:400;
  error: e.message
 })

}

  module.exports = {
   postLog
  }
const { db }  = require("../db/server.js") 

const getAllActiveCS = (req,res,next) =>{
 db.any('SELECT * FROM users WHERE COMPLETED = false ORDER BY last_active_date DESC').then((result) => {
  res.status(200).json(
   {
    status:200,
    users:result
   }
  )
 }).catch((err) => {
  status:400;
  message:err.message
 });
}

const getOneCSInfo = (req,res,next) =>{
 db.one(`SELECT * FROM users where id = ${req.query.id}`).then((result)=>{
  res.status(200).json(
   {
    status: 200,
    result
   }
  )
 
 }).then((result) => {
 
}).catch((err) => {
 console.log(err)
});


}


  module.exports = {
   getAllActiveCS,
   getOneCSInfo
  }
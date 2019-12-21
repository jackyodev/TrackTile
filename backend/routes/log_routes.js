
var express = require('express');
var router = express.Router();

const {
postLog,
getTodayCS

} = require("../db_query/log_query")



/* POST existingUserToLog */
router.post('/add/',postLog)
router.get('/today/',getTodayCS);
router.get('/', (req,res,next) => {
 return (
  res.json({
   status:200
  })
 )
})



module.exports = router;



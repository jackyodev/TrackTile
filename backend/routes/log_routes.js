
var express = require('express');
var router = express.Router();

const {
postLog
} = require("../db_query/log_query")



/* POST existingUserToLog */
router.get('/', (req,res,next) => {
 return (
  res.json({
   status:200
  })
 )
})

router.post('/add/',postLog)




module.exports = router;



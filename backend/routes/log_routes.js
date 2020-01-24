
var express = require('express');
var router = express.Router();

const {
 postLog,
 getCSLog,
 getTodayCS,
 getRangeData,
 getRangeSum,
 getRangeCount,
 getRangeUsersCount
} = require("../db_query/log_query")


/* POST existingUserToLog */
router.post('/add/', postLog);
router.get('/today/', getTodayCS);
router.get('/dates/', getRangeData);
router.get('/dates/sum/', getRangeSum);
router.get('/dates/count/', getRangeCount);
router.get('/dates/count/users', getRangeUsersCount);
router.get('/users/:id', getCSLog);
;


router.get('/', (req, res, next) => {
 return (
  res.json({
   status: 200
  })
 )
})

module.exports = router;



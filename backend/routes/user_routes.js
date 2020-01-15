var express = require('express');
var router = express.Router();

const {
 getAllActiveCS,
 getOneCSInfo,
 addNewCS,
 getTodayCS,
 returnID,
 getAllCS
} = require("../db_query/user_query")



/* GET users listing. */
router.post('/add', addNewCS, returnID);
router.get('/active', getAllActiveCS);
router.get('/all', getAllCS)
router.get('/?', getOneCSInfo);




module.exports = router;

var express = require('express');
var router = express.Router();

const {
getAllActiveCS,
getOneCSInfo,
addNewCS
} = require("../db_query/user_query")



/* GET users listing. */
router.post('/add', addNewCS);
router.get('/all', getAllActiveCS);
router.get('/?', getOneCSInfo);




module.exports = router;

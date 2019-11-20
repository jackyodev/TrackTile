var express = require('express');
var router = express.Router();

const {
getAllActiveCS,
getOneCSInfo
} = require("../db_query/user_query")



/* GET users listing. */
router.get('/all', getAllActiveCS);
router.get('/?', getOneCSInfo);




module.exports = router;

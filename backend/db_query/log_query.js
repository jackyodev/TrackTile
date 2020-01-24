const { db } = require("../db/server.js")


const postLog = (req, res, next) => {
  db.none(
    "INSERT INTO log (entry_date, user_id, start_time,end_time,daily_total, notes,staff_name) VALUES (${entry_date}, ${user_id}, ${time_in}, ${time_out}, ${daily_total}, ${notes}, ${staff_name})", req.body).then((result) => {
      res.status(200).json({
        status: 200,
        message: "success"
      })
    }).catch(e => {
      status: 400;
      error: e.message
    })

}

const getTodayCS = (req, res, next) => {
  db.any("SELECT user_id, first_name, last_name, entry_date, start_time, end_time, daily_total, notes FROM log LEFT JOIN users ON user_id = users.id WHERE entry_date = (SELECT current_date)").then((result) => {
    res.status(200).json(
      {
        result
      }
    )
  }).catch(err => {
    res.status(400)
    res.send({
      error: err.message
    })
  })
}

const getCSLog = (req,res,next) => {
  let id = req.params.id
  db.any(`SELECT * from LOG WHERE USER_ID = '${id}'`).then( result => {
    res.status(200).json({
      result
    })
  }).catch(err =>{
    res.status(500).json({
      error : err
    })
  })
}

const getRangeData = (req, res, next) => {
  db.any(`SELECT entry_date,users.id, first_name, last_name, start_date, start_time, end_time, daily_total FROM users LEFT JOIN log ON users.id = log.user_id WHERE entry_date BETWEEN '${req.query.startDate}' AND '${req.query.endDate}'`)
    .then(
      result => {
        res.status(200).json({
          result
        })
      })
    .catch(err => {
      res.status(500).json({
        error: err.message
      })
    })
}


const getRangeSum = (req, res, next) => {
  db.any(`SELECT SUM(daily_total) FROM users LEFT JOIN log ON users.id = log.user_id WHERE entry_date BETWEEN '${req.query.startDate}' AND '${req.query.endDate}'`)
    .then(
      result => {
        res.status(200).json({
          result
        })
      })
    .catch(err => {
      res.status(500).json({
        error: err.message
      })
    })
}

const getRangeCount = (req, res, next) => {
  db.any(`SELECT COUNT(entry_date) FROM users LEFT JOIN log ON users.id = log.user_id WHERE entry_date BETWEEN '${req.query.startDate}' AND '${req.query.endDate}'`)
    .then(
      result => {
        res.status(200).json({
          result
        })
      })
    .catch(err => {
      res.status(500).json({
        error: err.message
      })
    })
}

const getRangeUsersCount = (req, res, next) => {
  db.any(`SELECT COUNT(DISTINCT(users.id)) FROM users LEFT JOIN log ON users.id = log.user_id WHERE entry_date BETWEEN '${req.query.startDate}' AND '${req.query.endDate}'`)
    .then(
      result => {
        res.status(200).json({
          result
        })
      })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err.message
      })
    })
}

module.exports = {
  postLog,
  getCSLog,
  getTodayCS,
  getRangeData,
  getRangeSum,
  getRangeCount,
  getRangeUsersCount
}
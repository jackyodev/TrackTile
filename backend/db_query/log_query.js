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

const getRangeData = (req, res, next) => {
  console.log(req.params)
  db.any('SELECT entry_date,users.id, first_name, last_name, start_date, start_time, end_time, daily_total FROM users LEFT JOIN log ON users.id = log.user_id WHERE entry_date BETWEEN ${startDate} AND ${endDate}', req.body).then((result => {
    console.log(res)
  }))
}

module.exports = {
  postLog,
  getTodayCS,
  getRangeData
}
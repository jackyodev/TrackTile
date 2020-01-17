const { db } = require("../db/server.js")

const getAllActiveCS = (req, res, next) => {
  db.any('SELECT * FROM users WHERE COMPLETED = false ORDER BY last_active_date DESC').then((result) => {
    res.status(200).json(
      {
        status: 200,
        users: result
      }
    )
  }).catch((err) => {
    status: 400;
    message: err.message
  });
}

const getAllCS = (req, res, next) => {
  db.any('SELECT first_name, last_name, start_date, mandate_hours, id FROM users ORDER BY id DESC').then((result) => {
    res.status(200).json(
      {
        status: 200,
        users: result
      }
    )
  }).catch((err) => {
    status: 400;
    message: err.message
  });
}


const getOneCSInfo = (req, res, next) => {
  db.one(`SELECT * FROM users where id = ${req.query.id}`).then((result) => {
    res.status(200).json(
      {
        status: 200,
        result
      }
    )
  }).catch((err) => {
    console.log(err)
  });

}

const addNewCS = (req, res, next) => {
  let body = [
    req.body.first_name, req.body.middle_name, req.body.last_name, req.body.start_date, req.body.mandate_hours
  ]
  db.none(`INSERT INTO users (first_name, middle_name, last_name, start_date, mandate_hours ) VALUES ($1,$2,$3,$4,$5)`, body)
    .then((result) => {
      next()
    }).catch((err) => {
      res.status(404).json(
        {
          message: err
        }
        )
      })
  // console.log('ADD NEW CS')
}

const returnID = (req, res, next) => {
  let body = [
    req.body.first_name, req.body.middle_name, req.body.last_name, req.body.start_date, req.body.mandate_hours
  ]
    db.any(`SELECT * FROM users WHERE first_name = $1 AND last_name = $3 AND mandate_hours = $5 ORDER BY ID DESC LIMIT 1`, body).then((result) => {
      res.status(201).json(result)
    }).catch(err=>{
      console.log(err)
    })
}

module.exports = {
  getAllActiveCS,
  getAllCS,
  getOneCSInfo,
  addNewCS,
  returnID
}
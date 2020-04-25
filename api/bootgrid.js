const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const helmet = require("helmet")
const axios = require("axios")
const csv = require("csvtojson")
const _ = require("lodash")
const s = require("underscore.string")

const limit = process.env.LIMIT || 15
const router = express.Router()
const app = express()

app.set("trust proxy", 1)

app.use(cors())
app.use(helmet())
app.use(bodyParser.urlencoded({
  limit: `${limit}mb`,
  extended: true
}))
app.use(bodyParser.json({
  limit: `${limit}mb`
}))

/**
 * @api {post} /api/bootgrid
 * @apiGroup API/BOOTGRID
 * @apiName Bootgrid
 * @apiParam {String} url Spreadsheet URL.
 * @apiParam {Number} current
 * @apiParam {Number} rowCount
 * @apiParam {String} searchMode "startsWith", "endsWith" or something else. Default behavior is "include"
 * @apiParam {String} searchPhrase
 * @apiError (500) error Unable to access database.
 * @apiSuccess {Number} total Total row count of the DB file.
 * @apiSuccess {Object[]} rows Rows body.
 */
router.post("/", async (req, res) => {
  if (req.body.url) {
    const json = await axios.get(req.body.url)
      .then(res => {
        try {
          return csv()
            .fromString(res.data)
            .then(obj => {
              return obj
            })
        } catch (err) {
          res.satus(500).send({
            e: err
          })
        }
      })
      .catch(err => {
        res.status(400).send({
          e: err
        })
      })

    let rows

    if (req.body.searchMode === "startsWith") {
      const list = _.chain(json)
        .filter(elem => {
          return s.startsWith(elem.title, req.body.searchPhrase)
        })
        .value()
      rows = list
    } else if (req.body.searchMode === "endsWith") {
      const list = _.chain(json)
        .filter(elem => {
          return s.endsWith(elem.title, req.body.searchPhrase)
        })
        .value()
      rows = list
    } else {
      const list = _.chain(json)
        .filter(elem => {
          return s.include(elem.title, req.body.searchPhrase)
        })
        .value()
      rows = list
    }

    let obj = {
      current: Number(req.body.current),
      rowCount: Number(req.body.rowCount),
      rows: []
    }
    const idx = (obj.current - 1) * obj.rowCount
    obj.total = rows.length
    obj.rows = rows.slice(idx, idx + obj.rowCount)

    res.status(200).json(obj)

  } else {
    res.status(400).send({
      text: "Invalid URL."
    })
  }
})

app.use("*", router)

module.exports = app

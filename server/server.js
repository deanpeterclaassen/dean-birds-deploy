const express = require('express')
const cors = require('cors')

const app = express()
const {TOKEN} = process.env
require('dotenv').config()
app.use(express.json())
app.use(cors())
const {getHTML} = require('./controller')
app.use(express.static('public'))
app.get('/',getHTML)
app.get('/',getPoo)

const port = process.env.PORT || 4000

var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true
});


app.listen(port, console.log(`Server running on ${port}`))
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


const port = process.env.PORT || 4000

var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: 'f6182754120f49538c2103549121a51f',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

app.listen(port, console.log(`Server running on ${port}`))
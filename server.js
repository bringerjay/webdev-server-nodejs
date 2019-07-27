var express = require('express')
var app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


var universityService = require('./services/university.service.server')
universityService(app)

app.listen(3000)
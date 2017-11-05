var express = require('express')
var path = require('path')
var app = express()

app.use('/', express.static(path.resolve(__dirname, '../dist')))

module.exports = app.listen('8888', function(err) {
  if (err) {
		console.log(err)
		return
	}

  console.log('Open localhost:8888');
})

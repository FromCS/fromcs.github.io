var express = require('express')
var app=express()

app.get('/', function (req, res) {
  res.send('GET request')
} )
app.listen(3000, (err, address) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})

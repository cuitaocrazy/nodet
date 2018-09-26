const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send(process.env.HOSTNAME)
})
app.listen(8080)

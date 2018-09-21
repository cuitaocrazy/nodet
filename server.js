const express = require('express')
const os = require('os')

const app = express()

app.get('/', (req, res) => {
  const ifs = os.networkInterfaces()
  const msg = Object.keys(ifs)
    .map(ifName => ifs[ifName].map(o => `${ifName}: ${o.address}`))
    .reduce((s, e) => {
      s.push(...e)
      return s
    }, [])
    .join('\n')
  res.send(msg)
})
app.listen(8080)

const express = require('express')
const cors = require('cors')
require('./db/config')
const app = express()
app.use(cors())
require('dotenv').config()
const {readdirSync} = require('fs')
readdirSync("./routes").map((file) => 
app.use('/', require('./routes/' + file))
)


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html" )
})

require("dotenv").config()
const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`server is running on the port ${port}`);
})




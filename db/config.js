const mongoose = require("mongoose");
require('dotenv').config()



mongoose
  .connect(process.env.CONNECTION_URL)
  .then((res) => {
    console.log("MongoDB Connected Succesfully");
  })
  .catch((err) => {
    console.log(err, ' ggg');
    console.log("MongoDB not Connected");
  });
   
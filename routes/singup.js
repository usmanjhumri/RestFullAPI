const express = require('express')
const Users = require('../model/UserSchema')
const router = express.Router()



router.post('/singup', async (req, res) => {
    res.send('signup post methods route successfully created')
   
  
})

router.get('/singup', (req, res) => {
    res.send('signup route successfully created')
})


module.exports = router
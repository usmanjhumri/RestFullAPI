const express = require('express')

const router = express.Router()



router.post('/singup', (req, res) => {
    res.send('signup post methods route successfully created')
})

router.get('/singup', (req, res) => {
    res.send('signup route successfully created')
})


module.exports = router
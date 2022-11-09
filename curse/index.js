const express = require('express')
const router = express.Router()

const path = require('path')
const basePath = path.join(__dirname, '../template')

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/forms.html`)
})

router.post('/save', (req, res) => {
    console.log(req.body)
   const curse = (req.body.curse)

    console.log(curse)

    console.log(`O seu curso é ${curse}`)
})
router.get('/', (req, res) => {
    res.sendFile(`${basePath}/users.html`)
})
module.exports = router
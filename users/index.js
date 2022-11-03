const express = require('express')
const router = express.Router()

const path = require('path')
const basePath = path.join(__dirname, '../template')

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/forms.html`)
})

router.post('/save',(req, res) => {
  console.log(req.body)
  const name = req.body.name
  const age = req.body.age

  console.log(name)
  console.log(age)

  console.log(`Seu nome é ${name} e sua idade é ${age}`)
})

router.get('/', (req, res) => {
    res.sendFile(`${basePath}/users.html`)
})
module.exports = router
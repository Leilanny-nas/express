var express = require('express');
const app = express();
const port = 3000
const path = require('path')
const basePath = path.join(__dirname, 'templates')

const users = require('./users')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/users', users)
app.listen(port, () => {
    console.log('Pode comemorar! Server Rodando!')
})



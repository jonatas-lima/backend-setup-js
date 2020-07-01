const express = require('express') // importa o express
const routes = require('./routes') // importa o arquivo routes

const app = express()

app.use(express.json())
app.use(routes)

/*
o app usa a porta 3333 do seu servidor local
é acessado com http://localhost:3333
*/
app.listen(3333)
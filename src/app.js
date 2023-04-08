const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
const usersRouter = require('./routes/users.router.js')
const foodsRouter = require('./routes/foods.router.js')
const app = express()

// app.use(express.json())

app.use(express.static(path.join(__dirname, '/public')))
app.engine('handlebars', handlebars.engine())
app.set('views', path.join(__dirname,'/views'))
app.set('view engine', 'handlebars')

app.use('/users', usersRouter)
app.use('/foods', foodsRouter)

app.listen(8080, () => console.log('Server Up'))
const dotenv = require('dotenv').config()
if (dotenv.error) {
  throw dotenv.error
}

const createError = require('http-errors')
const express = require('express')
const path = require('path')
const logger = require('morgan')
const multer = require('multer')
const publicDir = path.join(__dirname, 'public');
const upload = multer({
  dest: path.join(publicDir, 'uploads/')
}) // TODO: to be used later

// Router Related
const indexRouter = require('./routes/index')
const authRouter = require('./routes/auth')
const usersRouter = require('./routes/users')

// JWT Related
const jwtMiddleware = require('./middlewares/jwt')

// Client CORS
const clientMiddleware = require('./middlewares/client')

// App entry point
let app = express()
app.use(clientMiddleware)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(jwtMiddleware.unless({
  path: [
    '/auth/login',
    '/auth/signup'
  ]
}))

app.use(express.static(publicDir))

app.use('/', indexRouter)
app.use('/auth', authRouter)
app.use('/users', usersRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

app.use(function(err, req, res, next) {
  res.status(err.status).json({
    name: err.name,
    message: err.message,
    code: err.code,
    status: err.status
  })
})

module.exports = app

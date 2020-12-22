const express = require('express')
const router = express.Router()
const {Method, validator} = require('../validations/auth');
const validatorMiddleware = require('../middlewares/validator')

router.post(
    '/login',
    validatorMiddleware(validator(Method.Signup)),
    function(req, res, next) {
        res.json({
            login: true
        })
    }
)

router.post('/logout', function(req, res, next) {
    res.json({
        login: true
    })
})

module.exports = router

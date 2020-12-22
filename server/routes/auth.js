const express = require('express')
const router = express.Router()
const {Method, validator} = require('../validations/auth');
const validatorMiddleware = require('../middlewares/validator')

router.post(
    '/login',
    validatorMiddleware(validator(Method.Signup)),
    function(req, res, next) { // TODO: put in a controller
        res.json({
            login: true
        })
    }
)

router.post('/signup', function(req, res, next) {

})

module.exports = router

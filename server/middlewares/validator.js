const { validationResult } = require('express-validator');
const errorFormatter = require('./formatter/json-formatter')

module.exports = (validatorMiddleware) => {
    return [...validatorMiddleware,
        (req, res, next) => {
            try {
                validationResult(req).formatWith(errorFormatter).throw()
                next()
            } catch (err) {
                res.status(422).json({
                    success: false,
                    errors: err.mapped()
                })
            }
        }
    ]
} 

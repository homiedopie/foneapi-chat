const { body, oneOf, validationResult } = require('express-validator');

const Method = {
    Login: 'login',
    Signup: 'signup',
}

const validator = (method) => {
    switch (method) {
        case Method.Login:
            return [
                body('email')
                    .isEmail().withMessage('Email is invalid')
                    .bail()
                    .isLength({ min: 5 }).withMessage('Email must be greater than 5 characters'),
                body('password')
                    .not().isEmpty().withMessage('Password must not be empty')
                    .bail()
                    .isLength({ min: 5 }).withMessage('Password must be greater than 5 characters')
            ]
        case Method.Signup:
            return [
                body('email')
                    .isEmail().withMessage('Email is invalid')
                    .bail()
                    .isLength({ min: 5 }).withMessage('Email must be greater than 5 characters'),
                body('password')
                    .not().isEmpty().withMessage('Password must not be empty')
                    .bail()
                    .isLength({ min: 5 }).withMessage('Password must be greater than 5 characters')
            ]
    }
}

module.exports = {
    Method,
    validator
}
const express = require('express');
const router = express.Router();
const authService = require('./../services/auth');

/* GET users listing. */
router.get('/login', function(req, res, next) {
  authService.authenticate();
  res.send('respond with a resource');
});

module.exports = router;

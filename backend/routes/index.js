const { RefreshTokenController, UserController } = require("../controllers");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/token', RefreshTokenController.refresh);
router.delete('/logout', UserController.logout);
router.post('/login', UserController.login);

module.exports = router;
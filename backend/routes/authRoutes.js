const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
//const userController = require('../controllers/userController');
//const disasterController = require('../controllers/disasterController');

router.route('/login')
    .post(authController.login);

router.route('/refresh')
    .get(authController.refresh);

router.route('/logout')
    .post(authController.logout);

router.route('/register')
    .post(authController.register);

// router.route('/reportdisaster')
//     .post(disasterController);

//router.post('/reportdisaster', disasterController);

module.exports = router;

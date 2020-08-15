const express = require('express');
const router = express.Router();

const homeController = require('../controllers/index');

router.get('/',homeController.home);
router.get('/article',homeController.article);

module.exports = router;
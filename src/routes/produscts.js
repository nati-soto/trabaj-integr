const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsController');


router.get('/', hello,controller.home);
router.get('/detail')
module.exports = router;
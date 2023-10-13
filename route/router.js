const express = require('express')
const router = express.Router()
const buahController = require('../controller/buahController');

router.get('/buah', buahController.getBuah);
router.post('/buah', buahController.createBuah);

module.exports = router;
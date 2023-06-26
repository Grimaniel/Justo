const express = require('express');
const router = express.Router();
const hitsController = require('../controllers/hitsController');

router.get('/hits', hitsController.getHitsList);
router.get('/hits/create', hitsController.renderCreateHitForm);
router.post('/hits/create', hitsController.createHit);
module.exports = router;
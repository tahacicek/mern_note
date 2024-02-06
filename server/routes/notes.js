const express = require('express');
const noteModel = require('../models/noteModel');
const router = express.Router();
const noteController = require('../controllers/noteController');

router.get('/', noteController.get);

router.get('/:id', noteController.getById);

router.post('/', noteController.create);

router.delete('/:id', noteController.deleted);

router.patch('/:id', noteController.update);

module.exports = router;

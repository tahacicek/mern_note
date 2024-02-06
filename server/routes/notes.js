const express = require('express');
const noteModel = require('../models/noteModel');
const router = express.Router();
const noteController = require('../controllers/noteController');

router.get('/', noteController.get);

router.get('/:id', (req, res) => {
    res.json({
        message: `Note ${req.params.id}`
    })
});

router.post('/', noteController.create);

router.delete('/:id', (req, res) => {
    res.json({
        message: `Delete note ${req.params.id}`
    })
});

router.patch('/:id', (req, res) => {
    res.json({
        message: `Update note ${req.params.id}`
    })
});

module.exports = router;

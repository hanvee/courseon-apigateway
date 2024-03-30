const express = require('express');
const router = express.Router();
const lessonsHandler = require('./handler/lessons');

router.get('/', lessonsHandler.getAll);
router.get('/:id', lessonsHandler.getById);
router.post('/create', lessonsHandler.create);
router.put('/update/:id', lessonsHandler.update);
router.delete('/destroy/:id', lessonsHandler.destroy);

module.exports = router;

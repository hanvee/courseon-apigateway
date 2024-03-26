const express = require('express');
const router = express.Router();
const chaptersHandler = require('./handler/chapters');

router.get('/', chaptersHandler.getAll);
router.get('/:id', chaptersHandler.getById);
router.post('/create', chaptersHandler.create);
router.put('/update/:id', chaptersHandler.update);
router.delete('/destroy/:id', chaptersHandler.destroy);

module.exports = router;

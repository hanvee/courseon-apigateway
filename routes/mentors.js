const express = require('express');
const router = express.Router();
const mentorsHandler = require('./handler/mentors');

router.get('/', mentorsHandler.getAll);
router.get('/:id', mentorsHandler.getById);
router.post('/create', mentorsHandler.create);
router.put('/update/:id', mentorsHandler.update);
router.delete('/destroy/:id', mentorsHandler.destroy);

module.exports = router;

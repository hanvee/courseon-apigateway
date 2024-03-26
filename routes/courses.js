const express = require('express');
const router = express.Router();
const coursesHandler = require('./handler/courses');

router.get('/', coursesHandler.getAll);
router.get('/:id', coursesHandler.getById);
router.post('/create', coursesHandler.create);
router.put('/update/:id', coursesHandler.update);
router.delete('/destroy/:id', coursesHandler.destroy);

module.exports = router;

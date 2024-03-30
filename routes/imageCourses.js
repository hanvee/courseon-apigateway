const express = require('express');
const router = express.Router();
const imageCoursesHandler = require('./handler/image-courses');

router.post('/create', imageCoursesHandler.create);

module.exports = router;
 
const express = require('express');
const router = express.Router();
const myCoursesHJandler = require('./handler/my-courses');

router.get('/', myCoursesHJandler.get);
router.post('/create', myCoursesHJandler.create);

module.exports = router;
 
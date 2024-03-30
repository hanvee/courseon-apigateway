const express = require('express');
const router = express.Router();
const reviewsHandler = require('./handler/reviews');

router.post('/create', reviewsHandler.create);
router.put('/update/:id', reviewsHandler.update);
router.delete('/destroy/:id', reviewsHandler.destroy);

module.exports = router;

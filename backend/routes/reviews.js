const express = require('express');
const router = express.Router();
const {
  createReview,
  getReviews,
  getReviewsByCategory,
} = require('../controllers/reviewController');

// POST /api/reviews - Create a new review
router.post('/', createReview);

// GET /api/reviews - Get all approved reviews (optionally filtered by ?category=kitchen)
router.get('/', getReviews);

// GET /api/reviews/:category - Get reviews by specific category
router.get('/:category', getReviewsByCategory);

module.exports = router;


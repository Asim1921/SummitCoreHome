const express = require('express');
const router = express.Router();
const {
  createContactSubmission,
  getAllSubmissions,
} = require('../controllers/contactController');

// POST /api/contact - Create a new contact submission
router.post('/', createContactSubmission);

// GET /api/contact - Get all submissions (for admin use)
router.get('/', getAllSubmissions);

module.exports = router;


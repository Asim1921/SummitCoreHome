const express = require('express');
const router = express.Router();
const upload = require('../config/upload');
const {
  createContactSubmission,
  getAllSubmissions,
} = require('../controllers/contactController');

// POST /api/contact - Create a new contact submission
// Use multer middleware to handle file upload (single file, field name: 'image')
// Note: File is optional, so we don't require it
router.post('/', upload.single('image'), createContactSubmission);

// GET /api/contact - Get all submissions (for admin use)
router.get('/', getAllSubmissions);

module.exports = router;


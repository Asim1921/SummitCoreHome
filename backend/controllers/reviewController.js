const Review = require('../models/Review');

// Create a new review
exports.createReview = async (req, res) => {
  try {
    const { name, rating, reviewText, category } = req.body;

    // Validate required fields
    if (!name || !rating || !reviewText || !category) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

    // Validate category
    if (!['kitchen', 'bathroom', 'flooring'].includes(category)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid category. Must be kitchen, bathroom, or flooring',
      });
    }

    // Validate rating range
    if (rating < 1 || rating > 5) {
      return res.status(400).json({
        success: false,
        message: 'Rating must be between 1 and 5',
      });
    }

    // Create new review
    const review = await Review.create({
      name,
      rating,
      reviewText,
      category,
    });

    res.status(201).json({
      success: true,
      message: 'Review submitted successfully',
      data: review,
    });
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

// Get all reviews (optionally filtered by category)
exports.getReviews = async (req, res) => {
  try {
    const { category } = req.query;
    
    // Build query
    const query = { approved: true };
    if (category && ['kitchen', 'bathroom', 'flooring'].includes(category)) {
      query.category = category;
    }

    // Fetch reviews, sorted by newest first
    const reviews = await Review.find(query)
      .sort({ createdAt: -1 })
      .limit(100); // Limit to prevent excessive data transfer

    res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
};

// Get reviews by category
exports.getReviewsByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    if (!['kitchen', 'bathroom', 'flooring'].includes(category)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid category. Must be kitchen, bathroom, or flooring',
      });
    }

    const reviews = await Review.find({ 
      category, 
      approved: true 
    })
      .sort({ createdAt: -1 })
      .limit(50);

    res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  } catch (error) {
    console.error('Error fetching reviews by category:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
};


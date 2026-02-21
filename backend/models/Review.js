const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters'],
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot exceed 5'],
  },
  reviewText: {
    type: String,
    required: [true, 'Review text is required'],
    trim: true,
    maxlength: [1000, 'Review cannot exceed 1000 characters'],
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['kitchen', 'bathroom', 'flooring'],
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
  approved: {
    type: Boolean,
    default: true, // Auto-approve for now, can be changed to false for moderation
  },
}, {
  timestamps: true,
});

// Index for efficient queries
reviewSchema.index({ category: 1, approved: 1, createdAt: -1 });

module.exports = mongoose.model('Review', reviewSchema);


const mongoose = require('mongoose');

const contactSubmissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
  },
  serviceType: {
    type: String,
    required: [true, 'Service type is required'],
    enum: ['kitchen', 'bathroom', 'flooring', 'multiple', 'other'],
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'quoted', 'completed'],
    default: 'new',
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('ContactSubmission', contactSubmissionSchema);


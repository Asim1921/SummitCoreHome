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
  streetAddress: {
    type: String,
    required: [true, 'Street address is required'],
    trim: true,
  },
  city: {
    type: String,
    required: [true, 'City is required'],
    trim: true,
  },
  state: {
    type: String,
    required: [true, 'State is required'],
    trim: true,
    uppercase: true,
    maxlength: [2, 'State must be 2 characters'],
  },
  zipCode: {
    type: String,
    required: [true, 'ZIP code is required'],
    trim: true,
    match: [/^\d{5}(-\d{4})?$/, 'Please provide a valid ZIP code'],
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
  imagePath: {
    type: String,
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


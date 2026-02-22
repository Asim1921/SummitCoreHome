const ContactSubmission = require('../models/ContactSubmission');
const { sendContactNotification } = require('../config/email');
const path = require('path');

// Create a new contact submission
exports.createContactSubmission = async (req, res) => {
  try {
    const { name, email, phone, streetAddress, city, state, zipCode, serviceType, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !streetAddress || !city || !state || !zipCode || !serviceType || !message) {
      // If there's a file uploaded, delete it if validation fails
      if (req.file) {
        const fs = require('fs');
        fs.unlink(req.file.path, (err) => {
          if (err) console.error('Error deleting file:', err);
        });
      }
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

    // Get image path if file was uploaded
    const imagePath = req.file ? req.file.filename : null;

    // Create new submission
    const submission = await ContactSubmission.create({
      name,
      email,
      phone,
      streetAddress,
      city,
      state: state.toUpperCase(),
      zipCode,
      serviceType,
      message,
      imagePath,
    });

    // Send email notification
    try {
      const emailResult = await sendContactNotification(submission, imagePath);
      if (emailResult.success) {
        console.log('Email notification sent successfully');
      } else {
        console.error('Failed to send email notification:', emailResult.error);
        // Don't fail the request if email fails, just log it
      }
    } catch (emailError) {
      console.error('Error sending email notification:', emailError);
      // Continue even if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: submission,
    });
  } catch (error) {
    console.error('Error creating contact submission:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

// Get all contact submissions (admin only - optional)
exports.getAllSubmissions = async (req, res) => {
  try {
    const submissions = await ContactSubmission.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: submissions.length,
      data: submissions,
    });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
};


const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Review = require('./models/Review');

// Load environment variables
dotenv.config();

// Connect to database
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/summitcore');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

// Sample reviews data
const sampleReviews = [
  // Kitchen Reviews
  {
    name: 'Sarah Johnson',
    rating: 5,
    reviewText: 'Summit Core transformed our kitchen into a beautiful, functional space. The team was professional, on time, and the quality of work exceeded our expectations. Our new kitchen is the heart of our home now!',
    category: 'kitchen',
    approved: true,
    submittedAt: new Date('2024-01-15'),
  },
  {
    name: 'Michael Chen',
    rating: 5,
    reviewText: 'Outstanding kitchen renovation! The custom cabinetry and premium countertops look amazing. The project was completed on schedule and the attention to detail was impressive. Highly recommend Summit Core!',
    category: 'kitchen',
    approved: true,
    submittedAt: new Date('2024-02-20'),
  },
  {
    name: 'Emily Rodriguez',
    rating: 4,
    reviewText: 'Great experience overall. The kitchen design is modern and functional. There were a few minor delays, but the team communicated well throughout. The final result is beautiful and we\'re very happy with it.',
    category: 'kitchen',
    approved: true,
    submittedAt: new Date('2024-03-10'),
  },
  
  // Bathroom Reviews
  {
    name: 'David Thompson',
    rating: 5,
    reviewText: 'Complete bathroom transformation! Summit Core delivered exactly what they promised. The new fixtures, tile work, and overall design are top-notch. This renovation added significant value to our property.',
    category: 'bathroom',
    approved: true,
    submittedAt: new Date('2024-01-25'),
  },
  {
    name: 'Jennifer Martinez',
    rating: 5,
    reviewText: 'We used Summit Core for a fix-and-flip property, and they did an incredible job. The bathroom renovation was completed quickly and professionally. The quality of materials and craftsmanship is excellent.',
    category: 'bathroom',
    approved: true,
    submittedAt: new Date('2024-02-14'),
  },
  {
    name: 'Robert Williams',
    rating: 4,
    reviewText: 'Very satisfied with our bathroom remodel. The team was knowledgeable and helped us choose the right materials for our budget. The work is high quality and the bathroom looks brand new.',
    category: 'bathroom',
    approved: true,
    submittedAt: new Date('2024-03-05'),
  },
  
  // Flooring Reviews
  {
    name: 'Lisa Anderson',
    rating: 5,
    reviewText: 'Beautiful hardwood flooring installation! The team was meticulous and the floors look absolutely stunning. Summit Core helped us choose the perfect flooring that matches our home\'s style perfectly.',
    category: 'flooring',
    approved: true,
    submittedAt: new Date('2024-02-01'),
  },
  {
    name: 'James Wilson',
    rating: 5,
    reviewText: 'Excellent flooring service from start to finish. We chose luxury vinyl for our rental property and it looks amazing. The installation was quick, clean, and professional. Great value for the money!',
    category: 'flooring',
    approved: true,
    submittedAt: new Date('2024-03-18'),
  },
];

// Seed function
const seedReviews = async () => {
  try {
    await connectDB();
    
    // Clear existing reviews (optional - comment out if you want to keep existing data)
    // await Review.deleteMany({});
    // console.log('Cleared existing reviews');
    
    // Insert sample reviews
    const reviews = await Review.insertMany(sampleReviews);
    console.log(`✅ Successfully seeded ${reviews.length} reviews`);
    
    // Display summary
    const kitchenCount = reviews.filter(r => r.category === 'kitchen').length;
    const bathroomCount = reviews.filter(r => r.category === 'bathroom').length;
    const flooringCount = reviews.filter(r => r.category === 'flooring').length;
    
    console.log('\n📊 Review Summary:');
    console.log(`   Kitchen: ${kitchenCount} reviews`);
    console.log(`   Bathroom: ${bathroomCount} reviews`);
    console.log(`   Flooring: ${flooringCount} reviews`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding reviews:', error);
    process.exit(1);
  }
};

// Run seed function
if (require.main === module) {
  seedReviews();
}

module.exports = { seedReviews, sampleReviews };


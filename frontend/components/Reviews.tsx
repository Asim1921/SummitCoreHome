'use client';

import { useState, useEffect, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaUser, FaCheckCircle } from 'react-icons/fa';
import { FiAlertCircle } from 'react-icons/fi';
import { getReviews, submitReview, type Review, type ReviewData } from '@/lib/api';

interface ReviewsProps {
  category: 'kitchen' | 'bathroom' | 'flooring';
}

export default function Reviews({ category }: ReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<ReviewData>({
    name: '',
    rating: 5,
    reviewText: '',
    category,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showForm, setShowForm] = useState(false);

  // Fetch reviews on component mount
  useEffect(() => {
    fetchReviews();
  }, [category]);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const data = await getReviews(category);
      setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      await submitReview(formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        rating: 5,
        reviewText: '',
        category,
      });
      setShowForm(false);
      // Refresh reviews after submission
      await fetchReviews();
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const categoryLabels = {
    kitchen: 'Kitchen',
    bathroom: 'Bathroom',
    flooring: 'Flooring',
  };

  const renderStars = (rating: number, interactive = false, onRatingChange?: (rating: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => interactive && onRatingChange && onRatingChange(star)}
            className={interactive ? 'cursor-pointer hover:scale-110 transition-transform' : 'cursor-default'}
            disabled={!interactive}
          >
            <FaStar
              className={`text-lg ${
                star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h2>
          <p className="text-xl text-gray-600">
            See what our customers say about our {categoryLabels[category]} services
          </p>
        </motion.div>

        {/* Reviews List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin text-4xl text-blue-600">⏳</div>
            <p className="mt-4 text-gray-600">Loading reviews...</p>
          </div>
        ) : reviews.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-gray-50 rounded-xl"
          >
            <p className="text-gray-600 text-lg mb-4">No reviews yet. Be the first to share your experience!</p>
            {!showForm && (
              <button
                onClick={() => setShowForm(true)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Write a Review
              </button>
            )}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {reviews.map((review, index) => (
              <motion.div
                key={review._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      <FaUser />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{review.name}</h3>
                      <p className="text-sm text-gray-500">
                        {new Date(review.submittedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-700 leading-relaxed">{review.reviewText}</p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Review Form */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto mt-12 p-8 bg-gray-50 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Write a Review
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John Doe"
                  maxLength={100}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating *
                </label>
                <div className="flex items-center gap-4">
                  {renderStars(formData.rating, true, handleRatingChange)}
                  <span className="text-gray-600">{formData.rating} out of 5</span>
                </div>
              </div>

              <div>
                <label htmlFor="reviewText" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Review *
                </label>
                <textarea
                  id="reviewText"
                  name="reviewText"
                  required
                  rows={5}
                  value={formData.reviewText}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Share your experience with our services..."
                  maxLength={1000}
                />
                <p className="text-sm text-gray-500 mt-1">
                  {formData.reviewText.length}/1000 characters
                </p>
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
                >
                  <FaCheckCircle className="text-xl" />
                  <span>Thank you for your review! It has been submitted successfully.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"
                >
                  <FiAlertCircle className="text-xl" />
                  <span>{errorMessage}</span>
                </motion.div>
              )}

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Review'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setSubmitStatus('idle');
                    setFormData({
                      name: '',
                      rating: 5,
                      reviewText: '',
                      category,
                    });
                  }}
                  className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Show Form Button (when form is hidden and reviews exist) */}
        {!showForm && reviews.length > 0 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowForm(true)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg"
            >
              Write a Review
            </button>
          </div>
        )}
      </div>
    </section>
  );
}


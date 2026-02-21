const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

export interface ReviewData {
  name: string;
  rating: number;
  reviewText: string;
  category: 'kitchen' | 'bathroom' | 'flooring';
}

export interface Review {
  _id: string;
  name: string;
  rating: number;
  reviewText: string;
  category: 'kitchen' | 'bathroom' | 'flooring';
  submittedAt: string;
  createdAt: string;
  updatedAt: string;
}

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to submit contact form');
  }

  return response.json();
}

export async function submitReview(data: ReviewData): Promise<Review> {
  const response = await fetch(`${API_URL}/api/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to submit review');
  }

  const result = await response.json();
  return result.data;
}

export async function getReviews(category?: 'kitchen' | 'bathroom' | 'flooring'): Promise<Review[]> {
  const url = category 
    ? `${API_URL}/api/reviews/${category}`
    : `${API_URL}/api/reviews`;
  
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch reviews');
  }

  const result = await response.json();
  return result.data;
}


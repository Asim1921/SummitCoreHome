const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
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
  
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Failed to fetch reviews: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result.data || [];
  } catch (error) {
    // Handle network errors, timeouts, etc.
    if (error instanceof Error) {
      if (error.name === 'AbortError' || error.message.includes('timeout')) {
        throw new Error('Request timed out. Please check if the backend server is running.');
      }
      if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError') || error.message.includes('Network request failed')) {
        throw new Error(`Cannot connect to backend server at ${API_URL}. Please ensure the backend is running on port 5000.`);
      }
      throw error;
    }
    throw new Error('An unexpected error occurred while fetching reviews');
  }
}


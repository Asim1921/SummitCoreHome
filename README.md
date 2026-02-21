# Summit Core - Full-Stack Ecommerce Website

A complete MERN stack website for Summit Core, a fix-and-flip partnership specializing in kitchen, bathroom, and flooring solutions serving the Tampa Bay Area.

## Project Description

Summit Core is a modern, full-stack web application designed to showcase and promote a fix-and-flip partnership business specializing in home renovation services. The platform serves the Tampa Bay Area, offering comprehensive solutions for kitchen renovations, bathroom remodeling, and flooring installations. Built with Next.js 14+ and the MERN stack (MongoDB, Express, React, Node.js), the website features a responsive design with smooth animations, interactive category galleries, and a fully functional contact form system that captures and stores customer inquiries in a MongoDB database.

The application emphasizes user experience with an elegant hero section, animated category sliders, and dedicated pages for each service offering. Each category page includes detailed project galleries showcasing completed work, feature highlights, and compelling calls-to-action. The site is fully optimized for SEO with structured data, meta tags, and social media integration, ensuring maximum visibility and engagement. The backend API handles form submissions securely, while the frontend provides a seamless, professional interface that reflects the quality and expertise of Summit Core's services.

## Project Structure

```
SummitCore/
├── frontend/          # Next.js 14+ application
│   ├── app/          # App Router pages
│   ├── components/   # Reusable React components
│   ├── lib/          # Utilities and API clients
│   └── public/img/   # Product and category images
├── backend/          # Node.js/Express API server
│   ├── routes/       # API route handlers
│   ├── models/       # MongoDB models
│   ├── controllers/  # Business logic
│   └── config/       # Database configuration
└── README.md
```

## Features

- **Hero Page**: Striking hero section with background image, headline, and CTA button
- **Animated Category Slider**: Interactive slider showcasing Bathroom, Kitchen, and Flooring categories
- **Category Pages**: Three dedicated pages (Bathroom, Kitchen, Flooring) with image galleries
- **Contact Form**: Reusable contact form component with validation
- **Backend API**: Express server with MongoDB integration for form submissions
- **SEO Optimized**: Meta tags, structured data (JSON-LD), sitemap, and robots.txt
- **Responsive Design**: Modern, professional design with Tailwind CSS
- **Animations**: Smooth transitions using Framer Motion

## Prerequisites

- Node.js 18+ (20+ recommended)
- MongoDB (local or cloud instance)
- npm or yarn

## Setup Instructions

### 1. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/summitcore
FRONTEND_URL=http://localhost:3000
```

Start the backend server:

```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### 2. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env.local` file in the `frontend/` directory:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Start the frontend development server:

```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## Available Scripts

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Pages

- `/` - Home page with hero section and category slider
- `/bathroom` - Bathroom remodeling page
- `/kitchen` - Kitchen renovation page
- `/flooring` - Flooring installation page
- `/contact` - Contact form page

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all submissions (admin)
- `GET /api/health` - Health check endpoint

## Technologies Used

### Frontend
- Next.js 14+ (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- React Icons

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- CORS
- dotenv

## Image Organization

All images are organized in `frontend/public/img/`:
- `hero/` - Hero background images
- `slider/` - Category slider images
- `categories/bathroom/` - Bathroom project images
- `categories/kitchen/` - Kitchen project images
- `categories/flooring/` - Flooring project images

## SEO Features

- Meta tags on all pages
- Open Graph tags for social sharing
- Twitter Card support
- Structured data (JSON-LD) for LocalBusiness schema
- Sitemap.xml
- Robots.txt
- Semantic HTML5 elements
- Optimized images with Next.js Image component

## Development Notes

- The project uses Next.js App Router with TypeScript
- All components are built with reusability in mind
- The contact form validates input and handles errors gracefully
- The category slider auto-rotates every 5 seconds with manual navigation
- All CTA buttons link to the contact form

## Production Deployment

1. Set environment variables for production
2. Build the frontend: `cd frontend && npm run build`
3. Start the backend: `cd backend && npm start`
4. Configure MongoDB connection string
5. Update `NEXT_PUBLIC_BASE_URL` and `NEXT_PUBLIC_API_URL` in frontend `.env.local`

## License

Private - Summit Core


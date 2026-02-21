'use client';

import Link from 'next/link';
import { StructuredData } from '@/components/SEOHead';
import ContactForm from '@/components/ContactForm';
import { FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ContactPageClient() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100 py-16 px-4 pt-24 sm:pt-32">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Get Your Free Estimate
            </h1>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
            <p className="text-lg text-gray-500 mt-2">
              Serving the Tampa Bay Area
            </p>
          </motion.div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}


'use client';

import Image from 'next/image';
import Link from 'next/link';
import { generateMetadata, StructuredData } from '@/components/SEOHead';
import CTAButton from '@/components/CTAButton';
import Reviews from '@/components/Reviews';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaShower, FaHome, FaDollarSign, FaTools } from 'react-icons/fa';

export default function BathroomPage() {
  const images = [
    '/img/categories/bathroom/IMG_2629.JPG',
    '/img/categories/bathroom/IMG_2630.JPG',
    '/img/categories/bathroom/IMG_5063.JPG',
    '/img/categories/bathroom/IMG_5066.JPG',
    '/img/categories/bathroom/IMG_5068.JPG',
    '/img/categories/bathroom/IMG_5075.JPG',
    '/img/categories/bathroom/IMG_5079.JPG',
    '/img/categories/bathroom/IMG_5081.JPG',
    '/img/categories/bathroom/IMG_5084.JPG',
    '/img/categories/bathroom/new_1.jpeg',
    '/img/categories/bathroom/new_2.jpeg',
  ];

  const features = [
    {
      icon: <FaShower className="text-4xl" />,
      title: 'Complete Renovations',
      description: 'Full bathroom transformations from concept to completion',
    },
    {
      icon: <FaHome className="text-4xl" />,
      title: 'Property Value',
      description: 'Maximize ROI with strategic design and quality materials',
    },
    {
      icon: <FaDollarSign className="text-4xl" />,
      title: 'Fix & Flip Expertise',
      description: 'Proven strategies for rental properties and resale',
    },
    {
      icon: <FaTools className="text-4xl" />,
      title: 'Quality Craftsmanship',
      description: 'Attention to detail in every fixture and finish',
    },
  ];

  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-white pt-20 sm:pt-24">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-24 sm:top-28 left-4 sm:left-6 z-20"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-gray-700 hover:text-blue-600 transition-colors shadow-lg group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back</span>
          </Link>
        </motion.div>

        {/* Enhanced Hero Section */}
        <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden -mt-20 sm:-mt-24 pt-20 sm:pt-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="/img/slider/bathroom-slider.JPG"
              alt="Bathroom Remodeling"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)]" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-4 max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Custom & Build Your Dream Bathroom
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 mb-4 font-light">
              Even if it's for you or your rental property
            </p>
            <div className="mt-8">
              <div className="inline-block px-6 py-2 bg-blue-600/80 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                Serving Tampa Bay Area
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose Summit Core for Your Bathroom?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine style, functionality, and durability to create bathrooms that add real value
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
                >
                  <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                  Our Expertise
                </div>
                <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                  Transform Your Bathroom Into a Space That Adds Value
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A well-designed bathroom is more than just a functional space—it's an investment that adds significant value to your property. Whether you're renovating for personal enjoyment or preparing a rental property for the market, Summit Core delivers exceptional bathroom solutions.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/img/categories/bathroom/IMG_2629.JPG"
                  alt="Bathroom renovation"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-16"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Our expert team specializes in complete bathroom transformations, from concept to completion. We understand that every detail matters, from the layout and fixtures to the finishing touches that make a bathroom truly special.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With our fix-and-flip expertise, we know exactly how to maximize your return on investment while creating a space that stands out. Serving the Tampa Bay Area, we bring years of experience in creating bathrooms that not only meet your needs but exceed expectations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Gallery */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Bathroom Projects
              </h2>
              <p className="text-xl text-gray-600">
                See the transformation we've created for our clients
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <Image
                    src={src}
                    alt={`Bathroom project ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <Reviews category="bathroom" />

        {/* Enhanced CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Bathroom?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Get a free estimate and see how we can add value to your property. Our team is ready to bring your vision to life.
              </p>
              <div className="flex justify-center">
                <CTAButton className="bg-white text-blue-600 hover:bg-gray-100 shadow-2xl text-lg px-10 py-5" />
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

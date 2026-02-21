'use client';

import Image from 'next/image';
import Link from 'next/link';
import { generateMetadata, StructuredData } from '@/components/SEOHead';
import CTAButton from '@/components/CTAButton';
import Reviews from '@/components/Reviews';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaGem, FaStar, FaAward, FaCheckCircle } from 'react-icons/fa';

export default function FlooringPage() {
  const images = [
    '/img/categories/flooring/IMG_5050.JPG',
    '/img/categories/flooring/IMG_5111.JPG',
    '/img/categories/flooring/new_1.jpeg',
    '/img/categories/flooring/new_2.jpeg',
    '/img/categories/flooring/new_3.jpeg',
  ];

  const features = [
    {
      icon: <FaGem className="text-4xl" />,
      title: 'Premium Materials',
      description: 'Industry-leading materials that combine beauty and durability',
    },
    {
      icon: <FaStar className="text-4xl" />,
      title: 'Elegant Design',
      description: 'Flooring that reflects your status and personal style',
    },
    {
      icon: <FaAward className="text-4xl" />,
      title: 'Expert Installation',
      description: 'Precision craftsmanship for flawless results',
    },
    {
      icon: <FaCheckCircle className="text-4xl" />,
      title: 'Lasting Impressions',
      description: 'Floors that make a statement and stand the test of time',
    },
  ];

  const materials = [
    'Hardwood',
    'Luxury Vinyl',
    'Tile',
    'Engineered Flooring',
    'Laminate',
    'Carpet',
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
              src="/img/slider/flooring-slider.JPG"
              alt="Flooring Installation"
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
              The Floor Beneath Your Feet Defines Your Home's Elegance
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 mb-4 font-light">
              Premium materials that reflect your status
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
                Why Flooring Matters
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The foundation that sets the tone for your entire space
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
                  Elevate Your Property with Premium Flooring
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Flooring is one of the most impactful elements in any home. It's the foundation that sets the tone for your entire space, influencing both aesthetics and functionality. The right flooring choice can elevate your property, reflect your personal style, and create a lasting impression.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/img/categories/flooring/IMG_5111.JPG"
                  alt="Flooring installation"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Materials Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-16"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Materials</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {materials.map((material, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm"
                  >
                    <FaCheckCircle className="text-blue-600" />
                    <span className="font-medium text-gray-900">{material}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 md:p-12"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                At Summit Core, we understand that flooring is about more than just surface material—it's about selecting the perfect combination of materials, quality, and craftsmanship that matches your vision and lifestyle. We work with industry-leading manufacturers to source materials that combine beauty, durability, and value.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every installation is executed with precision and attention to detail, ensuring your floors not only look exceptional but stand the test of time. Serving the Tampa Bay Area, Summit Core brings expertise in flooring selection and installation to every project.
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
                Our Flooring Projects
              </h2>
              <p className="text-xl text-gray-600">
                See the elegance we've created
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {images.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <Image
                    src={src}
                    alt={`Flooring project ${index + 1}`}
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
        <Reviews category="flooring" />

        {/* Enhanced CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Elevate Your Home's Foundation?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Get a free estimate and explore our premium flooring options. Let us help you choose flooring that defines your home's elegance.
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

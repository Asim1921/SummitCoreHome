'use client';

import Image from 'next/image';
import Link from 'next/link';
import { generateMetadata, StructuredData } from '@/components/SEOHead';
import CTAButton from '@/components/CTAButton';
import Reviews from '@/components/Reviews';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUtensils, FaHeart, FaShieldAlt, FaLightbulb } from 'react-icons/fa';

export default function KitchenPage() {
  const images = [
    '/img/categories/kitchen/IMG_2720.JPG',
    '/img/categories/kitchen/IMG_2635.JPG',
    '/img/categories/kitchen/IMG_2589.JPG',
    '/img/categories/kitchen/IMG_2590.JPG',
    '/img/categories/kitchen/IMG_2591.JPG',
    '/img/categories/kitchen/IMG_2940.JPG',
    '/img/categories/kitchen/IMG_3734.JPG',
    '/img/categories/kitchen/IMG_5051.JPG',
    '/img/categories/kitchen/IMG_5059.JPG',
    '/img/categories/kitchen/new_1.jpeg',
    '/img/categories/kitchen/new_2.jpeg',
  ];

  const features = [
    {
      icon: <FaUtensils className="text-4xl" />,
      title: 'Functional Design',
      description: 'Kitchens that work as beautifully as they look',
    },
    {
      icon: <FaHeart className="text-4xl" />,
      title: 'Family Connection',
      description: 'Spaces that bring families together naturally',
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: 'Built to Last',
      description: 'Durable materials that maintain their beauty',
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: 'Custom Solutions',
      description: 'Tailored designs that reflect your style',
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
              src="/img/slider/kitchen-slider.JPG"
              alt="Kitchen Renovation"
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
              The Kitchen is the Heart of Every Home
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 mb-4 font-light">
              Where families gather and memories are made
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
                Why Your Kitchen Matters
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We create kitchens that connect people, enhance daily living, and add substantial value
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
                className="relative h-96 rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1"
              >
                <Image
                  src="/img/categories/kitchen/IMG_2720.JPG"
                  alt="Kitchen renovation"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 order-1 md:order-2"
              >
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                  Our Approach
                </div>
                <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                  Beautiful, Functional, and Built to Last
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The kitchen is where families gather, meals are prepared with love, and memories are made. It's the heart of your home, and it deserves to be both beautiful and functional. At Summit Core, we understand that a well-designed kitchen doesn't just look great—it connects people.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Our kitchen renovations combine aesthetic appeal with practical functionality. We work with you to create a space that reflects your style while ensuring every element is built to last. From custom cabinetry and premium countertops to state-of-the-art appliances and thoughtful lighting, we pay attention to every detail.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Durability is at the core of everything we do. We select materials and finishes that can withstand the demands of daily use while maintaining their beauty for years to come. Serving the Tampa Bay Area, Summit Core brings expertise, quality craftsmanship, and a commitment to excellence to every kitchen project.
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
                Our Kitchen Projects
              </h2>
              <p className="text-xl text-gray-600">
                Discover the transformations we've created
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
                    alt={`Kitchen project ${index + 1}`}
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
        <Reviews category="kitchen" />

        {/* Enhanced CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Create Your Dream Kitchen?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Get a free estimate and discover how we can transform your kitchen into the true heart of your home.
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

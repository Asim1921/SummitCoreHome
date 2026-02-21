'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const categories = [
  {
    id: 'bathroom',
    title: 'Bathroom',
    description: 'Custom & build your dream bathroom',
    image: '/img/slider/bathroom-slider.JPG',
    href: '/bathroom',
  },
  {
    id: 'kitchen',
    title: 'Kitchen',
    description: 'The heart of every home',
    image: '/img/slider/kitchen-slider.JPG',
    href: '/kitchen',
  },
  {
    id: 'flooring',
    title: 'Flooring',
    description: 'Define your home\'s elegance',
    image: '/img/slider/flooring-slider.JPG',
    href: '/flooring',
  },
];

export default function CategorySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % categories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Link href={categories[currentIndex].href} className="block h-full w-full">
            <div className="relative h-full w-full group cursor-pointer">
              <Image
                src={categories[currentIndex].image}
                alt={categories[currentIndex].title}
                fill
                className="object-cover"
                priority={currentIndex === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-5xl md:text-6xl font-bold text-white mb-4"
                >
                  {categories[currentIndex].title}
                </motion.h2>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl md:text-2xl text-gray-200 mb-8"
                >
                  {categories[currentIndex].description}
                </motion.p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 group-hover:bg-white/30 transition-colors"
                >
                  <span className="text-white font-semibold">Explore {categories[currentIndex].title} →</span>
                </motion.div>
              </div>
            </div>
          </Link>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-white text-2xl" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
        aria-label="Next slide"
      >
        <FaChevronRight className="text-white text-2xl" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {categories.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}


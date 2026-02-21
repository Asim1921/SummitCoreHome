'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function CTAButton({ href = '/contact', onClick, className = '' }: CTAButtonProps) {
  const buttonClasses = `inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${className}`;

  if (onClick) {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={buttonClasses}
      >
        Get a Free Estimate Now
      </motion.button>
    );
  }

  return (
    <Link href={href}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={buttonClasses}
      >
        Get a Free Estimate Now
      </motion.button>
    </Link>
  );
}


import Image from 'next/image';
import { generateMetadata } from '@/components/SEOHead';
import { StructuredData } from '@/components/SEOHead';
import CTAButton from '@/components/CTAButton';
import CategorySlider from '@/components/CategorySlider';

export const metadata = generateMetadata({
  title: 'Kitchen, Bathrooms & Floors',
  description: 'Summit Core: Your Fix-and-Flip Partnership. Specializing in kitchen, bathroom, and flooring solutions serving the Tampa Bay Area.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <StructuredData />
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/hero/hero-bg.JPG"
            alt="Summit Core Kitchen, Bathroom, and Flooring Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Kitchen, Bathrooms & Floors
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 mb-4">
            Summit Core: Your Fix-and-Flip Partnership
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Serving the Tampa Bay Area
          </p>
          <CTAButton />
        </div>
      </section>

      {/* Category Slider */}
      <CategorySlider />
    </>
  );
}

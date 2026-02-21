import { Metadata } from 'next';

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export function generateMetadata({ title, description, path = '', image }: SEOHeadProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://summitcore.com';
  const fullUrl = `${baseUrl}${path}`;
  const imageUrl = image ? `${baseUrl}${image}` : `${baseUrl}/img/hero/hero-bg.JPG`;

  return {
    title: `${title} | Summit Core - Fix-and-Flip Partnership`,
    description,
    openGraph: {
      title: `${title} | Summit Core`,
      description,
      url: fullUrl,
      siteName: 'Summit Core',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Summit Core`,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Summit Core',
    description: 'Fix-and-flip partnership specializing in kitchen, bathroom, and flooring solutions',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tampa Bay Area',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: 'Tampa Bay Area',
    },
    serviceType: ['Kitchen Renovation', 'Bathroom Remodeling', 'Flooring Installation'],
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://summitcore.com',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}


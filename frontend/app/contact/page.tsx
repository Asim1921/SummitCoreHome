import { generateMetadata } from '@/components/SEOHead';
import ContactPageClient from './ContactPageClient';

export const metadata = generateMetadata({
  title: 'Contact Us',
  description: 'Get your free estimate from Summit Core. Contact us for kitchen, bathroom, and flooring solutions in the Tampa Bay Area.',
  path: '/contact',
});

export default function ContactPage() {
  return <ContactPageClient />;
}

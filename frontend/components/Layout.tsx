import { ReactNode } from 'react';
import { StructuredData } from './SEOHead';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <StructuredData />
      <main className="min-h-screen">
        {children}
      </main>
    </>
  );
}

